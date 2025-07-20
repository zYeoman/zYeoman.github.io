---
layout: null
---

// Variables
var sidebar    = $("#sidebar"),
    container  = $("#post"),
    content    = $("#pjax");

// Detect window size, if less than 1360px/85em add class "mobile" to sidebar therefore it will be auto hide when trigger the pjax request in small screen devices.
if ($(window).width() <= 1360) {
  sidebar.addClass("mobile");
}
// var valine = new Valine();
var clipboardSnippets = new ClipboardJS('[data-clipboard-snippet]',{
  target: function(trigger) {
    return trigger.nextElementSibling;
  }
});
clipboardSnippets.on('success', function(e) {
  e.trigger.innerText = "copied!";
  setTimeout(function() {
    e.trigger.innerText = "copy";
  }, 1200);
  e.clearSelection();
});
clipboardSnippets.on('error', function(e) {
  e.trigger.innerText = "fail!";
  setTimeout(function() {
    e.trigger.innerText = "copy";
  }, 1200);
});

$.expr[':'].external = function(obj){
    return !obj.href.match(/^mailto\:/)
           && (obj.hostname != location.hostname)
           && !obj.href.match(/^javascript\:/)
           && !obj.href.match(/^$/)
};

// Tags switcher
$("#tags-ul").on("click","li",function(event){
  $(this).addClass("active").siblings().removeClass("active");
  $(".pl-all").hide();
  $("." + $(this).attr("id")).delay(50).fadeIn(350);
});

// If sidebar has class "mobile", hide it after clicking.
$("#pl-container").on("click","a.pl-all",function() {
  $(this).addClass("active").siblings().removeClass("active");
  if (sidebar.hasClass("mobile")) {
    sidebar.removeClass("fullscreen");
    container.removeClass("fullscreen");
  }
});

$(document).mouseup(function(e){
  if(!sidebar.is(e.target) && sidebar.has(e.target).length === 0 && e.target.id != "js-fullscreen") {
    if(sidebar.hasClass("mobile") && sidebar.hasClass("fullscreen")) {
      sidebar.removeClass("fullscreen");
      container.removeClass("fullscreen");
    }
  }
});

// Enable fullscreen.
$("#js-fullscreen").on("click", function() {
  if (sidebar.hasClass("fullscreen")) {
    sidebar.removeClass("fullscreen");
    container.removeClass("fullscreen");
  } else {
    sidebar.addClass("fullscreen");
    container.addClass("fullscreen");
  }
});

$("#mobile-avatar").on("click", function(){
    sidebar.removeClass("fullscreen");
    container.removeClass("fullscreen");
});

//Search Box
/**
 * Created by zteliuyw on 15/5/28.
 */
$(function(){
    //搜索框文字变化时间
    $("#search-input").keyup(function(){
        var text = $("#search-input").val().toLowerCase();
        if(text =="" || text==undefined){
            $("#pl-container").find("a").show();
        }else{
            $("#pl-container").find("a").hide();
            $(".pl-title").each(function(){
                var htmlstr = $(this).html().toLowerCase();
                if(PinyinMatch.match(htmlstr, text)){
                    $(this).parent().show();
                }
            });
        }
    });
});

// Pjax
$(document).pjax("#avatar, #mobile-avatar, .pl-all", "#pjax", { fragment: "#pjax", timeout: 10000 });
$(document).on({
  "pjax:click": function() {
    content.removeClass("fadeIn").addClass("fadeOut");
  },
  "pjax:start": function() {
    content.css({"opacity":0});
  },
  "pjax:end": function() {
    container.scrollTop(0);
    content.css({"opacity":1}).removeClass("fadeOut").addClass("fadeIn");
    afterPjax();
  }
});

// Re-run scripts for post content after pjax
function afterPjax() {
  // Open links in new tab
    // https://stackoverflow.com/questions/12041935/how-to-automatically-add-target-blank-to-external-links-only
  $("a:external").attr({"rel":"noopener", "target":"_blank"});
  $(document).pjax("[href^='/']", "#pjax", { fragment: "#pjax", timeout: 10000 });

  var toc = $("#markdown-toc");

  // Smooth scrolling
  toc && toc.on("click", "a", function() {
    var target = $(this.hash);
    container.animate({scrollTop: target.offset().top + container.scrollTop() - 70}, 500, function() { });
  });

  toc && toc.find("a").each(function() {
      href = $(this).attr('href');
      $(this).attr('href', decodeURIComponent(href));
  });

  var bord = $("<div class='highlight-title'></div>");
  toc && bord.appendTo(toc)

  // Scrolling highlight
  headers = container.find("h2,h3");
  toc && container.scroll(function() {
    var n = $(window).scrollTop();
    headers.eq(0).offset().top < n + 40 ? (bord.show(),
      headers.each(function(ind, inner) {
        var o = headers.last().offset().top - n;
        if (headers.eq(Math.min(Math.max(0, ind+1), headers.length-1)).offset().top > n || o < 0) {
          var id = $(this).attr("id");
          let toc = $("#markdown-toc");
          if (toc.length) {
            var cur = o < 0 ? toc.find("a").last() : $("a[href='#"+id+"']")
            var top = cur.offset().top - toc.offset().top + toc.scrollTop();
            bord.css("top", top).height(cur.outerHeight());
            toc.find("li").removeClass("active");
            cur.parent().addClass("active");
            if (top + 40 > $(window).height() / 2) {
              var hei = cur.parent().offset().top - toc.offset().top + toc.scrollTop();
              hei > 0 && toc.scrollTop(hei);
            } else {
              toc.scrollTop(0);
            }
          }
          return !1;
        }
      })) : (bord.hide(),toc.find("li").removeClass("active"));
  });

  $(document).ready(function () {
    if (!document.querySelector('code.language-mermaid')) return;
    if (!!window.mermaid) return;

    const script = document.createElement('script');
    script.src = '//cdnjs.cloudflare.com/ajax/libs/mermaid/11.8.1/mermaid.min.js';
    script.onload = initMermaid;
    document.head.appendChild(script);

    function initMermaid() {
      mermaid.initialize({
        startOnLoad:false,
        theme: "default",
      });
      window.mermaid.init(undefined, document.querySelectorAll('.language-mermaid'));
    }
  });

  $(document).ready(function () {
    if (!document.querySelector('#comment')) return;
    if (!!window.twikoo) return;

    const script = document.createElement('script');
    script.src = '//cdnjs.cloudflare.com/ajax/libs/twikoo/1.6.22/twikoo.all.min.js';
    script.onload = initTwikoo;
    document.head.appendChild(script);

    function initTwikoo() {
      twikoo.init({
        envId: '{{site.twikoo.envId}}', // 腾讯云环境填 envId；Vercel 环境填地址（https://xxx.vercel.app）
        el: '#comment', // 容器元素
      })
    }
  });

  $("script[type='math/tex']").replaceWith(function() {
    var tex = $(this).html();
    return katex.renderToString(tex.replace(/%.*/g, ''), {displayMode: false});
  });
  $("script[type='math/tex; mode=display']").replaceWith(function() {
    var tex = $(this).html();
    return katex.renderToString(tex.replace(/%.*/g, ''), {displayMode: true});
  });
  renderMathInElement(
    document.getElementById("post"),
    {
      delimiters: [
        {left: "$$", right: "$$", display: true},
        {left: "\\[", right: "\\]", display: true},
        {left: "$", right: "$", display: false},
        {left: "\\(", right: "\\)", display: false}
      ]
    }
  );

  var url = window.location.toString();
  var id = decodeURIComponent(url).split('#');
  if (id.length>1) {
    var target = $("#"+id[1]);
    container.delay(700).animate({scrollTop: target.offset().top + container.scrollTop() - 70}, 500, function() { });
  }
  $("div.highlight").each(function() {
    $(this).prepend('<button class="btn" data-clipboard-snippet>copy</button>')
  })
}afterPjax();


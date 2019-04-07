---
layout: null
---

// Variables
var sidebar    = $("#sidebar"),
    container  = $("#post"),
    content    = $("#pjax");

// Detect window size, if less than 1280px add class "mobile" to sidebar therefore it will be auto hide when trigger the pjax request in small screen devices.
if ($(window).width() <= 1280) {
  sidebar.addClass("mobile");
}
var valine = new Valine();
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
  if(!sidebar.is(e.target) && sidebar.has(e.target).length === 0) {
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

  // Smooth scrolling
  $("#markdown-toc").on("click", "a", function() {
    var target = $(this.hash);
    container.animate({scrollTop: target.offset().top + container.scrollTop() - 70}, 500, function() { });
  });

  $("#markdown-toc").find("a").each(function() {
      href = $(this).attr('href');
      $(this).attr('href', decodeURIComponent(href));
  });

  // Scrolling highlight
  $("#post").scroll(function() {
          $("h2").each(function() {
          if($(window).scrollTop() + $(window).height()/3 >= $(this).offset().top) {
              var id = $(this).attr("id");
              $("a[href='#"+id+"']").parent().addClass("active").siblings().removeClass("active");
          }
      });
  });

  $("script[type='math/tex']").replaceWith(function() {
    var tex = $(this).html();
    return katex.renderToString(tex.replace(/%.*/g, ''), {displayMode: false});
  });
  $("script[type='math/tex; mode=display']").replaceWith(function() {
    var tex = $(this).html();
    return katex.renderToString(tex.replace(/%.*/g, ''), {displayMode: true});
  });

  valine.init({
    el: "#comment" ,
    notify:false,
    verify:false,
    appId: "{{site.leancloud.app_id}}",
    appKey: "{{site.leancloud.app_key}}",
    placeholder: "LONG MAY THE SUN SHINE!",
    path:window.location.pathname,
    noemoji:true,
    stickers: {
      data: {
"啊":"啊.png", "鄙视":"鄙视.png", "不高兴":"不高兴.png", "彩虹":"彩虹.png", "茶杯":"茶杯.png", "大拇指":"大拇指.png", "灯泡":"灯泡.png", "乖":"乖.png", "哈哈":"哈哈.png", "汗":"汗.png", "呵呵":"呵呵.png", "黑线":"黑线.png", "呼":"呼.png", "花心":"花心.png", "滑稽":"滑稽.png", "惊哭":"惊哭.png", "惊讶":"惊讶.png", "开心":"开心.png", "酷":"酷.png", "狂汗":"狂汗.png", "泪":"泪.png", "冷":"冷.png", "礼物":"礼物.png", "玫瑰":"玫瑰.png", "勉强":"勉强.png", "怒":"怒.png", "喷":"喷.png", "钱币":"钱币.png", "钱":"钱.png", "弱":"弱.png", "生气":"生气.png", "胜利":"胜利.png", "睡觉":"睡觉.png", "太开心":"太开心.png", "吐舌":"吐舌.png", "吐":"吐.png", "委屈":"委屈.png", "笑眼":"笑眼.png", "咦":"咦.png", "疑问":"疑问.png", "阴险":"阴险.png", "音乐":"音乐.png", "真棒":"真棒.png", "haha":"haha.png"
      },
      pre: "/assets/sm/paopao/"
    },
    visitor:true,
    avatar:"retro"
  });
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


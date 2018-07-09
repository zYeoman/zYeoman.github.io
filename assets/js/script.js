---
layout: null
---

/*!--------------------------------*\
   3-Jekyll Theme
   @author Peiwen Lu (P233)
   https://github.com/P233/3-Jekyll
\*---------------------------------*/

// Detect window size, if less than 1280px add class "mobile" to sidebar therefore it will be auto hide when trigger the pjax request in small screen devices.
if ($(window).width() <= 1280) {
  $("#sidebar").addClass("mobile");
}
var valine = new Valine();

// Variables
var sidebar    = $("#sidebar"),
    container  = $("#post"),
    content    = $("#pjax"),
    button     = $("#js-fullscreen");

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
$(".pl-all").on("click","a",function() {
  $(this).addClass("active").siblings().removeClass("active");
  if (sidebar.hasClass("mobile")) {
    sidebar.addClass("fullscreen");
    button.addClass("fullscreen");
    content.addClass("fullscreen");
  }
});

// Enable fullscreen.
button.on("click", function() {
  if (button.hasClass("fullscreen")) {
    sidebar.removeClass("fullscreen");
    button.removeClass("fullscreen");
    content.delay(300).queue(function(){
      $(this).removeClass("fullscreen").dequeue();
    });
  } else {
    sidebar.addClass("fullscreen");
    button.addClass("fullscreen");
    content.delay(200).queue(function(){
      $(this).addClass("fullscreen").dequeue();
    });
  }
});

$("#mobile-avatar").on("click", function(){
    sidebar.addClass("fullscreen");
    button.addClass("fullscreen");
    content.addClass("fullscreen");
});

//Search Box
/**
 * Created by zteliuyw on 15/5/28.
 */
$(function(){
    //搜索框文字变化时间
    $("#search-input").keyup(function(){
        //$("#s-box").hide("slow");
        var text = $("#search-input").val().toLowerCase();
        //console.log(text);
        if(text =="" || text==undefined){
            $("#pl-container").find("a").show();
        }else{
            $("#pl-container").find("a").hide();
            $(".pl-title").each(function(){
                var htmlstr = $(this).html().toLowerCase();
                if(htmlstr.indexOf(text) != -1){
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

  $.getScript("//dn-lbstatics.qbox.me/busuanzi/2.3/busuanzi.pure.mini.js");

  // Smooth scrolling
  $("#markdown-toc").on("click", "a", function() {
    var target = $(this.hash);
    container.animate({scrollTop: target.offset().top + container.scrollTop() - 70}, 500, function() {
      target.addClass("flash").delay(700).queue(function() {
        $(this).removeClass("flash").dequeue();
      });
    });
  });

  $("#markdown-toc").find("a").each(function() {
      href = $(this).attr('href');
      $(this).attr('href', decodeURIComponent(href));
  });

  // Scrolling highlight
  $("#post").scroll(function() {
          $(":header").each(function() {
          if($(window).scrollTop() + $(window).height()/3 >= $(this).offset().top) {
              var id = $(this).attr("id");
              $("a").parent().removeClass("active");
              $("a[href='#"+id+"']").parent().addClass("active").parent().parent().addClass("active");
          }
      });
  });
  $("#post__content img").popImg();

  MathJax.Hub.Queue(["Typeset",MathJax.Hub]);

  {% if site.analytics.google %}
      ga('send', 'pageview', window.location.pathname);
  {% endif %}

  valine.init({
      el: "#comment" ,
      notify:false,
      verify:false,
      appId: "{{site.leancloud.app_id}}",
      appKey: "{{site.leancloud.app_key}}",
      placeholder: "LONG MAY THE SUN SHINE!",
      path:window.location.pathname,
      avatar:"retro"
  });
  var url = window.location.toString();
  var id = decodeURIComponent(url).split('#');
  if (id.length>1) {
    var target = $("#"+id[1]);
    container.delay(700).animate({scrollTop: target.offset().top + container.scrollTop() - 70}, 500, function() { });
  }
}afterPjax();


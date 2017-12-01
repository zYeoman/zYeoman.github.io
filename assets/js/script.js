---
layout: null
---

/*!--------------------------------*\
   3-Jekyll Theme
   @author Peiwen Lu (P233)
   https://github.com/P233/3-Jekyll
\*---------------------------------*/

// Detect window size, if less than 1280px add class 'mobile' to sidebar therefore it will be auto hide when trigger the pjax request in small screen devices.
if ($(window).width() <= 1280) {
  $('#sidebar').addClass('mobile')
}
var valine = new Valine();

// Variables
var sidebar    = $('#sidebar'),
    container  = $('#post'),
    content    = $('#pjax'),
    button     = $('#js-fullscreen');

// Tags switcher
var clickHandler = function(id) {
  return function() {
    $(this).addClass('active').siblings().removeClass('active');
    $('.pl__all').hide();
    $('.' + id).delay(50).fadeIn(350);
  }
};

$('#tags__ul li').each(function(index){
  $('#' + $(this).attr('id')).on('click', clickHandler($(this).attr('id')));
});

// If sidebar has class 'mobile', hide it after clicking.
$('.pl__all').on('click', function() {
  $(this).addClass('active').siblings().removeClass('active');
  if (sidebar.hasClass('mobile')) {
      $('#sidebar, #pjax, #js-fullscreen').addClass('fullscreen');
  }
});

// Enable fullscreen.
button.on('click', function() {
  if (button.hasClass('fullscreen')) {
    sidebar.removeClass('fullscreen');
    button.removeClass('fullscreen');
    content.delay(300).queue(function(){
      $(this).removeClass('fullscreen').dequeue();
    });
  } else {
    sidebar.addClass('fullscreen');
    button.addClass('fullscreen');
    $("#markdown-toc").addClass('fullscreen');
    content.delay(200).queue(function(){
      $(this).addClass('fullscreen').dequeue();
    });
  }
});

$('#mobile-avatar').on('click', function(){
  $('#sidebar, #pjax, #icon-arrow').addClass('fullscreen');
});


// Pjax
$(document).pjax('#avatar, #mobile-avatar, .pl__all', '#pjax', { fragment: '#pjax', timeout: 10000 });
$(document).on({
  'pjax:click': function() {
    content.removeClass('fadeIn').addClass('fadeOut');
  },
  'pjax:start': function() {
    content.css({'opacity':0});
  },
  'pjax:end': function() {
    container.scrollTop(0);
    content.css({'opacity':1}).removeClass('fadeOut').addClass('fadeIn');
    afterPjax();
  }
});

// Re-run scripts for post content after pjax
function afterPjax() {
  // Open links in new tab
  $('#post__content a').attr('target','_blank');

    $.getScript("//dn-lbstatics.qbox.me/busuanzi/2.3/busuanzi.pure.mini.js");
    valine.init({
        el: '#comment' ,
        notify:false,
        verify:false,
        appId: '{{site.leancloud.app_id}}',
        appKey: '{{site.leancloud.app_key}}',
        placeholder: 'LONG MAY THE SUN SHINE!',
        path:window.location.pathname,
        avatar:'retro'
    });

  $("#post__content > p").each(function(){
    html = $(this).html();
    $(this).html(html.split("<br>").join("</p><p>"))
  })
  // Smooth scrolling
  $('.js-anchor-link').on('click', function() {
    var target = $(this.hash);
    container.animate({scrollTop: target.offset().top + container.scrollTop() - 70}, 500, function() {
      target.addClass('flash').delay(700).queue(function() {
        $(this).removeClass('flash').dequeue();
      });
    });
  });

  // Scrolling highlight
  $("#post").scroll(function() {
          $(":header").each(function() {
          if($(window).scrollTop() + $(window).height()/3 >= $(this).offset().top) {
              var id = $(this).attr('id');
              $('a').parent().removeClass('active');
              $('a[href="#'+ id +'"]').parent().addClass('active');
          }
      });
  });
  $("#post__content img").popImg();

  MathJax.Hub.Queue(["Typeset",MathJax.Hub]);

}afterPjax();


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

function addCount(Counter) {
    var Counter = AV.Object.extend("Counter");
    url = $(".leancloud_visitors").attr('id').trim();
    title = $(".leancloud_visitors").attr('data-flag-title').trim();
    var query = new AV.Query(Counter);
    query.equalTo("url", url);
    query.find({
        success: function(results) {
            if (results.length > 0) {
                var counter = results[0];
                counter.fetchWhenSave(true);
                counter.increment("time");
                counter.save(null, {
                    success: function(counter) {
                        $(".leancloud-visitors-count").text(counter.get('time'));
                    },
                    error: function(counter, error) {
                        console.log('Failed to save Visitor num, with error message: ' + error.message);
                    }
                });
            } else {
                var newcounter = new Counter();
                newcounter.set("title", title);
                newcounter.set("url", url);
                newcounter.set("time", 1);
                newcounter.save(null, {
                    success: function(newcounter) {
                        console.log("newcounter.get('time')="+newcounter.get('time'));
                        $(".leancloud-visitors-count").text(newcounter.get('time'));
                    },
                    error: function(newcounter, error) {
                        console.log('Failed to create');
                    }
                });
            }
        },
        error: function(error) {
            console.log('Error:' + error.code + " " + error.message);
        }
    });
}
// Variables
var sidebar    = $('#sidebar'),
    container  = $('#post'),
    content    = $('#pjax'),
    button     = $('#icon-arrow');

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
      $('#sidebar, #pjax, #icon-arrow').addClass('fullscreen');
  }
});

// Enable fullscreen.
$('#js-fullscreen').on('click', function() {
  if (button.hasClass('fullscreen')) {
    sidebar.removeClass('fullscreen');
    button.removeClass('fullscreen');
    content.delay(300).queue(function(){
      $(this).removeClass('fullscreen').dequeue();
    });
  } else {
    sidebar.addClass('fullscreen');
    button.addClass('fullscreen');
    content.delay(200).queue(function(){
      $(this).addClass('fullscreen').dequeue();
    });
  }
});

$('#mobile-avatar').on('click', function(){
  $('#sidebar, #pjax, #icon-arrow').addClass('fullscreen');
});

{% if site.disqus_shortname %}
    (function() { // DON'T EDIT BELOW THIS LINE
    var d = document, s = d.createElement('script');
    s.src = 'https://{{ site.disqus_shortname }}.disqus.com/embed.js';
    s.setAttribute('data-timestamp', +new Date());
    (d.head || d.body).appendChild(s);
    })();
{% endif %}

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

    // post read count
    $(function() {
        var Counter = AV.Object.extend("Counter");
        if ($('.leancloud_visitors').length == 1) {
            addCount(Counter);
        }
    });
  // Generate post TOC for h1 h2 and h3
  var toc = $('#post__toc-ul');
  // Empty TOC and generate an entry for h1
  toc.empty();

  // Generate entries for h2 and h3
  $('#post__content').children('h2,h3').each(function() {
    // Generate random ID for each heading
    $(this).attr('id', function() {
      var ID = "",
          alphabet = "abcdefghijklmnopqrstuvwxyz";

      for(var i=0; i < 5; i++) {
        ID += alphabet.charAt(Math.floor(Math.random() * alphabet.length));
      }
      return ID;
    });

    if ($(this).prop("tagName") == 'H2') {
      toc.append('<li class="toc_h2"><a href="#' + $(this).attr('id') + '" class="js-anchor-link">' + $(this).text() + '</a></li>');
    } else {
      $('#post__toc-ul li.toc_h2').last().append('<ul><li class="toc_h3"><a href="#' + $(this).attr('id') + '" class="js-anchor-link">' + $(this).text() + '</a></li></ul>');
    }
  });

  if ($('#post__toc-ul').children().length > 0) {
    $("#toc").removeClass('hidden');
  }
  else {
    $("#toc").addClass('hidden');
  }
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

    {% if site.disqus_shortname %}
      if(typeof DISQUS != "undefined") {
          DISQUS.reset({
              reload: true,
              config: disqus_config,
          });
      }
    {% endif %}
}afterPjax();


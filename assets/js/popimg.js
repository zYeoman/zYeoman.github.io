$.fn.popImg = function() {

  var $layer = $("<div/>").css({
    position: "fixed",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    height: "100%",
    width: "100%",
    zIndex: 9999999,
    background: "#000",
    opacity: "0.6",
    display: "none"
  }).attr("data-id", "b_layer");

  var cloneImg = function($node) {
    var left = $node.offset().left;
    var top = $node.offset().top;
    var nodeW = $node.width();
    var nodeH = $node.height();
    return $node.clone().css({
      position: "fixed",
      width: nodeW,
      height: nodeH,
      left: left,
      top: top,
      zIndex: 10000000
    });
  };

  var justifyImg = function($c) {
    var dW = $(window).width();
    var dH = $(window).height();
    $c.css("cursor", "zoom-out").attr("data-b-img", 1);
    var img = new Image();
    img.onload = function(){
        var width = this.width;
        var height = this.height
        if (this.width > dW || this.height > dH) {
            width = this.width/Math.max(this.width/dW, this.height/dH);
            height = this.height/Math.max(this.width/dW, this.height/dH);
        }
      $c.stop().animate({
        width: width,
        height: height,
        left: Math.max((dW - width) / 2, 0),
        top: Math.max((dH - height) / 2, 0)
      }, 300);
    };
    img.src = $c.attr("src");
  };

  this.each(function(){
    $(this).css("cursor", "zoom-in").on("click", function(){
      var $b = $("body");
      $layer.appendTo($b);
      $layer.fadeIn(300);
      var $c = cloneImg($(this));
      $c.appendTo($b);
      justifyImg($c);
    });
  });

  var timer = null;
  $(window).on("resize", function(){
    $("img[data-b-img]").each(function(){
      var $this = $(this);
      timer && clearTimeout(timer);
      timer = setTimeout(function(){
        justifyImg($this);
      }, 10);
    });
  });

  $(window).on("click keydown", function(evt){
    if(evt.type == "keydown" && evt.keyCode === 27) {
      $layer.fadeOut(300);
      $("img[data-b-img]").remove();
    }
    var $this = $(evt.target);
    if($this.attr("data-id") == "b_layer" || $this.attr("data-b-img") == 1) {
      $layer.fadeOut(300);
      $("img[data-b-img]").remove();
    }
  });

};

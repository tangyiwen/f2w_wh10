$(document).ready(function(){
  $(window).scroll(function () {
    var scrollVal = $(this).scrollTop();
    $("span.qScrollTop").text(scrollVal);
    if( scrollVal > 300 ){
      $(".figure img").css({display:"block"});
      $(".img_left").animate({marginLeft:'0px'});
      $(".img_right").animate({marginRight:'0px'});
  }
  });
});

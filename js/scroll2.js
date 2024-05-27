$(document).ready(function(){

  $(window).scroll(function(){
    let scrollPosion=$(this).scrollTop();
    $("#quickBanner").stop().animate({top:scrollPosion+350},400);
  });

});
$(document).ready(function(){

  // 따라다니는 퀵메뉴
  $(window).scroll(function(){
    let scrollPosion=$(this).scrollTop()+50;
    $(".quick").stop().animate({top:scrollPosion});
  });

  // TOP버튼
  $(".topmove").click(function(){
    $("html,body").animate({scrollTop:"0"});
  });

});
$(document).ready(function(){

  //퀵메뉴 이미지오버
  $(".quick_icon li").hover(function () {
    qnum = $(this).index()+1;  
    $(this).find("a img").attr({"src":"image/rquick_on_0"+qnum+".png"});    
  },function () {
    $(this).find("a img").attr({"src":"image/rquick_0"+qnum+".png"});
  });

  //animate부분(close/open)
  qchk=true;

  $(".quick_toggle").click(function(){

    $(this).toggleClass("quick_open");

    if(qchk){
      $(this).stop().animate({marginRight:"-70px"},500); //close버튼 오른쪽으로 이동
      $(".quickmenu").stop().animate({marginRight:"-70px"},500); //퀵메뉴 오른쪽으로 이동
      qchk=false;
    }else{
      $(this).stop().animate({marginRight:"0px"},500); //close버튼 오른쪽으로 이동
      $(".quickmenu").stop().animate({marginRight:"0px"},500); //퀵메뉴 오른쪽으로 이동
      qchk=true;
    }

  });

});
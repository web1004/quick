$(document).ready(function(){

  // 탑버튼&오른쪽 퀵메뉴______________________________

  $(".top_btn").hide();  //탑버튼 숨기기
  $("#scroll_btn").hide();  //퀵메뉴 숨기기

  $(window).scroll(function(){

    let scollpos=$(this).scrollTop();

    $("#txt1").text(scollpos); //스크롤바가 이동될 때마다 스크롤위치값 나타내기

    //스크롤이 350이상일때  TOP버튼,오른쪽 퀵메뉴 보이게 하고 스크롤을 올리면 다시 숨김
    if(scollpos > 350){
      $(".top_btn").fadeIn();
      $("#scroll_btn").fadeIn();
    }else{
      $(".top_btn").fadeOut();
      $("#scroll_btn").fadeOut();
    };

    //scroll 350~799
  /*  if(scollpos>=350 && scollpos<800){
      $("#scroll_btn ul .scb1").css({"width":"110px","border-radius":"25px","transition":"0.3s"});
      $("#scroll_btn ul .scb1 a .scroll_hover").css({"display":"inline-block"});
    }else{
      $("#scroll_btn ul .scb1").css({"width":"35px","border-radius":"50%"});
      $("#scroll_btn ul .scb1 a .scroll_hover").css({"display":"none"});
    }; */

    if(scollpos>=350 && scollpos<800){
      $("#scroll_btn ul .scb1").addClass("active");
      $("#scroll_btn ul .scb1 a .scroll_hover").addClass("active");
    }else{
      $("#scroll_btn ul .scb1").removeClass("active");
      $("#scroll_btn ul .scb1 a .scroll_hover").removeClass("active");
    };

    //scroll 800~1599
    if(scollpos>=800 && scollpos<1600){
      $("#scroll_btn ul .scb2").addClass("active");
      $("#scroll_btn ul .scb2 a .scroll_hover").addClass("active");
    }else{
      $("#scroll_btn ul .scb2").removeClass("active");
      $("#scroll_btn ul .scb2 a .scroll_hover").removeClass("active");
    };

    //scroll 1600~2999
    if(scollpos>=1600 && scollpos<3000){
      $("#scroll_btn ul .scb3").addClass("active");
      $("#scroll_btn ul .scb3 a .scroll_hover").addClass("active");
    }else{
      $("#scroll_btn ul .scb3").removeClass("active");
      $("#scroll_btn ul .scb3 a .scroll_hover").removeClass("active");
    };

  });


  //오른쪽 퀵메뉴가 보일때 클릭시 각 콘텐츠의 위치로 이동
  $("#scroll_btn ul .scb1").click(function(){
    $("body,html").animate({scrollTop:"250px"},700);
  });
  $("#scroll_btn ul .scb2").click(function(){
		$("body,html").animate({scrollTop:"1000px"},700);
	});
	$("#scroll_btn ul .scb3").click(function(){
		$("body,html").animate({scrollTop:"1800px"},700);
	});


  //TOP버튼 클릭시 맨위로
  $(".top_btn").click(function(){
    $("html,body").animate({scrollTop:"0"});
  });

});
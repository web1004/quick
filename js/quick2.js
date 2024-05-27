$(document).ready(function(){
  
  quick=true;
  $(".trigger_btn").click(function(){
    $(this).toggleClass("active");

    //상하간격을 고려하여 위치를 잡아줌
    if(quick){
      $(".quick_icon .icon5").stop().animate({"bottom":"60px"},500,"easeOutBack");
      $(".quick_icon .icon4").stop().animate({"bottom":"120px"},500,"easeOutBack");
			$(".quick_icon .icon3").stop().animate({"bottom":"180px"},500,"easeOutBack");
			$(".quick_icon .icon2").stop().animate({"bottom":"240px"},500,"easeOutBack");
			$(".quick_icon .icon1").stop().animate({"bottom":"300px"},500,"easeOutBack");
      quick = false;
    }else{
      $(".quick_icon li").stop(true,true).animate({"bottom":"0px"},200);
      quick = true;
    };
  });

});
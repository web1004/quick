$(document).ready(function(){

  //QuickMenu(close/open)...........................

	bb=true;
	$(".trigger_btn").click(function(){
		
    $(this).toggleClass("active");

		if(bb){
			$(".quick_icon .icon5").stop(true,true).animate({"bottom":"50px"},500,"easeOutBack");
			$(".quick_icon .icon4").stop(true,true).animate({"bottom":"100px"},500,"easeOutBack");
			$(".quick_icon .icon3").stop(true,true).animate({"bottom":"150px"},500,"easeOutBack");
			$(".quick_icon .icon2").stop(true,true).animate({"bottom":"200px"},500,"easeOutBack");
			$(".quick_icon .icon1").stop(true,true).animate({"bottom":"250px"},500,"easeOutBack");
			bb=false;

		}else{
			$(".quick_icon li").stop(true,true).animate({"bottom":"0px"},200);
			bb=true;
		}

	});

});
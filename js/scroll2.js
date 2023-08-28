$(document).ready(function(){

  $(window).scroll(function(){ 

    let pos=$(this).scrollTop();
    $("#QuickBanner").stop().animate({top:pos+350},400);

  });

});
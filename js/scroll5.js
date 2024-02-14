$(document).ready(function(){

  $(window).scroll(function(){

    let pos = $(window).scrollTop();

    if(pos>50){
      $("header, .btn-top").addClass('active');
    }else{
      $("header, .btn-top").removeClass('active');
    };

  });

});
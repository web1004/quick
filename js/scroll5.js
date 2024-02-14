$(document).ready(function(){

  $('.gnb a').click(function(e){
    var linkLocation = $(this).attr('href');
    $('html, body').animate({
      scrollTop: $(linkLocation).offset().top
    }, 500);
    e.preventDefault();
  });

});
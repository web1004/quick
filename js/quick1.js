$(document).ready(function(){

  $btnSidebarIcon = $('.btn-sidebar span:nth-child(1)'),
  $btnSidebarText = $('.btn-sidebar span:nth-child(2)');

  chk = true;
  $('.btn-sidebar').click(function(){
    $('.sidebar-content').toggleClass('active');
    $btnSidebarIcon.toggleClass('xi-angle-right-thin xi-angle-left-thin');

    //텍스트 변경 open을 close로, close를 open으로
    if(chk){
      $btnSidebarText.text('close');
      chk = false;
    }else{
      $btnSidebarText.text('open');
      chk = true;
    };
  });

});
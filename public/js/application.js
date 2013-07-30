$(document).ready(function() {
  $('.awesomeness_teller').on('click', function() {
    $('h1').text($(this).data('heading'));
  });

  $('.skill_teller').on('click', function(){
    $('h1').text(window.location.pathname.split('/')[2]);
  });



});


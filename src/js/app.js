import * as functions from "./modules/functions.js";

functions.isWebp();
functions.subMenu();
functions.openMenu();
functions.sidebarToggles();
functions.openFilter();

$(function() {
  $('form.cb').submit(function(e) {
      //отмена действия по умолчанию для кнопки submit
      e.preventDefault(); 
      
      var $form = $(this);
      $.ajax({
          type: $form.attr('method'),
          url: $form.attr('action'),
          data: $form.serialize()
      }).done(function() {
          window.location.href = '/order/thank-you/';
      }).fail(function() {
          console.log('fail');
      });
  });
});

$('.popup-open').click(function() {
$('.popup-fade').fadeIn();
return false;
});	

$('.popup-close').click(function() {
$(this).parents('.popup-fade').fadeOut();
return false;
});		

$(document).keydown(function(e) {
if (e.keyCode === 27) {
  e.stopPropagation();
  $('.popup-fade').fadeOut();
}
});

$('.popup-fade').click(function(e) {
if ($(e.target).closest('.popup').length == 0) {
  $(this).fadeOut();					
}
});
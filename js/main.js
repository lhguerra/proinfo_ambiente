// custom scrollbar
$(document).ready(function() {
  $(".scroll").customScrollbar({
    skin: "default-skin",
    hScroll: false
  });
  $('.has-scroller-elms').on('shown.bs.modal', function () {
    $(".scroll").customScrollbar({
      skin: "default-skin",
      hScroll: false
    });
  });
});

// increase font-size
$(document).ready(function() {

  // aumentando a fonte
  $(".inc-font").click(function () {
    var size = $("body").css('font-size');

    size = size.replace('px', '');
    size = parseInt(size) + 2;

    $("body").animate({'font-size' : size + 'px'});
    $('#myframe').contents().find('body').animate({'font-size' : size + 'px'});
  });

  //diminuindo a fonte
  $(".dec-font").click(function () {
    var size = $("body").css('font-size');

    size = size.replace('px', '');
    size = parseInt(size) - 2;

    $("body").animate({'font-size' : size + 'px'});
    $('#myframe').contents().find('body').animate({'font-size' : size + 'px'});
  });

  // resetando a fonte
  $(".res-font").click(function () {
    $("body").animate({'font-size' : '14px'});
    $('#myframe').contents().find('body').animate({'font-size' : '14px'});
  });
});

// profile menu
$(document).ready(function(){
  $('#user').click(function(ev){
    ev.preventDefault();
    ev.stopImmediatePropagation()
    $('#user-modal').toggleClass('appear');
  });
});

// hipermidiaMenu
$(function () {
  var hipermidiaMenu = $('.hipermidia-show');

  hipermidiaMenu.bind('click', function(foo) {
    $('.appear').removeClass('appear');
    foo.preventDefault();
    foo.stopImmediatePropagation()
    var target = $(this).attr('data-target');
    $('#' + target).toggleClass('appear');

    $(".scroll").customScrollbar({
      skin: "default-skin",
      hScroll: false
    });
  });

  $(window).bind('click', function(ev) {
      $('.appear').removeClass('appear');
    });
});

// bxSlider
$(document).ready(function(){
  $('.bxslider').bxSlider({
    minSlides: 4,
    maxSlides: 4,
    slideWidth: 200,
    slideMargin: 30,
    pager: false
  });
});

// hipermidia iframe
function resizeContent() {
  var h = $('#myframe').contents().find('body').height();
  $('#myframe').height(h);
  $('#body').height(h + 20 + 32);
}
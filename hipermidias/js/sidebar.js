$(document).ready(function(){
  function fire_evt_scrolls() {
    $(".scroll").customScrollbar({
      skin: "default-skin",
      hScroll: false,
      updateOnWindowResize:true
    });
  }

  $('.sidebar-open').on('click', function(ev) {
    ev.preventDefault();
    var target = $(this).attr('data-sidebar-target');
    if (target == undefined || target == '') {
      window.alert('missing target'); return;
    }
    $(target).addClass('open');
    fire_evt_scrolls();
  });

  $('.sidebar-close').on ('click', function(ev){
    ev.preventDefault();
    var target = $(this).attr('data-sidebar-target');
    if (target == undefined || target == '') {
      window.alert('missing target'); return;
    }
    $(target).removeClass('open');
  });

  fire_evt_scrolls();
});

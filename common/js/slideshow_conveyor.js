
function conveyor_slide_slideSwitch() {
   var $active = $('#conveyor_slide img.active');

   if ( $active.length == 0 ) $active = $('#conveyor_slide img:last');

   var $next =  $active.next().length ? $active.next()
      : $('#conveyor_slide img:first');

   $active.addClass('last-active');

   $next.css({opacity: 0.0})
      .addClass('active')
      .animate({opacity: 1.0}, 1000, function() {
           $active.removeClass('active last-active');
      });
}

$(function() {
   setInterval( "conveyor_slide_slideSwitch()", 3000 );
});

function contents_conveyor_slideSwitch() {
   var $active = $('#contents_conveyor img.active');

   if ( $active.length == 0 ) $active = $('#contents_conveyor img:last');

   var $next =  $active.next().length ? $active.next()
      : $('#contents_conveyor img:first');

   $active.addClass('last-active');

   $next.css({opacity: 0.0})
      .addClass('active')
      .animate({opacity: 1.0}, 1000, function() {
           $active.removeClass('active last-active');
      });
}

$(function() {
   setInterval( "contents_conveyor_slideSwitch()", 3000 );
});

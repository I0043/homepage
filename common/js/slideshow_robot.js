
function robot_slide_slideSwitch() {
   var $active = $('#robot_slide img.active');

   if ( $active.length == 0 ) $active = $('#robot_slide img:last');

   var $next =  $active.next().length ? $active.next()
      : $('#robot_slide img:first');

   $active.addClass('last-active');

   $next.css({opacity: 0.0})
      .addClass('active')
      .animate({opacity: 1.0}, 1000, function() {
           $active.removeClass('active last-active');
      });
}

$(function() {
   setInterval( "robot_slide_slideSwitch()", 3000 );
});


function kamicup_slide_slideSwitch() {
   var $active = $('#kamicup_slide img.active');

   if ( $active.length == 0 ) $active = $('#kamicup_slide img:last');

   var $next =  $active.next().length ? $active.next()
      : $('#kamicup_slide img:first');

   $active.addClass('last-active');

   $next.css({opacity: 0.0})
      .addClass('active')
      .animate({opacity: 1.0}, 1000, function() {
           $active.removeClass('active last-active');
      });
}

$(function() {
   setInterval( "kamicup_slide_slideSwitch()", 3000 );
});

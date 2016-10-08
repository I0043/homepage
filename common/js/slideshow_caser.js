
function slideSwitch() {
   var $active = $('#caser_slide img.active');

   if ( $active.length == 0 ) $active = $('#caser_slide img:last');

   var $next =  $active.next().length ? $active.next()
      : $('#caser_slide img:first');

   $active.addClass('last-active');

   $next.css({opacity: 0.0})
      .addClass('active')
      .animate({opacity: 1.0}, 1000, function() {
           $active.removeClass('active last-active');
      });
}

$(function() {
   setInterval( "slideSwitch()", 3000 );
});

function contents_caser_slideSwitch() {
   var $active = $('#contents_caser img.active');

   if ( $active.length == 0 ) $active = $('#contents_caser img:last');

   var $next =  $active.next().length ? $active.next()
      : $('#contents_caser img:first');

   $active.addClass('last-active');

   $next.css({opacity: 0.0})
      .addClass('active')
      .animate({opacity: 1.0}, 1000, function() {
           $active.removeClass('active last-active');
      });
}

$(function() {
   setInterval( "contents_caser_slideSwitch()", 3000 );
});

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

function contents_kamicup_slideSwitch() {
   var $active = $('#contents_kamicup img.active');

   if ( $active.length == 0 ) $active = $('#contents_kamicup img:last');

   var $next =  $active.next().length ? $active.next()
      : $('#contents_kamicup img:first');

   $active.addClass('last-active');

   $next.css({opacity: 0.0})
      .addClass('active')
      .animate({opacity: 1.0}, 1000, function() {
           $active.removeClass('active last-active');
      });
}

$(function() {
   setInterval( "contents_kamicup_slideSwitch()", 3000 );
});


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

function contents_robot_slideSwitch() {
   var $active = $('#contents_robot img.active');

   if ( $active.length == 0 ) $active = $('#contents_robot img:last');

   var $next =  $active.next().length ? $active.next()
      : $('#contents_robot img:first');

   $active.addClass('last-active');

   $next.css({opacity: 0.0})
      .addClass('active')
      .animate({opacity: 1.0}, 1000, function() {
           $active.removeClass('active last-active');
      });
}

$(function() {
   setInterval( "contents_robot_slideSwitch()", 3000 );
});


function zyuuten_slide_slideSwitch() {
   var $active = $('#zyuuten_slide img.active');

   if ( $active.length == 0 ) $active = $('#zyuuten_slide img:last');

   var $next =  $active.next().length ? $active.next()
      : $('#zyuuten_slide img:first');

   $active.addClass('last-active');

   $next.css({opacity: 0.0})
      .addClass('active')
      .animate({opacity: 1.0}, 1000, function() {
           $active.removeClass('active last-active');
      });
}

$(function() {
   setInterval( "zyuuten_slide_slideSwitch()", 3000 );
});


function contents_zyuuten_slideSwitch() {
   var $active = $('#contents_zyuuten img.active');

   if ( $active.length == 0 ) $active = $('#contents_zyuuten img:last');

   var $next =  $active.next().length ? $active.next()
      : $('#contents_zyuuten img:first');

   $active.addClass('last-active');

   $next.css({opacity: 0.0})
      .addClass('active')
      .animate({opacity: 1.0}, 1000, function() {
           $active.removeClass('active last-active');
      });
}

$(function() {
   setInterval( "contents_zyuuten_slideSwitch()", 3000 );
});
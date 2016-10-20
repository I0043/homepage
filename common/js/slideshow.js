
function slideSwitch() {
   var $active = $('#caser_slide a.active');

   if ( $active.length == 0 ) $active = $('#caser_slide a:last');

   var $next =  $active.next().length ? $active.next()
      : $('#caser_slide a:first');

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
   var $active = $('#contents_caser a.active');

   if ( $active.length == 0 ) $active = $('#contents_caser a:last');

   var $next =  $active.next().length ? $active.next()
      : $('#contents_caser a:first');

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
   var $active = $('#conveyor_slide a.active');

   if ( $active.length == 0 ) $active = $('#conveyor_slide a:last');

   var $next =  $active.next().length ? $active.next()
      : $('#conveyor_slide a:first');

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
   var $active = $('#contents_conveyor a.active');

   if ( $active.length == 0 ) $active = $('#contents_conveyor a:last');

   var $next =  $active.next().length ? $active.next()
      : $('#contents_conveyor a:first');

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
   var $active = $('#kamicup_slide a.active');

   if ( $active.length == 0 ) $active = $('#kamicup_slide a:last');

   var $next =  $active.next().length ? $active.next()
      : $('#kamicup_slide a:first');

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
   var $active = $('#contents_kamicup a.active');

   if ( $active.length == 0 ) $active = $('#contents_kamicup a:last');

   var $next =  $active.next().length ? $active.next()
      : $('#contents_kamicup a:first');

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
   var $active = $('#robot_slide a.active');

   if ( $active.length == 0 ) $active = $('#robot_slide a:last');

   var $next =  $active.next().length ? $active.next()
      : $('#robot_slide a:first');

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
   var $active = $('#contents_robot a.active');

   if ( $active.length == 0 ) $active = $('#contents_robot a:last');

   var $next =  $active.next().length ? $active.next()
      : $('#contents_robot a:first');

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
   var $active = $('#zyuuten_slide a.active');

   if ( $active.length == 0 ) $active = $('#zyuuten_slide a:last');

   var $next =  $active.next().length ? $active.next()
      : $('#zyuuten_slide a:first');

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
   var $active = $('#contents_zyuuten a.active');

   if ( $active.length == 0 ) $active = $('#contents_zyuuten a:last');

   var $next =  $active.next().length ? $active.next()
      : $('#contents_zyuuten a:first');

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
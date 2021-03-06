$( document ).ready(function() {
	$( ".at-indigo .droplet-icon" ).click(function() {
		$( ".at-indigo .atsg-colorswatch-front, .at-indigo .droplet-icon" ).toggleClass( "hide" );
	});
	$( ".at-blue .droplet-icon" ).click(function() {
		$( ".at-blue .atsg-colorswatch-front, .at-blue .droplet-icon" ).toggleClass( "hide" );
	});
	$( ".at-teal .droplet-icon" ).click(function() {
		$( ".at-teal .atsg-colorswatch-front, .at-teal .droplet-icon" ).toggleClass( "hide" );
	});
	$( ".at-green .droplet-icon" ).click(function() {
		$( ".at-green .atsg-colorswatch-front, .at-green .droplet-icon" ).toggleClass( "hide" );
	});
	$( ".at-yellow .droplet-icon" ).click(function() {
		$( ".at-yellow .atsg-colorswatch-front, .at-yellow .droplet-icon" ).toggleClass( "hide" );
	});
	$( ".at-orange .droplet-icon" ).click(function() {
		$( ".at-orange .atsg-colorswatch-front, .at-orange .droplet-icon" ).toggleClass( "hide" );
	});
	$( ".at-red .droplet-icon" ).click(function() {
		$( ".at-red .atsg-colorswatch-front, .at-red .droplet-icon" ).toggleClass( "hide" );
	});
	$( ".at-slate .droplet-icon" ).click(function() {
		$( ".at-slate .atsg-colorswatch-front, .at-slate .droplet-icon" ).toggleClass( "hide" );
	});
});

$( document ).ready(function() {
	$( ".atsg-colorswatch-front-mainswatch, .atsg-colorswatch-front-tint75, .atsg-colorswatch-front-tint50, .atsg-colorswatch-front-tint25" ).click(function() {
			$(this).addClass('copiedmessage');
			setTimeout(function() { $(".atsg-colorswatch-front-mainswatch, .atsg-colorswatch-front-tint75, .atsg-colorswatch-front-tint50, .atsg-colorswatch-front-tint25").removeClass('copiedmessage'); }, 1000);
	});

	$( ".atsg-colorswatch-front-mainswatch, .atsg-colorswatch-front-tint75, .atsg-colorswatch-front-tint50, .atsg-colorswatch-front-tint25" ).click(function() {
			$(".copymessage").addClass('copiedmessage');
			setTimeout(function() { $(".copymessage").removeClass('copiedmessage'); }, 3000);
	});
});

$( document ).ready(function() {

$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') === this.pathname.replace(/^\//,'') && location.hostname === this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});

});

$(document).ready(function () {
    $('#logos').waypoint(function (direction) {
        if (direction == 'down') $('#logos').toggleClass("buildin");
        else {
            $('#logos').toggleClass("buildin");
        }
    }, {
    	offset: '100%'
    });
});

$(document).ready(function () {
    $('#colors').waypoint(function (direction) {
        if (direction == 'down') $('#colors').toggleClass("buildin");
        else {
            $('#colors').toggleClass("buildin");
        }
    }, {
    	offset: '100%'
    });
});


$(document).ready(function () {
new Clipboard('.atsg-colorswatch-copy', {
});
});


/* skel-baseline v3.0.1 | (c) n33 | skel.io | MIT licensed */

(function() {

	"use strict";

	// Methods/polyfills.

		// addEventsListener
			var addEventsListener=function(o,t,e){var n,i=t.split(" ");for(n in i)o.addEventListener(i[n],e)}

		// classList | (c) @remy | github.com/remy/polyfills | rem.mit-license.org
			!function(){function t(t){this.el=t;for(var n=t.className.replace(/^\s+|\s+$/g,"").split(/\s+/),i=0;i<n.length;i++)e.call(this,n[i])}function n(t,n,i){Object.defineProperty?Object.defineProperty(t,n,{get:i}):t.__defineGetter__(n,i)}if(!("undefined"==typeof window.Element||"classList"in document.documentElement)){var i=Array.prototype,e=i.push,s=i.splice,o=i.join;t.prototype={add:function(t){this.contains(t)||(e.call(this,t),this.el.className=this.toString())},contains:function(t){return-1!=this.el.className.indexOf(t)},item:function(t){return this[t]||null},remove:function(t){if(this.contains(t)){for(var n=0;n<this.length&&this[n]!=t;n++);s.call(this,n,1),this.el.className=this.toString()}},toString:function(){return o.call(this," ")},toggle:function(t){return this.contains(t)?this.remove(t):this.add(t),this.contains(t)}},window.DOMTokenList=t,n(Element.prototype,"classList",function(){return new t(this)})}}();

	// Vars.
		var	$body = document.querySelector('body');
		// var	$header = document.querySelector('header');

	// Breakpoints.
		skel.breakpoints({
			xlarge:	'(max-width: 1920px)',
			large:	'(max-width: 1280px)',
			medium:	'(max-width: 1024px)',
			small:	'(max-width: 768px)',
			xsmall:	'(max-width: 480px)'
		});

	// Layout
		// skel.layout({
		// 	conditionals: true
		// });

	// Disable animations/transitions until everything's loaded.
		$body.classList.add('is-loading');

		window.addEventListener('load', function() {
			$body.classList.remove('is-loading');
		});

	// Nav.
		var	$navMask = document.querySelector('#nav-mask');

		var	$nav = document.querySelector('#nav'),
			$navToggle = document.querySelector('a[href="#nav"]'),
			$navClose;

		// Event: Prevent clicks/taps inside the nav from bubbling.
			addEventsListener($nav, 'click touchend', function(event) {
				event.stopPropagation();
			});

		// Event: Hide nav on body click/tap.
			addEventsListener($body, 'click touchend', function(event) {
				$nav.classList.remove('visible');
				$navMask.classList.remove('visible');
				// if (!skel.vars.touch) {
					$body.classList.remove('noscroll');
				// };
			});

		// Toggle.

			// Event: Toggle nav on click.
				$navToggle.addEventListener('click', function(event) {

					event.preventDefault();
					event.stopPropagation();

					$nav.classList.toggle('visible');
					$navMask.classList.toggle('visible');
					// if (!skel.vars.touch) {
						$body.classList.toggle('noscroll');
					// }
				});

		// Close.

			// Create element.
				$navClose = document.createElement('a');
					$navClose.href = '#';
					$navClose.className = 'close';
					$navClose.tabIndex = 0;
					$nav.appendChild($navClose);

			// Event: Hide on ESC.
				window.addEventListener('keydown', function(event) {

					if (event.keyCode == 27)
						$nav.classList.remove('visible');
						$navMask.classList.remove('visible');
						// if (!skel.vars.touch) {
							$body.classList.remove('noscroll');
						// }
				});

			// Event: Hide nav on click.
				$navClose.addEventListener('click', function(event) {

					event.preventDefault();
					event.stopPropagation();

					$nav.classList.remove('visible');
					$navMask.classList.remove('visible');
					// if (!skel.vars.touch) {
						$body.classList.remove('noscroll');
					// }
				});

			// Prevent scroll Body if Nav is opened
				// var tempScrollTop = null;
    // 			tempScrollTop = $(window).scrollTop();
    // 			$(window).scrollTop(tempScrollTop);
				// $nav.addEventListener('touchmove', function(e) {
			 //       e.preventDefault();
			 //    }, false);

})();

// LOADER ------------------------------------
skel.on("load", function() {
	$(".an-loader").fadeOut("slow");
});


// // STIKY ----------------------------------
$(window).scroll(function () {

	if ($('body').is('.news-page')) {
		$(window).scroll(function () {
		    if ($(this).scrollTop() > 0) {
		    	$('header').css('background', 'white');
		    	$('.an-backtotop').css('bottom', '2em');
		    	// $('.an-notify').removeClass('sticky');
		    }
		    else {
		    	$('header').css('background', 'transparent');
		    	$('.an-backtotop').css('bottom', '-5em');
		    }
		});
	} else {
		if ($(this).scrollTop() > $(window).height()) {
	    	$('header').addClass("sticky");
	    	// $('.an-notify').removeClass('sticky');
	    	$('.an-backtotop').css('bottom', '2em');
	    	// $('#header-nav').attr('href', '#nav');
	    	// $('#banner-nav').attr('href', '');
	    }
	    else {
	    	$('header').removeClass("sticky");
	    	$('.an-backtotop').css('bottom', '-5em');
	    }
	}
	// if ($('body').is('.artists-page')) {}
		// if ($(this).scrollTop() > $(window).height()) {
		// 	$('#an-backtotop').css('bottom', '2em')
		// } else {
		// 	$('#an-backtotop').css('bottom', '-5em')
		// }
});

$('#an-backtotop').each(function() {
	$(this).attr('onclick', '$("#top").animatescroll({scrollSpeed:2000,easing:"easeOutBack"});');
});
if ($('body').is('.home-page')) {
	$('#an-backtotop').removeAttr('href');
};

// SCROLLIFY -----------------------------------
// $.scrollify({
// 	section : ".panel",
// 	sectionName : "section-name",
// 	interstitialSection : "",
// 	easing: "easeOutExpo",
// 	scrollSpeed: 1100,
// 	offset : 0,
// 	scrollbars: true,
// 	standardScrollElements: "",
// 	setHeights: true,
// 	overflowScroll: true,
// 	updateHash: true,
// 	touchScroll:true,
// 	before:function() {},
// 	after:function() {},
// 	afterResize:function() {},
// 	afterRender:function() {}
// });


// NOTIFY-CLOSE --------------------------------
$('.an-notify-close').on( 'click', function() {
	$('.an-notify').removeClass('visible');
});
// $(window).scroll(function () {
//     if ($(this).scrollTop() > $(window).height()) {
//     	$('.an-notify').removeClass('sticky');
//     } else {
//     	$('.an-notify').addClass('sticky');
//     }
// });



// FLICKITY --------------------------------
var $carousel = $('.carousel').flickity({
	cellSelector: '.carousel-cell',
	// selectedAttraction: 0.01,
	// friction: 0.15,
	// autoPlay: 10000,
	pauseAutoPlayOnHover: false,
	// freeScroll: true,
	prevNextButtons: false,
	imagesLoaded: true,
	wrapAround: true,
	bgLazyLoad: 1,
	contain: true,
	setGallerySize: false,
	// draggable: false,
	// watchCSS: true
	// arrowShape: {
	// 	x0: 10,
	// 	x1: 60, y1: 50,
	// 	x2: 65, y2: 50,
	// 	x3: 15
	// }
});

skel.on("change", function() {
	if (!skel.vars.touch) {
		// $carousel.flickity({draggable: false});
	};
	// if (skel.vars.touch) {
	// 	$('#banner').css('min-height', window.innerHeight + 'px');
	// 	if ($('.an-notify').hasClass('visible')) {
	// 		$('#header').css('top', 'auto');
	// 	} else {
	// 		$('#header').css('top', '0');
	// 	}
	// };
});


// SKEL-READY ---------------------------
skel.on("ready", function() {
	if (!skel.vars.touch) {
		$('.mask-cursor-right').on( 'click', function() {$carousel.flickity('next')});
		$('.mask-cursor-left').on( 'click', function() {$carousel.flickity('previous')});
		$carousel.flickity({draggable: false});
	};

	// TOUCH-DEVICE-HEGHT
	// if (skel.vars.touch) {
	// 	if ($('.an-notify').hasClass('visible')) {
	// 		$('#header').css('top', 'auto');
	// 	} else {
	// 		$('#header').css('top', '0');
	// 	}
	// };
});


// skel
// 	.on("ready", function() {
// 		/* do DOM ready stuff */
// 		if (skel.breakpoint("small").active) {/* do something specific for small displays */}
// 		if (skel.vars.touch) { enable feature for devices with a touchscreen }
// 		if (skel.vars.IEVersion < 9) {/* apply workaround for IE<9 */}
// 	})
	// .on("+medium", function() {
	// 	// if ($('.an-notify').hasClass('visible')) {
	// 		$('#header').css('top', '-100px');
	// 	// } else {
	// 		// $('#header').css('top', '0');
	// 	// }
	// })
	// .on("+small", function() {
	// 	if ($('.an-notify').hasClass('visible')) {
	// 		$('#header').css('top', '3.5em');
	// 	} else {
	// 		$('#header').css('top', '0');
	// 	}
	// })
// 	.on("-large !large", function() {/* do something when "large" breakpoint is (or becomes) inactive */});


// ARTISTS-HOVER-BACK
$('.artists-list').each(function() {
	// $("a").hover(function() {
	// 	$('body').css('background-image', "url('images/1.jpg')");
	// }, function () {
	// 	$('body').css('background-image', "url('images/artists/artists-bg.jpg')");
	// });
	$("a[href|='ALEXD.html']").hover(function() {
		$('body').css('background-image', "url('images/1.jpg')");
	});
	$("a[href|='UB.html']").hover(function() {
		$('body').css('background-image', "url('images/2.jpg')");
	});
	$("a[href|='ROST.html']").hover(function() {
		$('body').css('background-image', "url('images/2.jpg')");
	});
	$("a[href|='VLADK.html']").hover(function() {
		$('body').css('background-image', "url('images/3.jpg')");
	});
	$("a[href|='BORK.html']").hover(function() {
		$('body').css('background-image', "url('images/3.jpg')");
	});
	$("a[href|='ANAP.html']").hover(function() {
		$('body').css('background-image', "url('images/artists/1.jpg')");
	});
	$("a[href|='ANDK.html']").hover(function() {
		$('body').css('background-image', "url('images/artists/2.jpg')");
	});
	$("a[href|='ALK.html']").hover(function() {
		$('body').css('background-image', "url('images/artists/3.jpg')");
	});
})


// ISOTOPE ----------------------------------

// init Isotope
var $grid = $('.grid').isotope({
	itemSelector: '.news-snip',
	layoutMode: 'fitRows',
	percentPosition: true,
	masonry: {
		columnWidth: '.grid-sizer',
		gutter: '.gutter-sizer'
	},
});
// filter items on button click
$('.news-tags').on( 'click', 'a', function() {
	var filterValue = $(this).attr('data-filter');
	$grid.isotope({ filter: filterValue });
});
// change is-checked class on buttons
$('.news-tags').each( function( i, tagsGroup ) {
	var $tagsGroup = $( tagsGroup );
	$tagsGroup.on( 'click', 'a', function() {
		$tagsGroup.find('.active').removeClass('active');
		$( this ).addClass('active');
	});
});

// filter functions
// var filterFns = {
//   // show if number is greater than 50
//   numberGreaterThan50: function() {
//     var number = $(this).find('.number').text();
//     return parseInt( number, 10 ) > 50;
//   },
//   // show if name ends with -ium
//   ium: function() {
//     var name = $(this).find('.name').text();
//     return name.match( /ium$/ );
//   }
// };

// WOW & Animate ----------------------------
new WOW().init();


// WayPoint ---------------------------------
// var waypoint = new Waypoint({
//   element: document.getElementById('banner'),
//   handler: function() {
//     notify('BANNER')
//   }
// })

// var sticky = new Waypoint.Sticky({
//   element: $('.manifest-slogan')[0]
// })
if ($('body').is('.home-page')) {
	var inview = new Waypoint.Inview({
		element: $('#banner')[0],
		enter: function(direction) {
			$('.manifest-slogan').addClass('relative')
			$('.manifest-slogan').removeClass('fixed')
			$('.manifest-slogan').removeClass('absolute')
		},
		entered: function(direction) {},
		exit: function(direction) {},
		exited: function(direction) {
		// $('.manifest-slogan').addClass('fixed')
		// $('.manifest-slogan').removeClass('relative')
		// $('.manifest-slogan').removeClass('absolute')
		// $('.manifest').css( {'height': '220vh'} )
		}
	})
	var inview = new Waypoint.Inview({
		element: $('.manifest')[0],
		enter: function(direction) {},
		entered: function(direction) {
		// $('.manifest-slogan').addClass('absolute')
		//  	$('.manifest-slogan').removeClass('fixed')
		//  	$('.manifest-slogan').removeClass('relative')
		},
		exit: function(direction) {
			$('.manifest-slogan').addClass('fixed')
			$('.manifest-slogan').removeClass('relative')
			$('.manifest-slogan').removeClass('absolute')
			// $('.manifest').css( {'height': '220vh'} )
		},
		exited: function(direction) {
		// $('.manifest-slogan').addClass('absolute')
		//  	$('.manifest-slogan').removeClass('fixed')
		//  	$('.manifest-slogan').removeClass('relative')
		}
	})
	var inview = new Waypoint.Inview({
		element: $('.news')[0],
		enter: function(direction) {
			$('.manifest-slogan').addClass('absolute')
			$('.manifest-slogan').removeClass('fixed')
			$('.manifest-slogan').removeClass('relative')
		},
		entered: function(direction) {},
		exit: function(direction) {},
		exited: function(direction) {}
	})
}



// On.Screen ----------------------------------
// var os = new OnScreen({
//     tolerance: 0,
//     debounce: 100,
//     container: window
// });

// Do something when an element enters the viewport
// os.on('enter', '#banner', (element, event) => {
//     // makes's the element's text red
//     // element.style.position = 'fixed';
//     // element.style.top = '0';
//     $('.manifest-slogan').css('position', 'inherit')

//     // `event` is a string that tells you what type of event it is.
//     // in this case it would be 'enter'
// });
// $('#banner').onScreen({
//    container: window,
//    direction: 'vertical',
//    doIn: function() {
//      // Do something to the matched elements as they come in
//    },
//    doOut: function() {
//      // Do something to the matched elements as they get off scren
//      $('.manifest-slogan').css('position', 'fixed')
//    },
//    tolerance: 0,
//    throttle: 50,
//    toggleClass: 'onScreen',
//    lazyAttr: null,
//    lazyPlaceholder: 'someImage.jpg',
//    debug: false
// });

// Do something else when an element leaves
// os.on('leave', '#banner', (element, event) => {
//     // makes's the element's text black
//     // $('.manifest-slogan').style.position = 'fixed';
//     $('.manifest-slogan').css( {'position': 'fixed', 'top': '0'} )

//     // `event` is a string that tells you what type of event it is.
//     // in this case it would be 'leave'
// });
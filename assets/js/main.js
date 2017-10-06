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
			xlarge:	'(max-width: 1680px)',
			large:	'(max-width: 1280px)',
			medium:	'(max-width: 980px)',
			small:	'(max-width: 736px)',
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
				$body.classList.remove('fixed');
			});

		// Toggle.

			// Event: Toggle nav on click.
				$navToggle.addEventListener('click', function(event) {

					event.preventDefault();
					event.stopPropagation();

					$nav.classList.toggle('visible');
					$navMask.classList.toggle('visible');
					$body.classList.toggle('fixed');

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
						$body.classList.remove('fixed');

				});

			// Event: Hide nav on click.
				$navClose.addEventListener('click', function(event) {

					event.preventDefault();
					event.stopPropagation();

					$nav.classList.remove('visible');
					$navMask.classList.remove('visible');
					$body.classList.remove('fixed');

				});

})();

// // STIKY ----------------------------------
$(window).scroll(function () {

	if ($('body').is('.news-page')) {
		$(window).scroll(function () {
		    if ($(this).scrollTop() > 0) { $('header').css('background', 'white'); }
		    else { $('header').css('background', 'transparent'); }
		});
	} else {
		if ($(this).scrollTop() > $(window).height()) {
	    	$('header').addClass("sticky");
	    	// $('#header-nav').attr('href', '#nav');
	    	// $('#banner-nav').attr('href', '');
	    }
	    else { $('header').removeClass("sticky"); }
	}
	if ($('body').is('.artists-page')) {}
});

// FLICKITY ------------------------------------
var $carousel = $('.carousel').flickity({
	cellSelector: '.carousel-cell',
	// selectedAttraction: 0.01,
	// friction: 0.15,
	autoPlay: 10000,
	pauseAutoPlayOnHover: false,
	// freeScroll: true,
	prevNextButtons: false,
	imagesLoaded: true,
	wrapAround: true,
	bgLazyLoad: true,
	contain: true,
	// draggable: false
});
$('.banner-mask').on( 'click', function() {
  $carousel.flickity('next');
});

// ARTISTS-HOVER-BACK
$('.artists-list').each(function() {
	$("a").hover(function() {
		$('body').css('background-image', "url('images/1.jpg')");
	}, function () {
		$('body').css('background-image', "url('images/artists/artists-bg.jpg')");
	});
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
$('.grid').isotope({
  itemSelector: '.news-snip',
  layoutMode: 'fitRows'
  // ...
});

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

// var cellRatio = 0.6; // outerWidth of cell / width of carousel
// var bgRatio = 0.8; // width of background layer / width of carousel
// var fgRatio = 1.25; // width of foreground layer / width of carousel

// $carousel.on( 'scroll.flickity', function( event, progress ) {
//   moveParallaxLayer( $background, bgRatio, progress );
//   moveParallaxLayer( $foreground, fgRatio, progress );
// });
// // trigger initial scroll
// $carousel.flickity('reposition');

// var flkty = $carousel.data('flickity');
// var count = flkty.slides.length - 1;

// function moveParallaxLayer( $layer, layerRatio, progress ) {
//   var ratio = cellRatio * layerRatio;
//   $layer.css({
//     left: ( 0.5 - ( 0.5 + progress * count ) * ratio ) * 100 + '%'
//   });
// }

// var $carousel = $('.carousel').flickity({
//   percentPosition: false,
// });
// var flkty = $carousel.data('flickity');
// var $imgs = $('.carousel-cell');

// $carousel.on( 'scroll.flickity', function( event, progress ) {
//   flkty.slides.forEach( function( slide, i ) {
//     var img = $imgs[i];
//     var x = ( slide.target + flkty.x ) * -1/3;
//     img.style.transform = 'translateX( ' + x  + 'px)';
//   });
// });
// var $imgs = $carousel.find('.carousel-cell');
// // get transform property
// var docStyle = document.documentElement.style;
// var transformProp = typeof docStyle.transform == 'string' ?
//   'transform' : 'WebkitTransform';
// // get Flickity instance
// var flkty = $carousel.data('flickity');

// $carousel.on( 'scroll.flickity', function() {
//   flkty.slides.forEach( function( slide, i ) {
//     var img = $imgs[i];
//     var x = ( slide.target + flkty.x ) * -1/3;
//     img.style[ transformProp ] = 'translateX(' + x  + 'px)';
//   });
// });

// ScrollMagic --------------------------------


// $(function () { // wait for document ready
// 	// init
// 	var controller = new ScrollMagic.Controller({
// 		globalSceneOptions: {
// 			triggerHook: 'onLeave'
// 		}
// 	});

// 	// get all slides
// 	var slides = document.querySelectorAll("section.panel");

// 	// create scene for every slide
// 	for (var i=0; i<slides.length; i++) {
// 		new ScrollMagic.Scene({
// 				triggerElement: slides[i]
// 			})
// 			.setPin(slides[i])
// 			.addIndicators() // add indicators (requires plugin)
// 			.addTo(controller);
// 	}
// });

// init controller
// var controller = new ScrollMagic.Controller({globalSceneOptions: {duration: 100}});

// // build scenes
// new ScrollMagic.Scene({triggerElement: "#main"})
// 	.setClassToggle("#header", "sticky") // add class toggle
// 	.addIndicators() // add indicators (requires plugin)
// 	.addTo(controller);

// var controller = new ScrollMagic.Controller();
// var scene = new ScrollMagic.Scene({triggerElement: "#main"})
// 	// trigger a velocity opaticy animation
// 	.setVelocity("#header", {top: 0}, {duration: 400})
// 	.addIndicators() // add indicators (requires plugin)
// 	.addTo(controller);
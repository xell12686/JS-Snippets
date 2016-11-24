(function ($, root, undefined) {
	
	$(function () {
		
		'use strict';
		
		// DOM ready, take it away
    $(document).ready(function() {
  

    
    });		
	
  });
	
})(jQuery, this);

//$(function() {
$(document).ready(function() {

//Initialize Slick Slider on Shop Page
    $('.homeSliderWrap').slick({
      //setting-name: setting-value
      dots: true,
      arrows: true,
      autoplay: false,
      prevArrow: '<i class="fa fa-chevron-left slick-prev" aria-hidden="true"></i>',
      nextArrow: '<i class="fa fa-chevron-right slick-next" aria-hidden="true"></i>',
      fade: true
    });

  // Sticky Header Activation and revert when scrolled to top (applied on fixed positioned header; for sticky effect)
      $(window).scroll(function() {
        if ($(this).scrollTop() > 1){  
          $('#header').addClass("stickem");
          $('#page').addClass("stickyActive");
          //console.log('sticy ACTIVATED');
        }
        else{
          $('#header').removeClass("stickem");
          $('#page').removeClass("stickyActive");
          //console.log('sticy deActivated');
        }
      });

//Performs a smooth page scroll to an anchor on the same page.
  $(function() {
    $('.smoothAnchor').click(function() {
      if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
        if (target.length) {
          $('html, body').animate({
            scrollTop: target.offset().top
          }, 500);
          return false;
        }
      }
      
    }); // end of click(function)
  });

//Facebook event trackers on button clicks
  $('.woocommerce .add_to_cart_button').click(function() { 
    fbq('track', 'AddToCart');
    console.log('ocdev: add to cart clicked');
  });


//Reverse Main Nav Order
  $('#mainNav .menu > li').each(function() {
     //$(this).parent().prepend(this);
  });

// Toggle Sidebar Slide-in Menu
  var trigger = $('.hamburger'),
      overlay = $('.overlay'),
     isClosed = false;

    trigger.click(function () {
      hamburger_cross();      
    });

    function hamburger_cross() {

      if (isClosed == true) {          
        overlay.hide();
        trigger.removeClass('is-open');
        trigger.addClass('is-closed');
        isClosed = false;
      } else {   
        overlay.show();
        trigger.removeClass('is-closed');
        trigger.addClass('is-open');
        isClosed = true;
      }
  }
  $('[data-toggle="offcanvas"]').click(function () {
        $('#page').toggleClass('toggled');
  });  



///-----------------------------
//Responsive functions
//----------------------------
  // define variables:
    var wW = $(window).width();
    var wH = $(window).height();
    var offsetValue = 0 + 0;
    
    // Auto Div height with tallest sibling  
    var autoHeightSiblings = function() {
        var maxHeight = 0;
        $(".group .siblingHeight").each(function(){
           if ($(this).height() > maxHeight) { maxHeight = $(this).height(); }
        });

        $(".group .drawingSlider .slide").height(maxHeight);
    };      


   // make div SQUARE ALWAYS (by setting each one's height equal to its width)
    function adjustHeight() {
      var boxWidth = $('.squareAlways').width();
      var heightValue = myWidth + 'px';
      $('.squareAlways').css('height', heightValue);
      return myHeight;
    }

   // Auto Fold Height  
    var autoFoldHeight = function() {
      $( ".autoHeight" ).each(function(){
          var $this = $(this);
          $this.css({'height':( $(window).height() - offsetValue )+'px'});
          //console.log("autofoldHeight RUN 1 window height:" + wH);
      });
    };

   // Responsive fixes:
    var responsiveFix = function() {
      wW = $(window).width();
      //console.log("window width:" + wW);
      if ( wW < 992 ) {
        $('#header .hamburger').show();
        offsetValue = 0;
      } else {
        $('#header .hamburger').hide();
        autoHeightSiblings();
      };
      if ( wW < 1900 ) {
        //autoFoldHeight();
        //console.log("autofoldHeight RUN 2 window width is les than 1900px:" + wW);
      };
    };

    // Humburger fix button disappearing even when sidebar menu is open
      // Toggle header Logo when Hamburger button is clicked
    var hamburgerFix = function() {
      $('#hamburger').click( function () {
        $('#page').toggleClass('dropdowned');
      });
    }
    // var hamburgerFix = function() {
    //   if ( $('#header .hamburger').hasClass('is-open') ) {
    //     $('#header .hamburger').show();
    //   };
    // };


    hamburgerFix();
    responsiveFix();
    autoFoldHeight();

    // Re-run function on window resize
    $(window).resize( function() {
      hamburgerFix();
      responsiveFix();
      autoFoldHeight();
    });  


});


$(window).load(function() {

  // Animate loader off screen
  $(".loading-splash").fadeOut("slow");;


});


/* toggle responsive dropdown menu on click */
      // $("#mainNav a").click(function() {
      //   $('#mainNav').dropdown('toggle');
      // });

$("body").click ( function(e) { if(e.target.className !== "fa fa-cog") { $(".dropdown").hide(); } } );

/* SHop page with multiple sliders in sync */
  //Initialize Book Slider on Online Shop V2 Page 
    $('.booksSlider').slick({
      //setting-name: setting-value
      dots: false,
      arrows: true,
      autoplay: false,
      prevArrow: '<i class="fa fa-chevron-left slick-prev" aria-hidden="true"></i>',
      nextArrow: '<i class="fa fa-chevron-right slick-next" aria-hidden="true"></i>',
      fade: true,
      infinite: true,
      //'slickGoTo', slideNumber
      //initialSlide: slideNumber
    }); 
  // GOTO SLICK SLIDE depending or url hash VALUE
    if ( window.location.hash) {
     var slideString = window.location.hash.substr(1);
     var slideNumber = parseInt(slideString);
    } else {
      var slideNumber = 0;
    };
   // console.log( 'slide value: ' + slideNumber);
    $('.booksSlider').slick('slickGoTo', slideNumber); 
  
  //Initialize Drawings Slider on Online Shop V2 Page
      $('.drawingSlider').slick({
        //setting-name: setting-value
        dots: true,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 3000,
        fade: false,
      });
  //Cycle through drawingSliders as bookslider is cycled
      var checkActiveSlide = function() {
        $('.slideWrap').removeClass('current');
        var sibling = $('.slick-active');
        var position = $('.slick-track .slide').index(sibling);
        //console.log('current book:' + position);
        $('.slideWrap').eq(position).addClass('current');
      };
      checkActiveSlide();   
      $(".slick-arrow").click(function() {
        checkActiveSlide();
      });

  //Shop Go to slide on clicke
    $(document).ready(function(){
      $(".menu a").click(function(e){
          e.preventDefault();
          slideIndex = $(this).index();
          $( '.booksSlider' ).slickGoTo( parseInt(slideIndex) );
      });
    });


//Shop Check out set checkbox checked by default
   $('.wc-terms-and-conditions input').prop('checked', true);



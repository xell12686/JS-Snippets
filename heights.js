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

  // Auto Div height with tallest sibling  
    var autoHeightSiblings = function() {
        var maxHeight = 0;

        $("#blogGrid .group").each(function(){
          $(this).find(".equalize").each( function(){
        if ($(this).height() > maxHeight) { 
          maxHeight = $(this).height(); 
        }
          });
      $(".equalize").height(maxHeight);
        });

    };

    // Responsive fix for sticky header  
    var responsiveFix = function() {
      wW = $(window).width();
      if ( wW < 768 ) {
        //console.log("window width: less than 768px");
      } else {
        autoHeightSiblings();
      };
    };

});


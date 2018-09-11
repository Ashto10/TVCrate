(function(){
  'use strict';

  /**
  * This function overcomes a CSS limitation in order to allow
  * fixed elements to "slide" over one another.
  */
  function updateSlides() {
    let windowTop = $(document).scrollTop();
    $('.slideshow .slide-container').each(function() {
      let parent = $(this).position().top;
      // Check if slide should "stick" once it's reached
      if ($(this).hasClass('sticky-slide')) {
        /*
        * Use the slide's bottom padding to avoid
        * "snapping" when scrolling quickly
        */
        let padding = parseInt($(this).css('padding-bottom'));
        if (windowTop > $(this).position().top + padding) {
          return;
        }
      }
      $(this).children('.slide-content').css({top: windowTop - parent});
    });
  }

  /**
  * Find occurances of the product name within the page, and add appropriate
  * styling and TM text. Completely unnecessary, but it helped avoid needless
  * repetition during drafting, and something about this just amuses me.
  */
  function callMyLawyer() {
    $('body :not(script)').contents().filter(function() {
      return this.nodeType === 3;
    }).replaceWith(function() {
      return this.nodeValue.replace(/tvcrate/gi, '<span class="product-name">TVCrate</span><sup>&trade;</sup>');
    });
  }

  $(document).ready(function() {
    callMyLawyer();

    // Handle slide scrolling whenever page changes
    $(window).on('scroll resize', function() {
      updateSlides();
    });

    // Expand Menu
    $('.expand-menu').click(function() {
      $(this).parent().toggleClass('opened');
    });
  });

})();
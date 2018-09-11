(function(){
  'use strict';

  /** Stores all sticky slide div elements for later manipulation. */
  const slides = [];

  /**
* Function that allows elements to "slide" over one another. 
*/
  function updateSlides() {
    $('.slide-content').each(function(i) {
      let navbarHeight = $('#nav-bar').height();
      let parent = $(this).parent().position().top;
      let parentHeight = $(this).parent().height() / 2;
      let offset;

      let windowTop = $(document).scrollTop();

      if(windowTop <= $('.sticky-slide').parent().position().top) {
        offset = windowTop - parent + slides[i] + parentHeight + navbarHeight;
      } else {
        offset = parentHeight + navbarHeight;
      }

      $(this).css({'top': offset});
    });
  }

  $(function() {
    // Compile list of all slides on page
    $('.slide-content').each(function(i) {
      slides.push($(this).position().top);
    });

    // Handle slide scrolling whenever page changes
    $(document).on('scroll resize', function() {
      updateSlides();
    });

    // Expand Menu
    $('.expand-menu').click(function() {
      $(this).parent().toggleClass('opened');
    });
  });
})();
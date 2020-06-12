$(document).ready(function(){       
    var $carousel = $('.product-image');

    var settings = {
      dots: true,
      arrows: false,
      slide: '.slick-slideshow__slide',
      slidesToShow: 1,
      centerMode: true,
      centerPadding: '60px',
    };

    function setSlideVisibility() {
      //Find the visible slides i.e. where aria-hidden="false"
      var visibleSlides = $carousel.find('.slick-slideshow__slide[aria-hidden="false"]');
      //Make sure all of the visible slides have an opacity of 1
      $(visibleSlides).each(function() {
        $(this).css('opacity', 1);
      });

      //Set the opacity of the first and last partial slides.
      $(visibleSlides).first().prev().css('opacity', 0);
    }

    $carousel.slick(settings);
    $carousel.slick('slickGoTo', 1);
    setSlideVisibility();

    $carousel.on('afterChange', function() {
      setSlideVisibility();
    });

    $('.full-slider').slick({
        lazyLoad: 'ondemand',
        infinite: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        arrows: false,
    });
    $("input[type=radio]").click(function(){
        $(".product-image").slick('setPosition');
    });
});


$(document).ready(function() {
    $(".tabs").scrollCenter(".active", 300);
    $(".tabs .tab").on("click", function() {
        $(".tabs .tab").removeClass("active");
        $(this).addClass("active");
      // CALL scrollCenter PLUSGIN
    $(".tabs").scrollCenter(".active", 300);

    });
});


jQuery.fn.scrollCenter = function(elem, speed) {

  var active = jQuery(this).find(elem); 
  var activeWidth = active.width() / 2; 
  var pos = active.position().left + activeWidth;
  var elpos = jQuery(this).scrollLeft(); 
  var elW = jQuery(this).width(); 
  pos = pos + elpos - elW / 2;

  jQuery(this).animate({
    scrollLeft: pos
  }, speed == undefined ? 1000 : speed);
  return this;
};

jQuery.fn.scrollCenterORI = function(elem, speed) {
  jQuery(this).animate({
    scrollLeft: jQuery(this).scrollLeft() - jQuery(this).offset().left + jQuery(elem).offset().left
  }, speed == undefined ? 1000 : speed);
  return this;
};

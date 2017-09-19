$(document).ready(function() {
    $('.home_slider').slick({
          dots: true,
          infinite: true,
          speed: 500,
        arrows:false,
        responsive: [
                {
      breakpoint: 600,
      settings: {
            dots:false
      }
    }
        ]
    });
});
$(document).ready(function() {
    $('#home_slider').slick();

        $('#slider1 .slider').slick({
          speed: 1400,
          slidesToShow: 8,
          prevArrow: $('#slider1 .prev'),
          nextArrow: $('#slider1 .next'),
          slidesToScroll: 8,
          responsive: [
    {
      breakpoint: 1920,
      settings: {
        slidesToShow: 7,
        slidesToScroll: 7,
      }
    },
    {
      breakpoint: 1600,
      settings: {
        slidesToShow: 6,
        slidesToScroll: 6,
      }
    },
    {
      breakpoint: 1400,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 5,
      }
    },
    {
      breakpoint: 1150,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 4,
      }
    },
    {
      breakpoint: 900,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
      }
    },
    {
      breakpoint: 700,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      }
    },
    {
      breakpoint: 500,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    }

  ]

    });


    
});
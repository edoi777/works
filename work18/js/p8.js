
$(document).ready(function(){
  $('#slider1 .content').slick({
        infinite: true,
  slidesToShow: 3,
  slidesToScroll: 3,
      arrows: false,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    }

  ]
  });  
  $('#slider2 .content').slick({
        infinite: true,
  slidesToShow: 3,
  slidesToScroll: 3,
      arrows: false,
        responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    }

  ]
  }); 
  $('#slider3 .content').slick({
        infinite: true,
  slidesToShow: 3,
  slidesToScroll: 3,
      arrows: false,
        responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    }

  ]
  });  

});
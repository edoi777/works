$(document).ready(function() {
  $(window).on('scroll', function() {
      if ( $(window).scrollTop() > 1) {
          $('header').addClass('scroll');
      } else {
          $('header').removeClass('scroll');    
      }
  });
    $('.screen_5__slider').slick({
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
        dots:true
});
    $('.screen_7').slick({
  infinite: true,
  slidesToShow: 6,
  slidesToScroll: 6,
          responsive: [
    {
      breakpoint: 1300,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3
      }
    },
    {
      breakpoint: 900,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});
    $('.screen_6__list__questions__li__title').on('click', function() {
        $(this).parent('li').toggleClass('show');
    })
    

   $("#screen_3__map path:not(.disable)").on('mousemove', function (pos) {
       $("#floatingmes").show();
       $("#floatingmes").css('left', (pos.pageX + 10) + 'px').css('top', (pos.pageY + 10) + 'px');
       if($('#screen_3__map').hasClass('vibori')) {
            $("#floatingmes").text($(this).attr('data-metka-vibori'));
       } else {
            $("#floatingmes").text($(this).attr('data-metka-predvaritelnie'));
       }
   }).mouseleave(function () {
       $("#floatingmes").hide();
   });
    
    
   $('.select_period').on('click',function() {
       $('.select_period').removeClass('active');
       $(this).addClass('active');
       if($(this).hasClass('screen_3__t4__3')) {
          $('#screen_3__map').addClass('vibori'); 
          $('#screen_3__map').removeClass('predvaritelnie'); 
          $('#screen_3__svg__ground_metki').addClass('map_icon__g'); 
          $('#screen_3__svg__ground_metki use').attr('xlink:href', '#image2'); 
       } else {
          $('#screen_3__map').removeClass('vibori'); 
          $('#screen_3__map').addClass('predvaritelnie'); 
          $('#screen_3__svg__ground_metki').removeClass('map_icon__g'); 
          $('#screen_3__svg__ground_metki use').attr('xlink:href', '#image'); 
       }
   });
 
});
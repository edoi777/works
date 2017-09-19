$(document).ready(function() {

//Слайдер 
    $('.product_page__body__slider__top').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
              arrows: false,
      asNavFor: '.product_page__body__slider__bot',
          responsive: [
    {
      breakpoint: 600,
      settings: {
          arrows:true
      }
    }
  ]
    });
    
    $('.product_page__body__slider__bot').slick({
      slidesToShow: 3,
      slidesToScroll: 1,
        swipeToSlide: true,
      focusOnSelect: true,
      asNavFor: '.product_page__body__slider__top',
  responsive: [
    {
      breakpoint: 600,
      settings: {
          arrows:false
      }
    }
  ]

    });
//слайдер енд
//    Количество великов
    $('.line_3__count__controls .minus').on('click', function() {
        $('.line_3__count__controls input')[0].value > 1 && $('.line_3__count__controls input')[0].value-- ;
    });
    $('.line_3__count__controls .plus').on('click', function() {
         $('.line_3__count__controls input')[0].value++;
    });
      $('.line_3__size__select').selectric();
//    Количество великов енд
    $('.text_description_product_page__buttons > button').click(function(){
        $('.text_description_product_page__buttons > button').removeClass('active');
        $('.text_description_product_page__wrapper__texts > div').removeClass('active');
        
        $(this).addClass('active');
        
        $('.text_description_product_page__wrapper__texts > div').eq($('.text_description_product_page__buttons > button').index($(this))).addClass('active');
    });
});
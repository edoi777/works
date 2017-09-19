$(document).ready(function() {
  
    $("#per_slider > .slider_personal_page__wrapper_lvl_2").slick({

    autoplay: true,
    dots: true,
        prevArrow: $('.prev'),
        nextArrow: $('.next'),
    customPaging : function(slider, i) {
        var thumb = $(slider.$slides[i]).data('thumb');
        return '<a><img src="'+thumb+'"></a>';
    },

    responsive: [{ 
        breakpoint: 500,
        settings: {
            dots: false,
            arrows: false,
            infinite: false,
            slidesToShow: 2,
            slidesToScroll: 2
        } 
    }]
});
      
    
$('.personal_product_page__big_picture').click(function() {
    $('.slider_personal_page').addClass('personal_product_page__show');
});
$('.slider_personal_page__close').click(function() {
    $('.slider_personal_page').removeClass('personal_product_page__show');
});
  

    
$('.switch__controls div').click(function() {
    $('.switch__controls div').removeClass('active');
    $(this).addClass('active');
    
    $('.switch__body > div').addClass('hide');
    $('.switch__body > div:eq('+$(this).index()+')').removeClass('hide');
});
    
});
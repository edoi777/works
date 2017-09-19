function colleft() {

    if ($(window).width() >= 768) {
        $('.service__toggle-content-wrapper > div').css({
            'height': 'auto',
            'max-height': 'auto'
        })
        $('.service__toggle-content-wrapper > div').removeClass('to-curtail', 'list').find(' > *:first').removeClass('list__toggler');
    } else if ($(window).width() <= 768) {
        $('.service__toggle-content-wrapper > div').addClass('list').removeClass('show').find(' > *:first').addClass('list__toggler');
    } 


}
$(document).ready(function () {
    colleft();
    $('.service__price__item__title').on('click', function () {

            $('.service__price').closest('.service__price').css({
                'height': 'auto',
                'max-height': 'auto'
            });
    });
    $('.service__here__menu-item__title').on('click', function () {
        $('.service__here__menu-item__title').removeClass('show');
        $(this).addClass('show');
        $('.service__toggle-content-wrapper > div').removeClass('show');
        $('.service__toggle-content-wrapper > div:eq(' + $(this).parent('.service__here__menu-item').index() + ')').addClass('show');
    });
    
    if ($('.service__links')[0]) {
        $('.service__links').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            dots: true,
            responsive: [
                {
                    breakpoint: 1233,
                    settings: "unslick"
                }
            ]
        });
    }
});
$(window).resize(function () {
    colleft();
        if ($(window).width() >= 1233 && !$('.service__links').hasClass('slick-initialized')) {
        $('.service__links').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            dots: true,
            responsive: [
                {
                    breakpoint: 1233,
                    settings: "unslick"
                }
            ]
        });
    }

});

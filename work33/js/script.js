$(document).ready(function () {
    $('.screen_1__slider').slick({
        arrows: false,
        dots: true,
        speed: 500,
        fade: true,
        cssEase: 'linear'
    });
    $('.header__menu__li__mobille_button').on('click',function() {
        $('.header__menu').toggleClass('show_menu');
    });

    $('.header__menu__li__a').on('click', function() {
        $('.header__menu__li__a').removeClass('active');
        $(this).addClass('active');
    });
    if ($(window).width() > 1024) {
        $('header .anim').css('transform', 'translateX(0px) translateY(0px)');
        $('section').each(function () {
            if (($(window).scrollTop() + ($(window).height() / 3)) >= $(this).offset().top) {
                $(this).find('.anim').css('transform', 'translateX(0px) translateY(0px)');
            }
        });
    }
    $(window).scroll(function () {
        if ($(window).width() > 1024) {
            $('section').each(function () {
                if (($(window).scrollTop() + ($(window).height() / 2)) >= $(this).offset().top) {
                    $(this).find('.anim').css('transform', 'translateX(0px) translateY(0px)');
                }
            });
        }

    });
});
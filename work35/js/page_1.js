$(document).ready(function () {
    var slider = document.getElementById('p1_b2_t9');
    noUiSlider.create(slider, {
        start: 2.3,
        connect: [true, false],
        tooltips: true,
        format: wNumb({
            decimals: 1
        }),
        range: {
            'min': [1.3, 1.8],
            '9%': [1.8, 2.3],
            '18%': [2.3, 2.8],
            '27%': [2.8, 3.3],
            '36%': [3.3, 3.8],
            '45%': [3.8, 4.3],
            '54%': [4.3, 4.8],
            '63%': [4.8, 5.3],
            '72%': [5.3, 5.8],
            '81%': [5.8, 10.5],
            '90%': [10.5, 11.5],
            'max': [11.5]
        }
    });
    var slider = document.getElementById('p1_b2_t10');
    noUiSlider.create(slider, {
        start: 5.8,
        step: 0.5,
        tooltips: true,
        connect: [true, false],
        format: wNumb({
            decimals: 1
        }),
        range: {
            'min': 1.3,
            'max': 5.8
        }
    });
    if ($(window).width() < 768) {
        if (!$('.p1_b7__slider').hasClass('slick-initialized')) {
            $('.p1_b7__slider').slick({
                infinite: true,
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false,
                dots:true
            });
        }
    } else {
        if ($('.p1_b7__slider').hasClass('slick-initialized')) {
            $('.p1_b7__slider').slick('unslick');
        }
    }
    $(window).on('resize', function () {
        if ($(window).width() < 768) {
            if (!$('.p1_b7__slider').hasClass('slick-initialized')) {
                $('.p1_b7__slider').slick({
                    infinite: true,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false,
                    dots:true
                });
            }
        } else {
            if ($('.p1_b7__slider').hasClass('slick-initialized')) {
                $('.p1_b7__slider').slick('unslick');
            }
        }
    });
});
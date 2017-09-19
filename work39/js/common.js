//---------------------------------------------------------
//    Скрипт раскрываемых списков
//---------------------------------------------------------
function listOnLoad() {
    $('.list').each(function () {
        var thisToggler = $(this).find('.list__toggler');
        var thisList = $(this);
        thisList.css('height', thisToggler.innerHeight() + parseInt(thisToggler.css('margin-top')) + parseInt(thisToggler.css('margin-bottom')) + 'px');
    });
}

function listDetectHeight(thisToggler, thisList) {
    thisToggler.addClass('show').closest('.list').addClass('show');
    var h = 0;
    thisToggler.closest('.list').find(' > *').each(function () {
        h += $(this).innerHeight() + 1 + parseInt($(this).css('margin-top')) + parseInt($(this).css('margin-bottom'));
    });
     thisList.animate({
        height: h
        }, 500, function() {
        });
}

function listQuestions() {
    $('.question-response__item').each(function () {
        $(this).css('height', 'auto').attr('data-height', $(this).innerHeight()).css('height',
            (($(this).height() + Number($(this).css('padding-top').replace(/[^-\d\.]/g, '')) + Number($(this).css('padding-bottom').replace(/[^-\d\.]/g, ''))) -
                ($(this).find('.hide').height() + Number($(this).find('.hide').css('padding-top').replace(/[^-\d\.]/g, '')) + Number($(this).find('.hide').css('padding-bottom').replace(/[^-\d\.]/g, '')))) +
            'px');
    });
}
$(document).on('click', '.list__toggler', function () {
    var thisToggler = $(this);
    var thisList = $(this).closest('.list');
    if (!thisToggler.hasClass('show')) {
        listDetectHeight(thisToggler, thisList);
    } else {
        thisToggler.removeClass('show');
        thisList.stop( true, true ).animate({
            height: thisToggler.innerHeight() + parseInt(thisToggler.css('margin-top')) + parseInt(thisToggler.css('margin-bottom'))
        }, 500, function() {
        }).removeClass('show');
    }
});


//---------------------------------------------------------
//      Раскрывающийя список и выбор даты в попапе и футере
//---------------------------------------------------------
$(document).ready(function() {
    if ($('select')[0]) {
        $('select').selectric({
              disableOnMobile: false,
  nativeOnMobile: false
        });
    }
    if ($('.zapis__date-pickedr')[0]) {
        $('.zapis__date-pickedr').datepicker({
            navTitles: {
                days: 'MM',
                months: 'yyyy',
                years: 'yyyy1 - yyyy2'
            }
        });
    }
});
/*//////////////////////////////////////////////////////*/
/*//////////////////////////////////////////////////////*/
/*//////////////////////////////////////////////////////*/
$(window).on('load', function () {
    $('[data-background-image]').each(function () {
        $(this).css('background-image', 'url(' + $(this).attr('data-background-image') + ')');
    });
    $('[data-background-color]').each(function () {
        $(this).css('background-color', $(this).attr('data-background-color'));
    });
    listOnLoad();
    listQuestions();
//---------------------------------------------------------
    
//---------------------------------------------------------
    if ($('.slick_slider')[0]) {
        $('.slick_slider').slick({
            infinite: true,
            speed: 500,
            fade: true,
            cssEase: 'linear',
            dots: true
        });
        $('.slick_slider .slick-dots li').each(function () {
            $(this).text(($(this).index() + 1) + '/' + $(this).parent('.slick-dots').find('li').length);
        });
    }
    $(document).on('click', '.popup, .popup .close, .popup > *', function (e) {
        if (e.target == $(this)[0]) {
            if (!$(this).closest('.popup').hasClass('show')) {
                $(this).closest('.popup').addClass('show');
                $('body').addClass('overhid')
            } else {
                $('body').removeClass('overhid');
                $(this).closest('.popup').removeClass('show');
            }
        }
    });
    if ($('.patients__slider')[0]) {
        $('.patients__slider').slick({
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 3,
            responsive: [
                {
                    breakpoint: 1233,
                    settings: {
                        infinite: true,
                        slidesToShow: 1,
                        slidesToScroll: 1,
                    }
    }
  ]
        });
    }
    if ($('.program_wrapper')[0]) {
        $('.program_wrapper').slick({
            responsive: [
                {
                    breakpoint: 10000,
                    settings: "unslick"
                },
                {
                    breakpoint: 768,
                    settings: {
                        infinite: true,
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        adaptiveHeight: true
                    }
                }
        ]
        });
    }
    if ($('.home-programms__wrapper')[0]) {
        $('.home-programms__wrapper').slick({
            responsive: [
                {
                    breakpoint: 10000,
                    settings: "unslick"
                },
                {
                    breakpoint: 1233,
                    settings: {
                        infinite: true,
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
        ]
        });
    }
    if ($('.articles__wrapper')[0]) {
        $('.articles__wrapper').slick({
            responsive: [
                {
                    breakpoint: 10000,
                    settings: "unslick"
                },
                {
                    breakpoint: 1233,
                    settings: {
                        infinite: true,
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
        ]
        });
    }
    if ($('.doctors-slider__here')[0]) {
        $('.doctors-slider__here').slick({
            infinite: true,
            slidesToShow: 2,
            slidesToScroll: 2
        });
    }
    if ($('.home-slider__here')[0]) {
        $('.home-slider__here').slick({
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            speed: 1000,
            fade: true,
            cssEase: 'linear',
            autoplay: true,
            autoplaySpeed: 3000,
        });
    }
    if ($('.home-mini-slider__here')[0]) {
        $('.home-mini-slider__here').slick({
            infinite: true,
            slidesToShow: 6,
            slidesToScroll: 6,
            autoplay: true,
            autoplaySpeed: 1000,
            responsive: [
                {
                    breakpoint: 1233,
                    settings: {
                        slidesToShow: 4,
                        slidesToScroll: 4
                    }
        },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
        }
    ]
        });
    }
    if ($('.home-dorots-slider__here')[0]) {
        $('.home-dorots-slider__here').slick({
            infinite: true,
            slidesToShow: 4,
            slidesToScroll: 4,
            responsive: [
                {
                    breakpoint: 1233,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2
                    }
        },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
        }
    ]
        });
    }
    if ($('.programma__slider')[0]) {
        $('.programma__slider').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            fade: true,
            asNavFor: '.programma__slider__dots'
        });
        $('.programma__slider__dots').slick({
            slidesToShow: 8,
            slidesToScroll: 1,
            asNavFor: '.programma__slider',
            focusOnSelect: true,
            accessibility: false,
            variableWidth: true
        });
    }
    if ($('[data-slick]')[0]) {
        $('[data-slick]').slick();
    }


    $('.question-response__item').on('click', function () {
        !$(this).hasClass('show') ?
            $(this).css('height', $(this).attr('data-height') + 'px').addClass('show') :
            $(this).css('height', $(this).attr('data-height') - ($(this).find('.hide').height() + Number($(this).find('.hide').css('padding-top').replace(/[^-\d\.]/g, '')) + Number($(this).find('.hide').css('padding-bottom').replace(/[^-\d\.]/g, ''))) + 'px').removeClass('show');
    });
});
//Исправление бага при имзменения размера окна
$(window).resize(function () {
    $('.list').each(function () {
        if($(this).hasClass('show')) {
            $(this).css('height', 'auto');
        } else {
            $(this).css('height', $(this).find('.list__toggler').innerHeight() + parseInt($(this).find('.list__toggler').css('margin-top')) + parseInt($(this).find('.list__toggler').css('margin-bottom')) + 'px');
        }

    });    
    $('.question-response__item').each(function () {
        if($(this).hasClass('show')) {
            $(this).css('height', 'auto').attr('data-height', $(this).innerHeight());
        } else {
             $(this).css('height', 'auto').attr('data-height', $(this).innerHeight()).css('height',
            (($(this).height() + Number($(this).css('padding-top').replace(/[^-\d\.]/g, '')) + Number($(this).css('padding-bottom').replace(/[^-\d\.]/g, ''))) -
                ($(this).find('.hide').height() + Number($(this).find('.hide').css('padding-top').replace(/[^-\d\.]/g, '')) + Number($(this).find('.hide').css('padding-bottom').replace(/[^-\d\.]/g, '')))) +
            'px');
        }

    });
    if ($('.program_wrapper')[0]) {
        if ($(window).width() < 768) {
            $('.program_wrapper').each(function () {
                if (!$(this).hasClass('slick-slider')) {
                    $(this).slick({
                        infinite: true,
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        adaptiveHeight: true
                    });
                }
            });
        } else {
            $('.program_wrapper').each(function () {
                if ($(this).hasClass('slick-slider')) {
                    $(this).slick('unslick');
                }
            });
        }
    }
    if ($('.home-programms__wrapper')[0]) {
        if ($(window).width() < 1233) {
            $('.home-programms__wrapper').each(function () {
                if (!$(this).hasClass('slick-slider')) {
                    $(this).slick({
                        infinite: true,
                        slidesToShow: 1,
                        slidesToScroll: 1
                    });
                }
            });
        } else {
            $('.home-programms__wrapper').each(function () {
                if ($(this).hasClass('slick-slider')) {
                    $(this).slick('unslick');
                }
            });
        }
    }
    if ($('.articles__wrapper')[0]) {
        if ($(window).width() < 1233) {
            $('.articles__wrapper').each(function () {
                if (!$(this).hasClass('slick-slider')) {
                    $(this).slick({
                        infinite: true,
                        slidesToShow: 1,
                        slidesToScroll: 1
                    });
                }
            });
        } else {
            $('.articles__wrapper').each(function () {
                if ($(this).hasClass('slick-slider')) {
                    $(this).slick('unslick');
                }
            });
        }
    }
});
//POPUPS
$(document).ready(function () {
    $('.popup-show__make-an-appointment-button, .popup__make-an-appointment__zapis__close').on('click', function () {
            $('.popup__make-an-appointment').toggleClass('show');
            $('body').toggleClass('overhid');
    });
    $('.select-city__popup-button, .select-city__wr__close').on('click', function () {
        $('.popup__make-an-appointment__select-city').toggleClass('show');
        $('body').toggleClass('overhid');
    });
})
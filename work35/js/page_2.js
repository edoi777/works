$(document).ready(function () {
    var calc = {
        step_1: false,
        step_2: false,
        step_3: false,
        step_4: false,
        step_5: false,
        step_6: false,
        step_7: false,
        step_8: false,
        step_9_a: false,
        step_9_b: false,
        step_9_v: false,
        step_9_g: false,
        step_9_d: false,
        step_9_e: false,
        step_9_zg: false
    };
    function show_calc() {
//        console.log('/////////////////////////////');
        var count_bath = 0;
        var counter = 0;
        for (var key in calc) {
//            console.log("Ключ: " + key + " значение: " + calc[key]);
            if (calc[key] == false) {
                count_bath = 1;
                $('[data-link="' + key + '"]').removeClass('disabled');
            } else {
                $('[data-link="' + key + '"]').addClass('disabled');
            }
        }
        if (count_bath == 0) {
            $('.wrapper_final__left_part__description').text('Вы успешно выбрали параметры, необходимые для расчета стоимости бани под ключ.');
            $('.wrapper_final__left_part__description_2').text('ВАШ ВЫБОР:');
            $('.wrapper_final__left_part__list_steps__item').removeClass('disabled').addClass('pokaz');
            for (var key in calc) {
                $('.wrapper_final__left_part__list_steps__item:eq(' + counter + ') span').text(': ' + calc[key]);
                counter++;
            }
        } else {
            $('.wrapper_final__left_part__description').text('Пожалуйста, укажите параметры, чтобы мы могли точно рассчитать цену бани под ключ.');
            $('.wrapper_final__left_part__description_2').text('ВЫ ЕЩЁ НЕ УКАЗАЛИ:');
            for (var key in calc) {
                $('.wrapper_final__left_part__list_steps__item span').text('');
            }
        }
    }
    $('.wrapper_final__left_part__list_steps__item').on('click', function () {
        if (!$(this).hasClass('pokaz')) {
            $('body,html').animate({
                scrollTop: $('[data-step_wrapper="' + $(this).attr('data-link') + '"]').offset().top - 86
            }, 500);
        }
    });
    /*/////////////////////////////////*/
    $('.first-screen__t4').on('click', function () {
        $('body,html').animate({
            scrollTop: $('.first-screen').offset().top + $('.first-screen').innerHeight() - 85
        }, 500);
    });
    /*Переключатель дорогих и дешевых бань*/
//    $('.p2_s1__toggle_bath__item').on('click', function () {
//
//    });
    //    Событие выбора бани шаг 1
    $('.p2_s1__list_bath__item ').on('click', function () {
        event_select_bath($(this));
        show_calc();
    });
    function event_select_bath(elem) {
        $('.p2_s1__list_bath__item ').removeClass('checked');
        elem.addClass('checked');
        calc.step_1 = elem.find('.p2_s1__list_bath__title').text();
        $('.p2_s1 .p2_s1__step__status__this').text(elem.find('.p2_s1__list_bath__title').text()).removeClass('dont_was_select');
        if (elem.hasClass('expensive')) {
            calc.step_2 = elem.attr('data-d') + ' х ' + elem.attr('data-sh') + ' метров';
            $('.p2_s2').addClass('expensive');
            $('.p2_s2 .p2_s1__step__status__this').removeClass('dont_was_select').text(calc.step_2);
            $('.p2_s2__expensive_bath .fix_size .p2_s2__expensive_bath__item__name__count').text(calc.step_2);
            $('.p2_s2__expensive_bath .common_ploshad .p2_s2__expensive_bath__item__name__count').text(elem.attr('data-common-p'));
        } else {
            calc.step_2 = slider.noUiSlider.get() + ' х ' + slider2.noUiSlider.get() + ' метров';
            $('.p2_s2').removeClass('expensive');
            $('.p2_s2 .p2_s1__step__status__this').text(calc.step_2);
        }
        show_calc();
    }
    //шаг 2
    var slider = document.getElementById('p2_s2_t9');
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
    var slider2 = document.getElementById('p2_s2_t10');
    noUiSlider.create(slider2, {
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
    var rangeSliderValueElement = document.getElementById('p2_s2__status_label');
    slider.noUiSlider.on('update', function (values, handle) {
        rangeSliderValueElement.innerHTML = values[handle];
        calc.step_2 = values[handle] + ' х ' + slider2.noUiSlider.get() + ' метров';
        $('.p2_s2 .p2_s1__step__status__this').removeClass('dont_was_select').text(calc.step_2);
        show_calc();
    });
    slider2.noUiSlider.on('update', function (values, handle) {
        rangeSliderValueElement.innerHTML = values[handle];
        calc.step_2 = slider.noUiSlider.get() + ' х ' + values[handle] + ' метров';
        $('.p2_s2 .p2_s1__step__status__this').removeClass('dont_was_select').text(calc.step_2);
        show_calc();
    });
    //шаг 3 и все последующие
    $('.steps__wrapper__left_part__item').on('click', function () {
        $(this).closest('[data-step_wrapper]').find('.steps__wrapper__left_part__item').removeClass('checked');
        $(this).addClass('checked');
        if ($(this).closest('[data-step_wrapper]').hasClass('p2_s3')) {
            if ($(this).closest('[data-step_wrapper]').hasClass('expensive')) {
                $(this).closest('[data-step_wrapper]').find('.p2_s1__step__status__this').text($(this).find('.steps__wrapper__left_part__item__title .expensive').text()).removeClass('dont_was_select');
                eval('calc.' + $(this).closest('[data-step_wrapper]').attr('data-step_wrapper') + ' = \'' + $(this).find('.steps__wrapper__left_part__item__title .expensive').text().replace(/\r|\n/g, ' ').replace(/\s{2,}/g, '') + '\';');
            } else {
                $(this).closest('[data-step_wrapper]').find('.p2_s1__step__status__this').text($(this).find('.steps__wrapper__left_part__item__title .cheap').text()).removeClass('dont_was_select');
                eval('calc.' + $(this).closest('[data-step_wrapper]').attr('data-step_wrapper') + ' = \'' + $(this).find('.steps__wrapper__left_part__item__title .cheap').text().replace(/\r|\n/g, ' ').replace(/\s{2,}/g, '') + '\';');
            }
        } else {
            $(this).closest('[data-step_wrapper]').find('.p2_s1__step__status__this').text($(this).find('.steps__wrapper__left_part__item__title').text()).removeClass('dont_was_select');
            eval('calc.' + $(this).closest('[data-step_wrapper]').attr('data-step_wrapper') + ' = \'' + $(this).find('.steps__wrapper__left_part__item__title').text().replace(/\r|\n/g, ' ').replace(/\s{2,}/g, '') + '\';');
        }
        show_calc();
    });
    /*//////////////////////////////////////////*/
    //    forma otpravki
    $('.footer_form__input__tel').mask('+7 (999) 999-99-99');
    var countTEXT = false;
    $('.footer_form input[type="text"]').on('blur', function () {
        countTEXT = true;
        if (!$(this).val()) {
            $(this).parents('label').addClass('warning');
        } else {
            $(this).parents('label').removeClass('warning');
        }
        $('.footer_form input[type="text"]').each(function () {
            if (!$(this).val()) {
                countTEXT = false;
            }
        });
        if ($('.footer_form input[type="checkbox"]').is(':checked') && countTEXT == true) {
            $('.footer_form .btn_t_1').removeClass('disabled');
        } else {
            $('.footer_form .btn_t_1').addClass('disabled');
        }
    });
    $('.footer_form input[type="checkbox"]').on('click', function () {
        countTEXT = true;
        if (!$(this).is(':checked')) {
            $(this).parents('label').addClass('warning');
        } else {
            $(this).parents('label').removeClass('warning');
        }
        $('.footer_form input[type="text"]').each(function () {
            if (!$(this).val()) {
                countTEXT = false;
            }
        });
        if ($('.footer_form input[type="checkbox"]').is(':checked') && countTEXT == true) {
            $('.footer_form .btn_t_1').removeClass('disabled');
        } else {
            $('.footer_form .btn_t_1').addClass('disabled');
        }
    });
    
    /*slider na step_1*/
            $('.p2_s1__list_bath').slick({
                infinite: true,
                slidesToShow: 5,
                slidesToScroll: 5,
                arrows: false,
                  responsive: [
    {
      breakpoint: 768,
      settings: {
         slidesToShow: 3,
        slidesToScroll: 3,
          arrows:true
      }
    },
    {
      breakpoint: 600,
      settings: {
         slidesToShow: 2,
        slidesToScroll: 2,
          arrows:true
           
      }
    },
    {
      breakpoint: 480,
      settings: {
         slidesToShow: 1,
        slidesToScroll: 1,
          arrows:true
      }
    }
  ]
            });
    
$('.p2_s1__list_bath').slick('slickFilter','.cheap');
var filtered = false;
$('.p2_s1__toggle_bath').on('click', function(){
      if (filtered === false) {
           $('.p2_s1__list_bath').slick('slickUnfilter');
        $('.p2_s1__list_bath').slick('slickFilter','.expensive');
        filtered = true;
      } else {
        $('.p2_s1__list_bath').slick('slickUnfilter');
        $('.p2_s1__list_bath').slick('slickFilter','.cheap');
        filtered = false;
      }
    
    
        if ($('.p2_s1__toggle_bath .active').index() == 0) {
            $('.p2_s1__toggle_bath div:eq(0)').removeClass('active');
            $('.p2_s1__toggle_bath div:eq(1)').addClass('active');
        } else {
            $('.p2_s1__toggle_bath div:eq(0)').addClass('active');
            $('.p2_s1__toggle_bath div:eq(1)').removeClass('active');
        }
        $('.p2_s1__list_bath').toggleClass('show_expensive');
        calc.step_3 = false;
        $('.p2_s3').toggleClass('expensive');
        $('.p2_s3 .p2_s1__step__status__this').text('Не выбрано').addClass('dont_was_select');
        calc.step_3 = false;
        $('.steps__wrapper__left_part__item').removeClass('checked');
        if ($('.p2_s1__list_bath').hasClass('show_expensive')) {
            event_select_bath($('.p2_s1__list_bath .slick-track .p2_s1__list_bath__item.slick-active.expensive:first'));
        } else {
            event_select_bath($('.p2_s1__list_bath .slick-track .p2_s1__list_bath__item.slick-active.cheap:first'));
        }
        show_calc();
});

});
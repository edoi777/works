$(document).ready(function () {
    //    переключаение описания(читать полностью) и элементов с развертывающимся списком
    $('.list_height_anim__trigger').on('click', function () {
        $(this).toggleClass('show');
        var h = ($(this).attr('data-height-hidden')) ? $(this).attr('data-height-hidden') : 0,
            i = $(this).siblings('.list_height_anim__item');
        if (i.hasClass('show')) {
            i.toggleClass('show');
            i.css('height', h + 'px');
        } else {
            i.toggleClass('show');
            i.css('height', i[0].scrollHeight + 'px');
        }
    });
//    fix resize document bug
    $(window).on('resize', function() {
        $('.list_height_anim__trigger').each(function () {
            var h = ($(this).attr('data-height-hidden')) ? $(this).attr('data-height-hidden') : 0,
                i = $(this).siblings('.list_height_anim__item');
            if (i.hasClass('show')) {
                i.css('height', 'auto');
            } else {
                i.css('height', h + 'px');
            }
        });
    });
//    fix resize document bug END
    
    
//    добавляет background-image к блокам у которых есть атрибут [data-background-image]
    $('[data-background-image]').each(function(){
        $(this).css('background-image','url('+$(this).attr('data-background-image')+')')
    });
    $('[data-background-color]').each(function(){
        $(this).css('background-color',$(this).attr('data-background-color'))
    });
//    добавляет background-image к блокам у которых есть атрибут [data-background-image] END
    
    
    
//    слайдер
    $('.slider').slick({
        dots:true,
        slidesToShow: 2,
        slidesToScroll: 2,
        responsive: [
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
    });
    $('.slider_t_2').slick({
        dots:true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows:false
    });
//добавляет нумерацию к слайдеру
    var count = 0;
    $('.slider').each(function() {
        count = $(this).find('.slick-dots').find('li').length;
        $(this).find('.slick-dots').find('li').each(function() {
            $(this).find('button').text($(this).find('button').text() + ' из ' + count);
        });
    });
//    слайдер END
    
    
    
//    Активирует меню в хедере и попапы которые выбирают метро или категорию
    $('.header__menu__icon, .header__menu__top_line__close').on('click', function(e) {
        e.preventDefault();
        $('body').toggleClass('header_menu__active');
    });
    $('.options-for-search__item.metro,.cat-index_metro, .metro__popup__close').on('click', function(e) {
        e.preventDefault();
        $('body').toggleClass('metro__popup__active');
    });
    $('.options-for-search__item.category, .cat-index_cat, .category__popup__close').on('click', function(e) {
        e.preventDefault();
        $('body').toggleClass('category__popup__active');
    });
    $('.bottom_screen_wrapper__block__close_button, .bottom_screen_button').on('click', function(e) {
        e.preventDefault();
        $('.bottom_screen_wrapper').toggleClass('active');
    });
    $('.registration_and_antrance__icon, .registration_and_antrance__top_line__close').on('click', function(e) {
        e.preventDefault();
        $('body').toggleClass('registration_and_antrance__active');
    });
    $('.registration_and_antrance__top_line__item').on('click', function(e) {
        e.preventDefault();
        $('.registration_and_antrance__top_line__item').removeClass('active');
        $(this).addClass('active');
        $('.registration_and_antrance__wrapper__forms form').removeClass('active');
        $('.registration_and_antrance__wrapper__forms form:eq('+$(this).index()+')').addClass('active');
    });
//    Активирует меню END
//    Код который скролит станции метро, категори, услуги, впихну его в общий
    
    var count_height = 0;
    var count_height_border = 0;
    $(window).on('scroll', function(){
        
        if($(window).scrollTop() > count_height) {
            count_height = $(window).scrollTop();
            count_height_border = $(window).scrollTop();
            if($('.options-for-search').hasClass('show')) {
                $('.options-for-search').removeClass('show');  
            }
        } else {
            if(!$('.options-for-search').hasClass('show')) {
                if((count_height_border - $(window).scrollTop()) > 50) {
                    $('.options-for-search').addClass('show');  
                }
            }
             count_height = $(window).scrollTop();
        }

        if ($(window).scrollTop() >= ($('header').offset().top + $('.options-for-search').outerHeight() + $('header').outerHeight())) {
            if(!$('.options-for-search').hasClass('scroll')) {
                $('header').css('margin-bottom',$('.options-for-search').outerHeight() +'px');
             $('.options-for-search').addClass('scroll');
            }

        } else {
            if($('.options-for-search').hasClass('scroll')) {
               $('header').css('margin-bottom','0px');
            $('.options-for-search').removeClass('scroll'); 
            }

        }
        
    });
    

});




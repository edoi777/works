function slider() {
    if ($(window).width() < 1024) {
        if (!$('.s3__t5').hasClass('slick-slider')) {
            $('.s3__t5').slick({
                responsive: [
                    {
                        breakpoint: 1024,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1,
                            infinite: true,
                            centerMode: true,
                            variableWidth: true
                        }
                    }
                ]
            });
        }
    } else {
        if ($('.s3__t5').hasClass('slick-slider')) {
            $('.s3__t5').slick('unslick');
        }
    }
}
$(window).on('load', function () {
    if (window.innerWidth > 1024) {
        function img3() {
            var image3 = new Image();
            image3.src = "img/s6__wr__img.gif";
            image3.onload = function () {
                $('img[src="img/s9__wr2__right-part.jpg"]').attr('src', 'img/s9__wr2__right-part.gif');
                console.log('gotovo3');
            }
        }
        function img2() {
            var image2 = new Image();
            image2.src = "img/s6__wr__img.gif";
            image2.onload = function () {
                $('img[src="img/s6__wr__img.png"]').attr('src', 'img/s6__wr__img.gif');
                console.log('gotovo2');
                img3();
            }
        }
        var image = new Image();
        image.src = "img/s1__img2.gif";
        image.onload = function () {
            $('img[src="img/s1__img2.jpg"]').attr('src', 'img/s1__img2.gif');
            console.log('gotovo1');
            img2();
            $('.s5__left-part__t2').attr('src', 'https://www.youtube.com/embed/ChGWgq1iNSc')
        }
    } else {
         $('.s5__left-part__t2').attr('src', 'https://www.youtube.com/embed/ChGWgq1iNSc')
    }
});
$(document).ready(function () {
    slider();
    $('.s10__slider').slick({
        slidesToShow: 1,
        //        slidesToScroll: 1,
        swipeToSlide: true,
        infinite: true,
        variableWidth: true,
        autoplay: true,
        autoplaySpeed: 1000,
         responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true
      }
    }
  ]
    });
    if (window.innerWidth < 1024) {
        $('.s10__slider').slick('slickFilter', '.s10__slider__item.full');
    } else {
        $('.s10__slider').slick('slickUnfilter');
    }
    
    
    $('.s7__wr__item').on('click', function() {
        if($(this).hasClass('show')) {
            $(this).toggleClass('show');
        } else {
            $('.s7__wr__item').removeClass('show');
            $(this).toggleClass('show');
        }
    });
    $('.s8__wr__item').on('click', function() {
        $(this).toggleClass('show');
    });
    $('.s9__wr__item').on('click', function() {
          if($(this).hasClass('show')) {
            $(this).toggleClass('show');
        } else {
            $('.s9__wr__item').removeClass('show');
            $(this).toggleClass('show');
        }
    });
    $('.s4__wr__item').on('click', function() {
         if($(this).hasClass('show')) {
            $(this).toggleClass('show');
        } else {
            $('.s4__wr__item').removeClass('show');
            $(this).toggleClass('show');
        }
    });
    
    
    
    $('.s2_arrow_input').on('click', function() {
       $(this).toggleClass('show'); 
    });
    $('.s2__wr__right-part__p__label__popup__p').on('click', function() {
        $('.this__text__change').html($(this).html());
    });
    
    
});
$(window).resize(function () {
    slider();
    if (window.innerWidth < 1024) {
        $('.s10__slider').slick('slickFilter', '.s10__slider__item.full');
    } else {
        $('.s10__slider').slick('slickUnfilter');
    }
});
$(document).on('click', '.popup__go__show, .popup__wr__cancel, .popup', function (e) {
e.preventDefault();
//    console.log(e.target);
//    console.log($(this)[0].target);
//    console.log($(this).target);
////    console.log($(this));
    if (e.target == $(this)[0]) {
            $('.popup').toggleClass('show');
    $('body').toggleClass('overflow');
    }

});
$(document).on('click', '.s1__menu_button, .s1__nav__close', function (e) {
    e.preventDefault();
    $('body').toggleClass('mobile-active');
});

$(document).on('click', '*', function (у) {

    if(!$(this).hasClass('s2_arrow_input')) {
        $('.s2_arrow_input').removeClass('show');
    }
});


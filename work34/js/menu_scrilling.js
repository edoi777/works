//Навигация по странице с фиксирующимся к топу меню и горизонтальной прокруткой
$(window).on("load", function () {
    if($(".place__menu__wrapper")) {
        $(".place__menu__wrapper").mCustomScrollbar({
            axis: "x", // horizontal scrollbar
            theme: "minimal-dark",
        });
    }
});
//////////////////////////////////
$(document).ready(function() {
    if($('div').is('.place__menu__wrapper')) {
        testDocumentScrollPosition();
        testScrolledElementsPosition();
    }
    $('.place_menu__item').on('click', function(event) {
        event.preventDefault();
        $('body,html').animate({
            scrollTop: $($(this).attr('href')).offset().top - 40
        }, 300);
    });
});
//////////////////////////////////
function testDocumentScrollPosition() {
    if ($(window).scrollTop() >= $('.place__menu__dummy').offset().top) {
        if (!$('.place__menu__wrapper').hasClass('fixed')) {
            $('.place__menu__wrapper').addClass('fixed');
        }
    } else {
        if ($('.place__menu__wrapper').hasClass('fixed')) {
            $('.place__menu__wrapper').removeClass('fixed');
        }
    }
}
//////////////////////////////////
    var menu_selector = ".place_menu__item"; 
function testScrolledElementsPosition() {
        var scroll_top = $(document).scrollTop();
        $(menu_selector).each(function(){
            var hash = $(this).attr("href");
            var target = $(hash);
            if (target.position().top <= scroll_top + 50 && target.position().top + target.outerHeight() > scroll_top) {
                $(menu_selector + ".active").removeClass("active");
                $(this).addClass("active");
            }
        });
}
//////////////////////////////////
$(window).on('scroll', function() {
    if($('div').is('.place__menu__wrapper')) {
        testDocumentScrollPosition();
        testScrolledElementsPosition();
    }

});
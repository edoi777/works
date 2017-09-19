$(document).ready(function() {
    $('#search_selectize, .top_line__notice_panel__toggle_item').selectric({nativeOnMobile: false});     // $('#search_selectize').selectric({nativeOnMobile: false});
    $('.popup_notifications, .bot_line__wrapper_menu_lvl_2').customScroll();    // $('.bot_line__wrapper_menu_lvl_2').customScroll();    
    $(".bot_line__wrapper_menu_lvl_3 > ul").mCustomScrollbar();

$( ".entrancebtn" ).click(function() {if ($('.register').attr('style') == 'display: block;') {$('.register').removeAttr('style')} $( ".entrance" ).toggle();});
$( ".registerbtn" ).click(function() {if ($('.entrance').attr('style') == 'display: block;') {$('.entrance').removeAttr('style')}   $( ".register" ).toggle();});
$( ".top_line__menu_button" ).click(function() {$('.top_line__nav').toggleClass('none flex');});

function adaptive_lvl2_menu() {

if ($(window).innerWidth() < 1040) {
	    $('.bot_line__wrapper_menu_lvl_2').customScroll('destroy');
	  	$('.bot_line__wrapper_menu_lvl_2').attr('style','min-height:auto;');
} else {
	    $('.bot_line__wrapper_menu_lvl_2').customScroll();
	   $('.bot_line__wrapper_menu_lvl_2').removeAttr('style');

}
}
adaptive_lvl2_menu();

$(window).resize(function () {
adaptive_lvl2_menu();
});

isMobile = {
        Android: function() {
            return navigator.userAgent.match(/Android/i);
        },
        BlackBerry: function() {
            return navigator.userAgent.match(/BlackBerry/i);
        },
        iOS: function() {
            return navigator.userAgent.match(/iPhone|iPad|iPod/i);
        },
        Opera: function() {
            return navigator.userAgent.match(/Opera Mini/i);
        },
        Windows: function() {
            return navigator.userAgent.match(/IEMobile/i);
        },
        any: function() {
            return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
        }
    };
    
    if (isMobile.any()) {
$( ".bot_line__link_lvl_1").click(function() {	$('.show_lvl1').removeClass('show_lvl1'); $(this).parent('li').toggleClass('show_lvl1'); });
$( ".bot_line__link_lvl_2" ).click(function() {	
    $('.show_lvl2').removeClass('show_lvl2');
	$(this).parent('li').toggleClass('show_lvl2');
});

} else {
	$( ".bot_line__wrapper_menu_lvl_1 > li").hover(function() {	$(this).toggleClass('show_lvl1'); });
$( ".bot_line__wrapper_menu_lvl_1 > li > .bot_line__wrapper_menu_lvl_2 > div > li" ).hover(function() {	$(this).toggleClass('show_lvl2'); });
}
});
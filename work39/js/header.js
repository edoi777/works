$(document).ready(function() {


    $('.top-line__mobille-menu').on('click', function () {
        $('body').toggleClass('show-mobile-menu');
    });
    $('.menu__item__link').on('click', function () {
        if ($(window).width() < 768) {
            if ($(this).hasClass('submenu')) {
                $(this).parent('.menu__item').toggleClass('open-mobile-submenu');
            }
        }
    });
    $('.menu__wrapper-lvl-2__back').on('click', function () {
        $(this).closest('.open-mobile-submenu').toggleClass('open-mobile-submenu');
    });
//---------------------------------------------------------
//   Карта в попапе "Адреса клиник"
//---------------------------------------------------------
var latlng2 = {lat: 55.7630103,lng: 37.6213894};
function initMap2() {
    window.map3 = new google.maps.Map(document.getElementsByClassName('select-city__wr__right-part-map')[0], {
        center: latlng2,
        zoom: 13,
        //        scrollwheel: false,
        //        navigationControl: false,
        mapTypeControl: false,
        //        scaleControl: false,
        mapTypeControlOptions: {
            mapTypeIds: [google.maps.MapTypeId.ROADMAP, customMapTypeId]
        }
        // draggable: false,
    });
    map3.mapTypes.set(customMapTypeId, customMapType);
    map3.setMapTypeId(customMapTypeId);
}
function iniMarker2() {
    $('.select-city__wr__left-part-text__ul__li').each(function () {
        marker = new google.maps.Marker({
            position: {
                lat: +$(this).attr('data-position-lat'),
                lng: +$(this).attr('data-position-lng')
            },
            map: map3,
            icon: image_marker,
            optimized: false,
        });
    });
}
    initMap2();
    iniMarker2();  
});
//$(document).on({
//    mouseenter: function () {
//        $('body').addClass('shadow');
//    },
//    mouseleave: function () {
//      $('body').removeClass('shadow');
//    }
//}, '.menu__item__link.submenu, .menu__wrapper-lvl-2');
function colleft() {
    if ($('.contacts-map__list > div.contacts-map__list__item').length >= 5 || $(window).width() < 1233) {
        $('.contacts-map__list__item').addClass('to-curtail list').find('.contacts-map__list__item__text').addClass('list__toggler');
    } else {
        $('.contacts-map__list__item').removeClass('to-curtail', 'list').find('.contacts-map__list__item__text').addClass('list__toggler');
    }
}

var latlng3 = {lat: 55.7630103,lng: 37.6213894};
function initMap3() {
    window.map3 = new google.maps.Map(document.getElementsByClassName('contacts-map__canvas')[0], {
        center: latlng3,
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
function iniMarker3() {
    $('.contacts-map__list__item').each(function () {
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


$(document).ready(function () {
    colleft();
    $('.contacts-map__list__item').on('click', function () {
        setTimeout(function() {
         google.maps.event.trigger(map3, 'resize');
         map3.panTo(new google.maps.LatLng(latlng3));
        }, 500);

    });

    initMap3();
    iniMarker3();  
    setTimeout(function() {
      google.maps.event.trigger(map3, 'resize');
        map3.panTo(latlng3);
    }, 1000);
  listOnLoad();
});

$(window).resize(function () {
    colleft();
});

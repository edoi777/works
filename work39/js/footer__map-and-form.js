$(document).ready(function() {


  var latlng2 = ($(window).width() > 768) ?  {lat:55.7830103, lng: 37.6213894} : {lat:55.7630103, lng: 37.6213894};

    function initMap2() {
    map2 = new google.maps.Map(document.getElementsByClassName('map-and-form__map')[0], {
        center: {lat:55.7630103, lng: 37.6213894},
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
    map2.mapTypes.set(customMapTypeId, customMapType);
    map2.setMapTypeId(customMapTypeId);
}
function iniMarker2() {
        marker = new google.maps.Marker({
            position: latlng2,
            map: map2,
            icon: image_marker,
            optimized: false,
        });
}
if($('.map-and-form__map')[0]) {
       initMap2();
        iniMarker2();
   }
});

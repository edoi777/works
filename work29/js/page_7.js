$(document).ready(function() {
 $('.p7_toggle_divs_wrapper__item__title').on('click', function() {
     $('.p7_toggle_divs_wrapper__item').removeClass('active'); 
    $(this).parent('.p7_toggle_divs_wrapper__item').toggleClass('active'); 
 });
});

// //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Ниже находится только кастомные стили для карты в футере, и ее инициализация
var map;
function initMap() {

    var lat = 59.91564448278598;
    var lng = 30.306944847106934;
      var myLatLng = {lat: lat, lng: lng};
      var myLatLngMARKER = {lat: lat, lng: lng};
      var div_ID_footer = 'p7_map';
      var zoom = 13;
      var image_min = 'img/map_pip.png';
      var customMapType = new google.maps.StyledMapType([
  {
    "elementType": "labels.icon",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "administrative",
    "elementType": "labels.icon",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "administrative",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#444444"
      }
    ]
  },
  {
    "featureType": "landscape",
    "stylers": [
      {
        "color": "#f6f6f6"
      }
    ]
  },
  {
    "featureType": "landscape",
    "elementType": "labels.icon",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "geometry.fill",
    "stylers": [
      {
        "color": "#e4e4e4"
      }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "labels.icon",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#a2aab6"
      }
    ]
  },
  {
    "featureType": "road",
    "stylers": [
      {
        "saturation": -100
      },
      {
        "lightness": 45
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "labels.icon",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "road.arterial",
    "elementType": "labels.icon",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "stylers": [
      {
        "visibility": "simplified"
      }
    ]
  },
  {
    "featureType": "transit",
    "elementType": "labels.icon",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "water",
    "stylers": [
      {
        "color": "#abaeba"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "geometry.fill",
    "stylers": [
      {
        "color": "#ececec"
      }
    ]
  }
], {
      name: 'Custom Style'
  });
  var customMapTypeId = 'custom_style';
  map = new google.maps.Map(document.getElementById(div_ID_footer), {
    center: myLatLngMARKER,
    zoom: zoom,  
    scrollwheel: false,
    navigationControl: false,
    mapTypeControl: false,
    scaleControl: false,
        mapTypeControlOptions: {
      mapTypeIds: [google.maps.MapTypeId.ROADMAP, customMapTypeId]
    }
    // draggable: false,
  });

  var contentString = '<div id="map_info_window"><p class="map_info_window_t1">            <img src="img/icons/map.png" alt="">ул. Академика Королева 45/2</p><p class="map_info_window_t2"><img src="img/icons/phone.png" alt=""> 8 (800) 755 66 45</p> </div>';
var infowindow = new google.maps.InfoWindow({
    content: contentString,
       pixelOffset: new google.maps.Size(-150,100)
});
  map.mapTypes.set(customMapTypeId, customMapType);
  map.setMapTypeId(customMapTypeId);
  var marker = new google.maps.Marker({
    position: myLatLngMARKER,
    map: map,
    icon:image_min
  });
    infowindow.open(map,marker);

}

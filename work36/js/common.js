$(document).ready(function() {
$('.s3__slider').slick({
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
      infinite: true,
  speed: 300,
  fade: true,
  cssEase: 'linear'
});
$('.s6__wr-slider').slick({
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
      infinite: true,
    arrows:false,
    dots:true,
  responsive: [
    {
      breakpoint: 1024,
      settings: "unslick"
    }
  ]
});
    $('[data-img]').each(function() {
       $(this).css('background-image', 'url('+$(this).attr('data-img')+')');
    });
    var temp;
    $('.header__menu__item__link, .footer__menu__item__link').on('click', function(e) {
        e.preventDefault();
        $('body,html').animate({
                    scrollTop: $($(this).attr('href')).offset().top
                }, 500); 
    });
    
var scene = document.getElementById('scene_1');
var parallax = new Parallax(scene, {
    hoverOnly: true
});
var scene2 = document.getElementById('scene_2');
var parallax = new Parallax(scene2, {
    hoverOnly: true
});
var scene3 = document.getElementById('scene_3');
var parallax = new Parallax(scene3, {
    hoverOnly: true
});
var scene4 = document.getElementById('scene_4');
var parallax = new Parallax(scene4, {
    hoverOnly: true
});
    
});

var map2;
function initMap() {
      var myLatLng = {lat: 55.7630103, lng: 37.6213894};
      var myLatLngMARKER = {lat: 55.7630103, lng: 37.6213894};
      var div_ID = 'map';
      var zoom = 13;
      var image_big = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC0AAABBCAYAAABFLC27AAAE+ElEQVRogcWaXYgVZRjHf3sKTWK1L4wgUUjQSuIlqECjmzZaoffC6kboyqgrdYRtd2nBwhBctQtf7KI2WrrYiDTSmJQSF0T0Qi/aMXZzC0lEwSzaVmO11v3oYp6zX2fOmfeZmbP+bs6emef/vP99mPN+zdtADqIwaACeBJqAZ4HVwHJgCXAXMA5cBy4Bg8BZ4DgwYKybzNpuQ0azjwBvA28AKzOkuAD0AF3Guqtascp0FAZLgfeBTcA92sYS+BfoBnYY6/7wFXmbjsLgLWAPcJ/eWyrDQJux7lOf4FTTURjcD3wGbMhpzIdDwJvGur9rBdU0HYXBo8D3xD+2+WIAaDbWXakWUNV0FAbLgNPAsjoYS+MysM5YdznpZinpYhQGDwLHuDOGkXaPiY8KKkxL39tD3OfeSVYDPeJnFkmVfgdorrslP5qJ/cxi1n8RhcFy4DywKGdjQ8A/QCPwQM5ct4DHjXWXyhfunhPQSTbD48DXwJfAyZldlnSZLwAbgdeJh3cNi8TXxvKFqUpHYfAE0I9+aP8B2Gysu5AWGIXBSuAj4GVlG5PAGmPdzzD7md6K3vB2YL2PYQCJWy86DQ3E/qa+EIXBQuAa8ezMl3Zj3R5l41NEYdAG7FZIrgMPG+v+K1f6JXSGD+YxDCD6gwrJEmKfU49Hk0I8AmxRxNdii+TzpQmmTa9VCLuMddcU8VWRPF0KyVqYNr1KIexRxBadbxVASSb2iz1Fw0Cf1lUKfZLXh8VRGCwtEY9avgzmWdslIfkGFZJGrekhnaW65G0sATcVgnuVZuqR92YJ/+cJ4u2BeqDJO1w2PeYpWCHbB4Uh+VZ4ho8BwyVj3SjxdNSX17TGCsx33lg3Wu6nI4VwWxQGc6e0mZA82zQSmB5cTiiEjwGbFfG12Cz5fDkB06YPAxMKcWcUBs8o4isQfadCMgF8C2LaWDcE9CoSLASORmHwtEIzheiOSh5feo11f8Hs5dY+ZOrnyUPAySgMAqDbZ6SUlfUmwKHv8/eV/5i53GoAfgLWKJNBvIW7G/hOeqO5ZhcArwDtxFvCWvqBp8qFmbsa3wB8kyFpmRHgDPALMAosIJ6ZPUe+0fRVY92h8peKNWEUBqeAdTkaKJrTxrrnZ15I2qxpmSczvlT4qTBtrDsDfDUvdtI5IH5mkbgBCXQAt+vrJ5XbwLtJNxJNG+t+A/bX05EH+8VHBdUqDbAT3bS1SIal/USqmpb9uKrCOrOz1iuMWpWG+BG5WKyfVC6S8mjWNC2jW+KPoY50JI2qM0mrNMAB4mF6PjiLR3ebalrG+/kacFp8Jl4+lcZYd4p4zl1PDks7qXiZFtrxXwBrGZP8XnibNtb9CnycxZEHn0h+LzSVBvgAuKHUpHED2KERqEwb6/4Edmk0HuySvN5oKw3xUqnqe2slVySfCrVpY90t4llgEXRIPhVZKg3wBfBjRm2ZPsmjJpNpY90E0JZFO4NWyaMma6Ux1vUCRzLKj4g+E5lNC+3Er5g1jKMYSJLIZdpYN0B8cEpDt+gyk7fSAO/h/y5wROJzkdu0se53YK9n+F6Jz0URlQb4EEg7FHhV4nJTiGlj3QjpJwu2S1xuiqo0wOfEG4VJ9Mv9QijMtLFuHGitcrtV7hdCpgOytYjC4Djw4oxLvcY6zSmHVIp8PMq0EB/fQT4LX18WbtpYd464C5wk7uLOFd3G//zxXXx4cXfoAAAAAElFTkSuQmCC';
      var customMapType = new google.maps.StyledMapType([
    {
        "featureType": "all",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "saturation": 36
            },
            {
                "color": "#000000"
            },
            {
                "lightness": 40
            }
        ]
    },
    {
        "featureType": "all",
        "elementType": "labels.text.stroke",
        "stylers": [
            {
                "visibility": "on"
            },
            {
                "color": "#000000"
            },
            {
                "lightness": 16
            }
        ]
    },
    {
        "featureType": "all",
        "elementType": "labels.icon",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "administrative",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#000000"
            },
            {
                "lightness": 20
            }
        ]
    },
    {
        "featureType": "administrative",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "color": "#000000"
            },
            {
                "lightness": 17
            },
            {
                "weight": 1.2
            }
        ]
    },
    {
        "featureType": "landscape",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#000000"
            },
            {
                "lightness": 20
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#000000"
            },
            {
                "lightness": 21
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#000000"
            },
            {
                "lightness": 17
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "color": "#000000"
            },
            {
                "lightness": 29
            },
            {
                "weight": 0.2
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#000000"
            },
            {
                "lightness": 18
            }
        ]
    },
    {
        "featureType": "road.local",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#000000"
            },
            {
                "lightness": 16
            }
        ]
    },
    {
        "featureType": "transit",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#000000"
            },
            {
                "lightness": 19
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#000000"
            },
            {
                "lightness": 17
            }
        ]
    }
], {
      name: 'Custom Style'
  });
  var customMapTypeId = 'custom_style';

      map2 = new google.maps.Map(document.getElementById(div_ID), {
    center: myLatLng,
    zoom: 13,  
    scrollwheel: false,
    navigationControl: false,
    mapTypeControl: false,
    scaleControl: false,
        mapTypeControlOptions: {
      mapTypeIds: [google.maps.MapTypeId.ROADMAP, customMapTypeId]
    }
    // draggable: false,
  });

  map2.mapTypes.set(customMapTypeId, customMapType);
  map2.setMapTypeId(customMapTypeId);
  var marker2 = new google.maps.Marker({
    position: myLatLngMARKER,
    map: map2,
    icon:image_big

  });

}

var map;
function initMap() {
	 var stchetch = (0.000017408333333332897 * $(window).width()) + 30.306849;
// 0.00002640624999999952 - zoom = 13
$(window).resize(function() {
	var stchetch = (0.000017408333333332897 * $(window).width()) + 30.306849;
	map.setCenter({lat: 59.915630, lng: stchetch})
});
	  var myLatLng = {lat: 59.915630, lng: stchetch};
	  var myLatLngMARKER = {lat: 59.915630, lng: 30.306849};
	  var div_ID = 'map_page_contacts';
	  var zoom = 14;
	  var image = 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48c3ZnIHdpZHRoPSI3NnB4IiBoZWlnaHQ9IjEwOHB4IiB2aWV3Qm94PSIwIDAgMzMgNDciIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+ICAgICAgICA8dGl0bGU+bWFwIHBpbjwvdGl0bGU+ICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPiAgICA8ZGVmcz48L2RlZnM+ICAgIDxnIGlkPSJTeW1ib2xzIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4gICAgICAgIDxnIGlkPSJTLUZvb3RlciIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTQyMC4wMDAwMDAsIC02MC4wMDAwMDApIj4gICAgICAgICAgICA8ZyBpZD0iR3JvdXAtNSI+ICAgICAgICAgICAgICAgIDxnIGlkPSJtYXAtcGluIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0MjAuMDAwMDAwLCA2MC4wMDAwMDApIj4gICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik0xNi41LDAgQzcuMzg3Mjg1NzEsMCAwLDcuMzY0OSAwLDE2LjQ1IEMwLDI1LjUzNTEgMTYuNSw0NyAxNi41LDQ3IEMxNi41LDQ3IDMzLDI1LjUzNTEgMzMsMTYuNDUgQzMzLDcuMzY0OSAyNS42MTI3MTQzLDAgMTYuNSwwIiBpZD0icGluX2ZpbGxfc2hhcnBfY2lyY2xlLVsjNjM0XSIgZmlsbD0iIzIyMjk0NCI+PC9wYXRoPiAgICAgICAgICAgICAgICAgICAgPGcgaWQ9Ikdyb3VwIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg3LjAwMDAwMCwgNy4wMDAwMDApIiBmaWxsPSIjRkZGRkZGIj4gICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSJNMTguNTI2NjA1MywxMS41OTMxNjQ0IEMxOC41MDIzNTI1LDExLjQ5OTUwMzMgMTguMzgxMDg4OCwxMS40NzcwOTUxIDE4LjMyMjMzMjEsMTEuNTUzODg3MSBDMTYuNzUxNDAzNiwxMy42MDgxMzYxIDE0LjQyNTEzOTIsMTUuMDQ1NzgzIDExLjc2MTgzNjYsMTUuNDQ0NTk3OSBDMTEuNTI2NTU5OCwxNS40Nzk4NDY3IDExLjI4ODc4MjgsMTUuNTA3MjkwNCAxMS4wNDg3NTU1LDE1LjUyNjE3MzYgQzEwLjc4NTQ3NTYsMTUuNTQ2NTY3NiAxMC41MTk0NDU0LDE1LjU1NzE0MjIgMTAuMjUwOTE0OSwxNS41NTcxNDIyIEM4LjU2OTQ3MzgsMTUuNTU3MTQyMiA2Ljk4Mzc5MzYxLDE1LjE0Njc0NTYgNS41ODYxMzQ3OSwxNC40MjAxMTcxIEMzLjYwMDQwOTE0LDEzLjM4NzU3OTQgMS45OTU3MjY3OSwxMS43MTY1MzUxIDEuMDM5MTE4MDgsOS42NzY2Mzc0OCBDMC44MDczNDE3NDMsOS4xODIzOTkxMyAwLjYxMzMxOTY5NSw4LjY2Njc1OTc0IDAuNDYxNTUyNDQ5LDguMTMyOTkyNCBMMC40NTk1NTIyMjIsOC4xMjU0MzkwOSBDMC40MDg3OTY0NTQsNy45NDY5MjkxNiAwLjE1MjI2NzMwMyw3Ljk2MzI5NDY3IDAuMTIzNzY0MDY0LDguMTQ2ODQwMTMgQzAuMDkzMDEwNTY5NCw4LjM0NDIzMzM0IDAuMDY3NzU3Njk5Nyw4LjU0MzY0MDc2IDAuMDQ4NTA1NTEyLDguNzQ0ODEwNjIgQzAuMDE2NzUxOTAzNiw5LjA3NDM4Njc4IDAsOS40MDg3NDY3IDAsOS43NDY2MzE1IEMwLDEwLjUxMDI3MTMgMC4wODM1MDk0ODk3LDExLjI1NDAyMDcgMC4yNDA3NzczNjEsMTEuOTY5ODIyOCBDMC44MTM1OTI0NTQsMTQuNTc5NDkxOSAyLjM3MzUxOTcyLDE2LjgxNTc3NTcgNC41MDY3NjIxMywxOC4yNjA0NzI0IEM2LjEyODQ0NjQxLDE5LjM1ODcyMzkgOC4wODA2NjgyNiwyMCAxMC4xODIxNTcxLDIwIEMxMS45Mjk2MDU2LDIwIDEzLjU3NDI5MjUsMTkuNTU2MzY4OCAxNS4wMTEyMDU4LDE4Ljc3NTM1NjQgQzE2LjUwNDM3NTUsMTcuOTYzODc5IDE3Ljc3Mjc2OTYsMTYuNzg3NTc2NiAxOC42OTk2MjUsMTUuMzY1Mjg4MSBDMTguNzcyMzgzMiwxNS4yNTQwMDI2IDE4LjgxNTg4ODIsMTUuMTI1NTk2NCAxOC44MjYxMzkzLDE0Ljk5MjkwOTggQzE4Ljg0NjM5MTYsMTQuNzI4Nzk1NyAxOC44NTcxNDI5LDE0LjQ2MjE2MzggMTguODU3MTQyOSwxNC4xOTI3NjI0IEMxOC44NTcxNDI5LDEzLjcyODczNzMgMTguODI1ODg5MywxMy4yNzIyNjU1IDE4Ljc2NjYzMjYsMTIuODI0MzU0MSBDMTguNzExMTI2MywxMi40MDU2NDg5IDE4LjYzMDYxNzEsMTEuOTk0NDk3IDE4LjUyNjYwNTMsMTEuNTkzMTY0NCIgaWQ9IkZpbGwtNDMiPjwvcGF0aD4gICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSJNMTAsNS43MTQyODU3MSBDNy42MzMxMzU2LDUuNzE0Mjg1NzEgNS43MTQyODU3MSw3LjYzMzA3OTczIDUuNzE0Mjg1NzEsOS45OTk4NzUyMSBDNS43MTQyODU3MSwxMC45OTYyMTA1IDYuMDU0OTc2NDEsMTEuOTEyMTgwMSA2LjYyNTI5MDE1LDEyLjYzOTk2NDEgQzcuNDA5NzUyMzIsMTMuNjQxMjkxIDguNjI5MjUwMzEsMTQuMjg1NzE0MyAxMCwxNC4yODU3MTQzIEMxMC4yNzcyOTQ4LDE0LjI4NTcxNDMgMTAuNTQ4MTAwMiwxNC4yNTgyNjAyIDEwLjgxMDY2OTIsMTQuMjA4MDk0IEMxMi43ODk5MTk5LDEzLjgyODk3NzQgMTQuMjg1NzE0MywxMi4wODk2MzM2IDE0LjI4NTcxNDMsOS45OTk4NzUyMSBDMTQuMjg1NzE0Myw5LjY4NTY1MDIzIDE0LjI1MTAyMTIsOS4zNzk0MTE5IDE0LjE4NjYyNyw5LjA4NDQwNDgxIEMxNC4xNzQ4OTYyLDkuMDMwNDk0ODggMTQuMTI1MjI3OCw4Ljk5MjU1ODI3IDE0LjA3MDMxNzksOC45OTQzMDUzNSBDMTIuNjgyMDk2OSw5LjAzNzczMjc5IDExLjM2NTAwOTEsOS4zNjE2OTE1MSAxMC4xNzI5NjYsOS45MTEyNzMyNSBDMTAuMDk1MDkzOSw5Ljk0NzIxMzIgMTAuMDA1NzQwNiw5Ljg4OTMwOTk0IDEwLjAwOTQ4NDQsOS44MDM0NTM0IEMxMC4wNjc4ODg1LDguNDM1NzM4NjIgMTAuMzk4ODQ1Miw3LjEzODQwNjI1IDEwLjk0OTE5MTcsNS45NjQzNjc4NyBDMTAuOTgwMzkwNSw1Ljg5Nzk3ODc5IDEwLjk0MzIwMTYsNS44MTg4NjA5OSAxMC44NzEzMTk2LDUuODAzODg2MDEgQzEwLjU5MDAzMTQsNS43NDU0ODM1OSAxMC4yOTg3NTk1LDUuNzE0Mjg1NzEgMTAsNS43MTQyODU3MSIgaWQ9IkZpbGwtMzkiPjwvcGF0aD4gICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSJNMTkuNzk3ODAwNyw4LjE1MDkyMDI3IEMxOS4yNDA4MzU2LDUuMzU5ODM1NDIgMTcuNTcyMzg1NSwyLjk4NDM0MjcyIDE1LjI4NzgwMjEsMS41MzAwMjA4MyBDMTMuNzY0ODI3OSwwLjU2MDQ3Mjg5OSAxMS45NjgwMTY3LDguODgxNzg0MmUtMTYgMTAuMDQzMzMzMyw4Ljg4MTc4NDJlLTE2IEM2LjY4MTk4MzQxLDguODgxNzg0MmUtMTYgMy43MDk2Mjg4LDEuNzA3NzM3ODYgMS45MDY3MDUxNSw0LjMyMjg2MDI5IEMxLjgzMTM5OTk2LDQuNDMyMzk4MTUgMS43ODQ0NTY0Niw0LjU2MDIzNDEgMS43NzA1MjAxMSw0LjY5MzMzMzg4IEMxLjczMzM1NjUxLDUuMDUyMDI2NTEgMS43MTQyODU3MSw1LjQxNTk4Mjk3IDEuNzE0Mjg1NzEsNS43ODQ3MDE5NSBDMS43MTQyODU3MSw2LjI0NjY2NTk3IDEuNzQ0ODQ3ODksNi43MDEzNjA4OSAxLjgwMjc5Mzc2LDcuMTQ3MDMyMDkgQzEuODUyOTE1NzMsNy41MzMwNDY1MiAxLjkyNDMwODk2LDcuOTEyMjkzMTYgMi4wMTUyNjE5OCw4LjI4MzUxODczIEMyLjAzODQ4OTI0LDguMzc3NTE1NzUgMi4xNTU2MDM0OCw4LjQwMzA4Mjk0IDIuMjE0MjgyODUsOC4zMjY4ODI2OSBDMy44OTUyMDIzMSw2LjEzNjg3NzQ1IDYuNDMxMTI5MSw0LjY2OTc3MTk2IDkuMzA2NDE4MjUsNC40NTQyMDU0NiBDOS41NDk2OTMxNCw0LjQzNTkwNzM3IDkuNzk1NDEzLDQuNDI2MzgyMzQgMTAuMDQzMzMzMyw0LjQyNjM4MjM0IEMxMC42OTI0NzM5LDQuNDI2MzgyMzQgMTEuMzI3MTg5MSw0LjQ5MDgwMTYzIDExLjk0MTYxMSw0LjYxMjM3MTExIEMxNS4wOTQ2NDkxLDUuMjM2NzYxOTggMTcuNzE3MzcyNSw3LjM4NTE1Nzg4IDE5LjA1MTEwNTcsMTAuMjgxMDE4MSBDMTkuMDY5Njg3NSwxMC4zMjEzNzQxIDE5LjA4ODUxMzgsMTAuMzYxOTgwOCAxOS4xMDY2MDY2LDEwLjQwMjU4NzYgQzE5LjMyMTAzMDgsMTAuODg0NjA0MyAxOS40OTk3NTg0LDExLjM4NjkyNDMgMTkuNjM5NjEwOSwxMS45MDU1MzcyIEwxOS42NDIzMDAzLDExLjkxNTA2MjMgQzE5LjY3NDU3NCwxMi4wMzQ4NzcxIDE5Ljg0MzAzMjcsMTIuMDI1MzUyMSAxOS44NjMwODE1LDExLjkwMjc4IEMxOS44ODQ4NDE3LDExLjc2OTkzMDkgMTkuOTA0MTU3LDExLjYzNjMyOTggMTkuOTIwNzgyOSwxMS41MDE3MjYgQzE5Ljk0NDI1NDYsMTEuMzEwOTc0OCAxOS45NjIxMDI5LDExLjExODcxOTUgMTkuOTc1MzA1OCwxMC45MjQ5NjAzIEMxOS45OTExOTgxLDEwLjY4ODA4NzggMjAsMTAuNDQ4OTU5NCAyMCwxMC4yMDc1NzUxIEMyMCw5LjUwMzIyNDA2IDE5LjkzMDMxODIsOC44MTUxNjU4OCAxOS43OTc4MDA3LDguMTUwOTIwMjciIGlkPSJGaWxsLTQxIj48L3BhdGg+ICAgICAgICAgICAgICAgICAgICA8L2c+ICAgICAgICAgICAgICAgIDwvZz4gICAgICAgICAgICA8L2c+ICAgICAgICA8L2c+ICAgIDwvZz48L3N2Zz4=';
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
  map = new google.maps.Map(document.getElementById(div_ID), {
    center: myLatLng,
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

  map.mapTypes.set(customMapTypeId, customMapType);
  map.setMapTypeId(customMapTypeId);
  var marker = new google.maps.Marker({
    position: myLatLngMARKER,
    map: map,
    icon:image
  });
}


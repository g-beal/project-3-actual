var map;
function initMap() {

  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 41.8722, lng: 87.6188},
    zoom: 8
  });
}

window.initMap = initMap;
// google.maps.event.addDomListener(window, 'load', initMap);

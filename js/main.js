var latitude = 37.000;
var longitude = -120.000;

function initialize() {
	var myLatlng = new google.maps.LatLng(latitude,longitude);
  var mapOptions = {
    center: { lat: latitude, lng: longitude },
    zoom: 6
  };
  var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);

  var marker = new google.maps.Marker({
    position: myLatlng,
    map: map,
    title: 'Hello World!'
	});

  if (State !== "California") {
      var marker2 = new google.maps.Marker({
      position: new google.maps.LatLng(36.165477, -115.123502),
      map: map,
      title: 'NV baby'
    });
  }

}


  google.maps.event.addDomListener(window, 'load', initialize);

// //   function initialize() {
// //   var myLatlng = new google.maps.LatLng(-25.363882,131.044922);
// //   var mapOptions = {
// //     zoom: 4,
// //     center: myLatlng
// //   }
// //   var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);

// //   var marker = new google.maps.Marker({
// //       position: myLatlng,
// //       map: map,
// //       title: 'Hello World!'
// //   });
// // }

// // google.maps.event.addDomListener(window, 'load', initialize);
console.log('yes')


let mymap = L.map('mapid').setView([39.9416, -100.4085],5);


let streets = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/outdoors-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: API_KEY
});
// Then we add our 'graymap' tile layer to the map.
streets.addTo(mymap);
var circle = L.circle([51.508, -0.11], {
    color: 'blue',
    fillColor: '#f03',
    fillOpacity: 0.5,
    radius: 700
}).addTo(mymap);

var polygon = L.polygon([
    [51.509, -0.08],
    [51.503, -0.06],
    [51.51, -0.047],
    [51.8, -0.03]
]).addTo(mymap);



let line = [
    [33.9416, -118.4085],
    [37.6213, -122.3790]
  ]

L.polyline(line,{
    color: "red",
}).addTo(mymap)


let line1 = [
    [33.9416, -118.4085],
    [37.6213, -122.3790],
    [47.4502, -122.3088],
    [40.7899, -111.9791]
    
  ];


  L.polyline(line1,{
      color:'yellow',
  }).addTo(mymap)

  let line2 = [
  [33.9416, -118.4085],
  [30.1975, -97.6664],
  [43.6777,-79.6248],
  [40.6413,-73.7781],
  
  ]

  L.polyline(line2,{
      color:'blue',
      opacity:0.8,
      dashArray: "5",
      weight:4
      }).addTo(mymap)
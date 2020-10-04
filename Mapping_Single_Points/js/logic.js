console.log('yes')


let mymap = L.map('mapid').setView([34.0522, -118.2437], 14);


let streets = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/dark-v10',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: API_KEY
});




L.circleMarker([34.0522, -118.2437],
    {
        radius:100,
        color:'black',
        fillColor:'#99a3b2'
    }
    ).addTo(mymap);


streets.addTo(mymap);
var circle = L.circle([34.0522, -118.2437], {
    color: 'blue',
    fillColor: '#f03',
    fillOpacity: 0.5,
    radius: 100
}).addTo(mymap);

var polygon = L.polygon([
    [51.509, -0.08],
    [51.503, -0.06],
    [51.51, -0.047],
    [51.8, -0.03]
]).addTo(mymap);







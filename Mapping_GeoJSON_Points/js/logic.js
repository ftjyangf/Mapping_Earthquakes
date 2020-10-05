console.log('yes')


let mymap = L.map('mapid').setView([37.5, -122.5], 10);


let streets = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: API_KEY
});
// Then we add our 'graymap' tile layer to the map.
streets.addTo(mymap);
var geojsonFeature = {
    "type": "Feature",
    "properties": {
        "name": "Coors Field",
        "amenity": "Baseball Stadium",
        "popupContent": "This is where the Rockies play!"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [-104.99404, 39.75621]
    }
};

let sanFranAirport =
{"type":"FeatureCollection","features":[{
    "type":"Feature",
    "properties":{
        "id":"3469",
        "name":"San Francisco International Airport",
        "city":"San Francisco",
        "country":"United States",
        "faa":"SFO",
        "icao":"KSFO",
        "alt":"13",
        "tz-offset":"-8",
        "dst":"A",
        "tz":"America/Los_Angeles"},
        "geometry":{
            "type":"Point",
            "coordinates":[-122.375,37.61899948120117]}}
]};

L.geoJSON(geojsonFeature).addTo(mymap);
L.geoJSON(sanFranAirport).addTo(mymap);



// L.geoJSON((sanFranAirport),{
//     pointToLayer:(feature,ladlng)=>
        
//          L.marker(ladlng)
//         .bindPopup(`<h2>${feature.properties.city}</h2>`)
    
    
        
    
// }).addTo(mymap)

L.geoJson(geojsonFeature,{
    onEachFeature:(feature,layer)=>
    layer.bindPopup(`<h2>${feature.properties.name}</h2>`)
}).addTo(mymap)

L.geoJson(sanFranAirport,{
    onEachFeature:(feature,layer)=>
    layer.bindPopup(`<h2>Airport code:${feature.properties.city}</h2><h3>${feature.properties.name}</h3>`)
}).addTo(mymap)
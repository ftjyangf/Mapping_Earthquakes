console.log('yes')



let toronto ='https://raw.githubusercontent.com/ftjyangf/Mapping_Earthquakes/main/torontoNeighborhoods.json'

let streets = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: API_KEY
});
let statelitestreet = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/satellite-v9',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: API_KEY
})
// Then we add our 'graymap' tile layer to the map.





let basemap = {
    'streetmap': streets,
    'satellite': statelitestreet
}
let map = L.map('mapid',{
    center:[43.7181,-79.4056],
    zoom:11,
    layers:[streets]
})
L.control.layers(basemap).addTo(map);
d3.json(toronto).then(d=>{
    
    L.geoJSON(d,{
        weight:1,
        fillColor:'yellow',
        onEachFeature:(feature,layer)=>
            
           layer.bindPopup(`${feature.properties.AREA_NAME}`)
    }).addTo(map)
 
 })
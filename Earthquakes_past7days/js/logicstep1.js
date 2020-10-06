console.log('yes')


let past7days = 'https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson'


let streets = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: API_KEY
});
// Then we add our 'graymap' tile layer to the map.

let statellatestreet = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/satellite-v9',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: API_KEY
});
let basemap ={
    'streets':streets,
    'satellate':statellatestreet
}

let map = L.map('mapid',{
    center:[40,-90],
    zoom:5,
    layer:[streets]

})

L.control.layers(basemap).addTo(map)

d3.json(past7days).then(d=>

    L.geoJson(d,{
        pointToLayer:(feature,latlng)=>
            L.marker(latlng)
               .bindPopup(`${feature.properties.place}`)
    }).addTo(map)





)
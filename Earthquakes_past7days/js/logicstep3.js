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
    layers:[statellatestreet]

})


L.control.layers(basemap).addTo(map)

d3.json(past7days).then(d=>

    L.geoJson(d,{
        pointToLayer:(feature,latlng)=>{
        console.log(styleinfo)
          return L.circleMarker(latlng)
               .bindPopup(`${feature.properties.place}`)


        },
        style:styleinfo
               
            }
  


).addTo(map)
)

function getRadius(magnitude) {
    if (magnitude === 0) {
      return 1;
    }
    return magnitude * 4;
  }

  function styleinfo(feature){
    return{
    color: '#000000',
    fillColor:getColor(feature.properties.mag),
    opacity: 1,
    fillOpacity: 1,
    radius: getRadius(feature.properties.mag),
    stroke:true,
    weight:0.5

    }
}
function getColor(magnitude) {
    if (magnitude > 5) {
      return "#ea2c2c";
    }
    if (magnitude > 4) {
      return "#ea822c";
    }
    if (magnitude > 3) {
      return "#ee9c00";
    }
    if (magnitude > 2) {
      return "#eecc00";
    }
    if (magnitude > 1) {
      return "#d4ee00";
    }
    return "#98ee00";
  }




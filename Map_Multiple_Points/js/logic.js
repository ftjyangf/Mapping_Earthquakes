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
// Then we add our 'graymap' tile layer to the map.



// L.circleMarker([34.0522, -118.2437],
//     {
//         radius:100,
//         color:'black',
//         fillColor:'#99a3b2'
//     }
//     ).addTo(mymap);


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



// An array containing each city's location, state, and population.
let cities = [{
    location: [40.7128, -74.0059],
    city: "New York City",
    state: "NY",
    population: 8398748
  },
  {
    location: [41.8781, -87.6298],
    city: "Chicago",
    state: "IL",
    population: 2705994
  },
  {
    location: [29.7604, -95.3698],
    city: "Houston",
    state: "TX",
    population: 2325502
  },
  {
    location: [34.0522, -118.2437],
    city: "Los Angeles",
    state: "CA",
    population: 3990456
  },
  {
    location: [33.4484, -112.0740],
    city: "Phoenix",
    state: "AZ",
    population: 1660272
  }
  ];


//     cities.forEach(d=>{
//       L.marker(d.location)
//           .bindPopup(`<h2>${d.city},${d.state}</h2><h3>Population ${d.population.toLocaleString()}.</h3>`
      
//   ).addTo(mymap);
//     })

cities.forEach(d=>{L.circleMarker(d.location,{
    radius: d.population/100000,
    color:'#cece29',
    fillColor: '#e5e52d'
}).bindPopup(`<h2>${d.city},${d.state}</h2><h3>Population ${d.population.toLocaleString()}.</h3>`)
.addTo(mymap)
    
})



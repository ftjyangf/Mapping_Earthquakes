console.log('yes')



let streets = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: API_KEY
});



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

var map = L.map('mapid',{
    center:[40.7128,-87.6298],
    zoom:3,
    layers:[streets]

})


L.control.layers(basemap).addTo(map);
L.marker([40,7128,-87.6298]).addTo(map);

let past7days = 'https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson'
let tectonicplastes = 'https://raw.githubusercontent.com/fraxen/tectonicplates/master/GeoJSON/PB2002_boundaries.json'
Promise.all([d3.json(past7days),d3.json(tectonicplastes)]).then(([p7ds,tec])=>{

    L.geoJSON(p7ds,{
       pointToLayer:(feature,latlng)=>{
          return  L.circleMarker(latlng)
            .bindPopup(`${feature.properties.place}`)
              
             
        },
        style:styleinfo
    }
    ).addTo(map);

    L.geoJson(tec,{
        color:'coral',
     }
       ).addTo(map)
    }
)

function styleinfo(feature){
    return {
        radius:getRadius(feature.properties.mag),
        fillColor:getColor(feature.properties.mag),
        color:getColor(feature.properties.mag),
        fillOpacity:1
    }
}
// function styleinfo() {
//     return {
//       opacity: 1,
//       fillOpacity: 1,
//       fillColor: "#ffae42",
//       color: "#000000",
//       radius: 2,
//       stroke: true,
//       weight: 0.5
//     };
//   }



function getRadius(mag){
    if(mag > 5){
     return 6*2.5;
    }else if(mag>4){
      return 5*2.5;
    }else if(mag>3){
     return 4*2.5;
 }else if(mag > 2){
     return 3*2.5;
 }else if(mag > 1){
     return 2*2.5;
 }else{
     return 1*2.5;
 }

}


// console.log(getRadius(100))













function getColor(mag){
       if(mag > 5){
        return '#ff2d29';
       }else if(mag>4){
         return '#ff5735';
       }else if(mag>3){
        return '#ff7231';
      }else if(mag > 2){
        return '#ffa53f';
     }else if(mag > 1){
           return '#ffb81f';
     }else{
        return '#ffda1e';
     }

}

var legend = L.control({position:'bottomright'});
legend.onAdd = function(map){
    let div = L.DomUtil.create('div','info Legend');
    let magnitude = [0,1,2,3,4,5];

    for(var i = 0;i<magnitude.length; i++){
        div.innerHTML += '<i style ="background:' + getColor(magnitude[i]) + '">'
        + magnitude[i]  + (magnitude[i+1] ? '&ndash;' + magnitude[i+1] + '<br>': '+')
    }
   
    return div

}

legend.addTo(map)

// var legend = L.control({position:'bottomright'});

// legend.onAdd = function(map){

//     var div =L.DomUtil.create('div','info Legend'),
//         magnitude = [0,1,2,3,4,5],
//         labels= [];
    
//         for(var i=0;i<magnitude.length;i++){
//           div.innerHTML +=
//           '<i style= "background:' +getColor(magnitude[i]) + '"><i>'
//           + magnitude[i] + (magnitude[i+1] ? '&ndash;' + magnitude[i+1] + '<br>' : '+')
//         }
        
//     return div;


// }

// legend.addTo(map);
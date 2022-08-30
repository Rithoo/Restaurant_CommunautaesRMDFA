// js Maps

// function myMap() {
//     var mapProp= {
//       center:new google.maps.LatLng(51.508742,-0.120850),
//       zoom:10,
//     };
//     var map = new google.maps.Map(document.getElementById("googleMap"),mapProp);
//     } 

const vmap = document.getElementById("googleMap");

function maPosition(){
    var location ={lat: 18.530738938346936, lng: -72.33341149236094};
    var gmap = new google.maps.Map(vmap,{
        zoom:5,
        center: location
    });
    var marker = new google.maps.Marker({
        position: location,
        map:gmap 
    });

}
import mapboxgl from "mapbox-gl";

mapboxgl.accessToken = 'pk.eyJ1Ijoia2Vsc2V5Z3JlZW5lMTciLCJhIjoiY2todXNxMGJoMThuMjJxcXBodTN3MmlidSJ9.OakXyM4XTG4LwmSFuBIV5g';

let hotelMarkerElement = document.createElement("div");
        hotelMarkerElement.style.width = "32px";
        hotelMarkerElement.style.height = "39px";
        hotelMarkerElement.style.backgroundImage = "url(http://i.imgur.com/D9574Cu.png)";

let activityMarkerElement = document.createElement("div");
        activityMarkerElement.style.width = "32px";
        activityMarkerElement.style.height = "39px";
        activityMarkerElement.style.backgroundImage = "url(http://i.imgur.com/WbMOfMl.png)";       

let restaurantMarkerElement = document.createElement("div");
        restaurantMarkerElement.style.width = "32px";
        restaurantMarkerElement.style.height = "39px";
        restaurantMarkerElement.style.backgroundImage = "url(http://i.imgur.com/cqR6pUI.png)";       

        
function (activityType, coordinates) {
    if ("hotel" === activityType) {
        new mapboxgl.Marker(hotelMarkerElement)
        .setLngLat(coordinates)
        .addTo(map)  
    }
    else if ("activity" === activityType) {
        new mapboxgl.Marker(activityMarkerElement)
        .setLngLat(coordinates)
        .addTo(map)
    }
    else ("restaurant" === activityType) {
        new mapboxgl.Marker(restaurantlMarkerElement)
        .setLngLat(coordinates)
        .addTo(map)
    }
}
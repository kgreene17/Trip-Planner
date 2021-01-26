import mapboxgl from "mapbox-gl";

mapboxgl.accessToken = 'pk.eyJ1Ijoia2Vsc2V5Z3JlZW5lMTciLCJhIjoiY2todXNxMGJoMThuMjJxcXBodTN3MmlidSJ9.OakXyM4XTG4LwmSFuBIV5g';

const map = new mapboxgl.Map({
    container: "map",
    center: [-74.009, 40.705], // FullStack NY coordinates; alternatively, use [-87.6354, 41.8885] for Chicago
    zoom: 12, // starting zoom
    style: "mapbox://styles/mapbox/streets-v10" // mapbox has lots of different map styles available.
  });

  let markerDomElement = document.createElement("div");
    markerDomElement.style.width = "32px";
    markerDomElement.style.height = "39px";
    markerDomElement.style.backgroundImage = "url(http://i.imgur.com/WbMOfMl.png)";
  
  new mapboxgl.Marker(markerDomElement)
    .setLngLat([-74.009151, 40.705086])
    .addTo(map)
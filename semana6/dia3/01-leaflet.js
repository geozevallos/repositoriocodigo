var miMapa = L.map("miMapa").setView([-12.7754, -72.88313], 7);

// L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
//     attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
// }).addTo(miMapa);

L.tileLayer(
  "https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1Ijoiam9yZ2VnYXJiYSIsImEiOiJja21vOTJ4Nm8waXppMnZrNTRoNXJlbXdiIn0.P_K9HjwwpSJQUkvKddhpcA",
  {
    attribution:
      'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: "mapbox/streets-v11",
    tileSize: 512,
    zoomOffset: -1,
    accessToken:
      "pk.eyJ1Ijoiam9yZ2VnYXJiYSIsImEiOiJja21vOTJ4Nm8waXppMnZrNTRoNXJlbXdiIn0.P_K9HjwwpSJQUkvKddhpcA",
  }
).addTo(miMapa);

let marcador = L.marker([-12.7754, -72.88313])
  .addTo(miMapa)

// miMapa.on("click", (e) => {
//     console.log("Latitud: "+e.latlng.lat);
//     console.log("Longitud: "+e.latlng.lng);
// });

miMapa.on("click", ({latlng: {lat, lng}}) => {
    console.log("Latitud: "+lat);
    console.log("Longitud: "+lng);
});


let btnPuno = document.getElementById("btnPuno");

btnPuno.onclick = () => {
    miMapa.flyTo([-15.841141531704206, -70.02737045288087], 14);
    marcador.setLatLng(-15.841141531704206, -70.02737045288087)
}

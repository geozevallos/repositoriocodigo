import axios from "axios";

console.log("Hola mundo mi proyecto en node");
for (const n of [1,5,4,6]) {
   console.log(n); 
}


// fetch("https://reqres.in/api/users").then((peticion) => {
//    return peticion.json()
// }).then(data => {
//    console.log(data);
// })


axios.get("https://reqres.in/api/users").then(data => {
   console.log(data.data);
})
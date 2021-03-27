import axios from "axios";

console.log("INICIO JS");

axios.get("https://reqres.in/api/users").then(data => {
    console.log(data);
})
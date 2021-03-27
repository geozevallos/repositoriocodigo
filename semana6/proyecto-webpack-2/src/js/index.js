import {getUsers} from "./servicios.js";


getUsers().then(data =>{
    console.log(data);
})
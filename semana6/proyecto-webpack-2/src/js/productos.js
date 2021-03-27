import {getPost} from './servicios.js'

getPost().then(data => {
    console.log(data);
})
import {fire, firebase} from '../config/firebase'

//Necesitamos crear una referencia a nuestra base de datos
const db = fire.firestore()

const crearDocumento = (objDocumento) => {
    //hago ref a mi db, le indico que coleccion quiero trabajar y le añado el documento
    //El documento a añadair es un objeto
    //Los metodos que utilizas firebase vana a trabajar devoleindo promesas
    return db.collection("documentos").add({...objDocumento})

    //resolve(exito) then(), reject(error) catch 
}

//nombre de nuestro archivo a subir y el archivo en sí
const subirArchivos = (nombreArchivo, Archivo) => {
    const refStorage = firebase.storage.ref(`fotos/${nombreArchivo}`)
    
//tarea derefStorage
const tarea =refStorage.put(Archivo)
tarea.on("state_changed",
()=>{}, //Funcion para evaluar la subida
()=>{}, //Funcion para manejar erroes
()=>{  //funcion cuando ya termino la subida
    // Aquí ya tnego la URL de descarga
    tarea.snapshot.ref.getDownloadURL().then(
        urlImagen => {
            console.log(urlImagen);
        }
    )
}
)
}





//TEnemos q exportarlo
export{
    crearDocumento,
    subirArchivos
}


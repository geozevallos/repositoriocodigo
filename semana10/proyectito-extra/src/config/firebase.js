import firebase from "firebase"

const firebaseconfig = {
  apiKey: "AIzaSyDKHYdD04aLbxKzlEGoK7_bB-nG3aXyr-Y",
  authDomain: "codigo6-dc4af.firebaseapp.com",
  projectId: "codigo6-dc4af",
  storageBucket: "codigo6-dc4af.appspot.com",
  messagingSenderId: "455906084222",
  appId: "1:455906084222:web:ad255ca5bf797997ff5f2f",


  // apiKey: process.env.REACT_APP_API_KEY,
  // authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  // projectId: process.env.RECT_APP_PROJECT_ID,
  // storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  // messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  // appId: process.env.REACT_APP_APP_ID,
};


// Inicializando Firebase

const fire = firebase.initializeApp(firebaseconfig)


export{
    firebase, //Lo exportamos xq trae meotods y tipos de datos
    fire //Permite hacer operaciones utilizando firebase
}
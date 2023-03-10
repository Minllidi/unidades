// export function hola(){
//     console.log('Hola estrellitas, este mensaje les llega desde el de arriba.js')
// }


  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-analytics.js";

  import { 
    getFirestore,
    collection,
    addDoc,
    getDocs,
    onSnapshot
} from "https://www.gstatic.com/firebasejs/9.17.1/firebase-firestore.js"
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyDDaikwzv9DT-ed61YjIlS-u1BXypwf9Nc",
    authDomain: "miniso-4af5e.firebaseapp.com",
    projectId: "miniso-4af5e",
    storageBucket: "miniso-4af5e.appspot.com",
    messagingSenderId: "728490442088",
    appId: "1:728490442088:web:ee305648259d660f7feadd",
    measurementId: "G-22NMTJNP46"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);

  //Iniciar getFirestore
  const db = getFirestore(app);

  export const agregarTarea = (titulo, descripcion) => {
    addDoc(collection(db, "tareas"), {
        _titulo: titulo,
        _descripcion: descripcion
    });
    console.log("se agrego la tarea exisitosamente");
  };

export const listarTareas = () => getDocs(collection(db,"tareas"));

export const OnListarTareas = (callback) => onSnapshot(collection(db,"tareas"),callback);
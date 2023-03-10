$(document).ready(function () {
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
    const app = firebase.initializeApp(firebaseConfig);
    console.log(app);
});

//Registrar usuarios
//Seleccionar el boton registrar
$("#btn-registrar").click(function () {
    //Capturar el email y el password
    let email = $("#email").val();
    let password = $("#password").val();

    // console.log(email, pass); //comprobamos si captura los datos


    // metodo de firebase 
    firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
            // Signed in
            var user = userCredential.user;
            console.log("creaste una cuenta");
            // ...
        })
        .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            // ..
            alert("error al crear cuenta");
        })    
});

//Ingresar con nuestro correo registrado
$("#inicio").click(function () {
    //Captura el valor de email y password
    // Capturar el email y el password
    let email = $("#email").val();
    let password = $("#password").val();

    firebase.auth().signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            // Signed in
            // alert("se pudo pa")
            window.location.href = 'home.html';
            // ...
        })
        .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            console.log(errorCode,errorMessage);
        });
})

//cerrar sesion
$("#salir").click(function () {
    firebase.auth().signOut().then(() => {
        // Sign-out successful.
        window.location.href = 'index.html';
        
      });
})

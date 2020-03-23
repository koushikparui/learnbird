// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyCw--Xar9_tNGTFzUA2LM-ehom5H2gj4lE",
    authDomain: "learnbird-73f29.firebaseapp.com",
    databaseURL: "https://learnbird-73f29.firebaseio.com",
    projectId: "learnbird-73f29",
    storageBucket: "learnbird-73f29.appspot.com",
    messagingSenderId: "741074660527",
    appId: "1:741074660527:web:3a349b2dff1c90e035785a",
    measurementId: "G-L3CBQLMMBB"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

function login(e) {
    e.preventDefault();
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then(() => {
            // sessionStorage.setItem("email", email);
            var userId = firebase.auth().currentUser.uid;
            alertbox.classList.add("alert-success");
            alertbox.innerHTML = "Login successful..";
            alertbox.style.display = "block";
            var snap;

            firebase
                .database()
                .ref("/users/" + userId)
                .once("value")
                .then(snapshot => {
                    snap = snapshot.val();
                })
                .catch(err => console.log(err));
            setTimeout(() => {
                alertbox.classList.remove("alert-success");
                alertbox.innerHTML = "";
                alertbox.style.display = "none";

                if (snap === null) {
                    window.location.href = "/profile.html";
                } else {
                    window.location.href = "/";
                }
            }, 3000);
        })
        .catch(function(error) {
            // Handle Errors here.
            var errorMessage = error.message;
            alertbox.classList.add("alert-danger");
            alertbox.innerHTML = errorMessage;
            alertbox.style.display = "block";
            setTimeout(() => {
                alertbox.classList.remove("alert-danger");
                alertbox.innerHTML = "";
                alertbox.style.display = "none";
            }, 5000);
        });
}

document.getElementById("loginform").addEventListener("submit", login);

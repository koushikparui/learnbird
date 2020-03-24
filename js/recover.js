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

// Password recover function
function recover(e) {
    e.preventDefault();
    // console.log("Works");

    var auth = firebase.auth();

    // Dom elements
    var emailAddress = document.getElementById("email").value;
    const alertbox = document.getElementById("alertbox");

    // console.log(emailAddress);

    // Sending reset password link to email
    auth.sendPasswordResetEmail(emailAddress)
        .then(function() {
            // Email sent success
            alertbox.classList.add("alert-success");
            alertbox.innerHTML = "Check email for password reset link...";
            alertbox.style.display = "block";
            setTimeout(() => {
                alertbox.classList.remove("alert-success");
                alertbox.innerHTML = "";
                alertbox.style.display = "none";
                window.location.href = "/login.html";
            }, 3000);
        })
        .catch(function(error) {
            // error happened on sending reset email
            alertbox.classList.add("alert-danger");
            alertbox.innerHTML =
                "Couldn't send password reset link. " + error.message;
            alertbox.style.display = "block";
            setTimeout(() => {
                alertbox.classList.remove("alert-danger");
                alertbox.innerHTML = "";
                alertbox.style.display = "none";
            }, 6000);
        });
}

// Event listener
document.getElementById("recoverform").addEventListener("submit", recover);

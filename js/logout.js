// FIREBASE CONFIG COMING FROM CHECKEDLOGGEDIN.JS

// Check if user is logged in to display logout btn
firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
        logbtn.innerHTML = "Logout";
    } else {
        logbtn.style.display = "none";
    }
});

// Logout function
function logout(e) {
    firebase
        .auth()
        .signOut()
        .then(function() {
            window.location.href = "/";
        })
        .catch(function(error) {
            alert("Error logging out");
        });
}

// Dom element
const logbtn = document.getElementById("btn");

// Event listener
logbtn.addEventListener("click", logout);

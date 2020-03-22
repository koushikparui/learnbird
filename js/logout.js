firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
        logbtn.innerHTML = "Logout";
    } else {
        logbtn.style.display = "none";
    }
});

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

const logbtn = document.getElementById("btn");

logbtn.addEventListener("click", logout);

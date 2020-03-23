// Checking if user is logged in or not

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

firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
        // User is signed in.
        console.log(user);
    } else {
        // No user is signed in.
        window.location.href = "/login.html";
    }
});

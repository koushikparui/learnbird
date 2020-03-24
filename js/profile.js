// FIREBASE CONFIG COMING FROM CHECKEDLOGGEDIN.JS

// Setting database
var database = firebase.database();

// Update function
function update(e) {
    e.preventDefault();

    // Getting values from inputs
    const name = document.getElementById("name").value;
    const phone = document.getElementById("phone").value;
    const college = document.getElementById("college").value;
    const department = document.getElementById("department").value;
    const regyear = document.getElementById("regyear").value;
    const dob = document.getElementById("dob").value;

    // console.log(name, phone, college, department, regyear, dob);

    // Getting current user
    var user = firebase.auth().currentUser;

    // console.log(user.email);

    // Writing to database
    firebase
        .database()
        .ref("/users/" + user.uid)
        .set({
            email: user.email,
            name: name,
            phone: phone,
            college: college,
            department: department,
            regyear: regyear,
            dob: dob
        })
        .then(() => {
            // Written to db successfully
            alert("Profile updated successfully");
            // Redirecting to home pahe
            window.location.href = "/";
        })
        .catch(err => {
            // Error writing to db
            console.log(err);
            alert("Couldn't update profile");
        });
}

// Event listener
document.getElementById("updateform").addEventListener("submit", update);

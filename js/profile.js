var database = firebase.database();

function update(e) {
    e.preventDefault();
    const name = document.getElementById("name").value;
    const phone = document.getElementById("phone").value;
    const college = document.getElementById("college").value;
    const department = document.getElementById("department").value;
    const regyear = document.getElementById("regyear").value;
    const dob = document.getElementById("dob").value;

    console.log(name, phone, college, department, regyear, dob);
    var user = firebase.auth().currentUser;

    console.log(user.email);

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
            alertbox.classList.add("alert-success");
            alertbox.innerHTML = "Profile updated successfully";
            alertbox.style.display = "block";
            setTimeout(() => {
                alertbox.classList.remove("alert-success");
                alertbox.innerHTML = "";
                alertbox.style.display = "none";
            }, 3000);
        })
        .catch(err => {
            console.log(err);
            alertbox.classList.add("alert-danger");
            alertbox.innerHTML = "Couldn't update profile";
            alertbox.style.display = "block";
            setTimeout(() => {
                alertbox.classList.remove("alert-danger");
                alertbox.innerHTML = "";
                alertbox.style.display = "none";
            }, 3000);
        });
}

document.getElementById("updateform").addEventListener("submit", update);

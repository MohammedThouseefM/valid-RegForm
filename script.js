document.getElementById("form").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevents page refresh
});
let name = document.querySelector("#name");
let user = document.querySelector("#user");
let email = document.querySelector("#email");
let phone = document.querySelector("#phone");
let pass = document.querySelector("#pass");
let ConPass = document.querySelector("#ConPass");
let inputs = document.querySelectorAll(".input")
let gender = document.querySelector('input[name="gender"]:checked');
let check = document.querySelector("#che");

const process = () => {
    let nameval = name.value.trim();
    let userval = user.value.trim();
    let emailval = email.value.trim();
    let phoneval = phone.value.trim();
    let passval = pass.value.trim();
    let conpassval = ConPass.value.trim();
    let isvalid = true

    let namein = document.querySelector("#namevalue")
    let userin = document.querySelector("#uservalue")
    let emailin = document.querySelector("#emailvalue")
    let phonein = document.querySelector("#phonevalue")
    let passin = document.querySelector("#passvalue")
    let conpassin = document.querySelector("#conpassvalue")
    let genderin = document.querySelector("#gendervalue")
    let checkin = document.querySelector("#checkvalue")

    if (nameval === '') {
        name.style.borderColor = "#fa6666";
        namein.innerHTML = "Enter Name";
        isvalid = false;
    } else {
        namein.innerHTML = "";
        name.style.borderColor = "#ccc";
    }

    if (userval === '') {
        user.style.borderColor = "#fa6666";
        userin.innerHTML = "Enter user name";
        isvalid = false;
    } else {
        userin.innerHTML = "";
        user.style.borderColor = "#ccc";
    }

    if (emailval === '') {
        email.style.borderColor = "#fa6666";
        emailin.innerHTML = "Enter email";
        isvalid = false;
    } else {
        emailin.innerHTML = "";
        email.style.borderColor = "#ccc";
    }

    if (phoneval === '') {
        phone.style.borderColor = "#fa6666";
        phonein.innerHTML = "Enter phone number";
        isvalid = false;
    } else {
        phonein.innerHTML = "";
        phone.style.borderColor = "#ccc";
    }

    if (passval === '') {
        pass.style.borderColor = "#fa6666";
        passin.innerHTML = "Enter password";
        isvalid = false;
    } else {
        passin.innerHTML = "";
        pass.style.borderColor = "#ccc";
    }

    if (conpassval === '') {
        ConPass.style.borderColor = "#fa6666";
        conpassin.innerHTML = "Enter confirm password";
        isvalid = false;
    } else {
        conpassin.innerHTML = "";
        ConPass.style.borderColor = "#ccc";
    }

    if (passval !== conpassval) {
        ConPass.style.borderColor = "#fa6666";
        pass.style.borderColor = "#fa6666";
        conpassin.innerHTML = "Confirm password does not match";
        isvalid = false;
    }

    if (!check.checked) { 
        checkin.innerHTML = "Please accept the terms and conditions.";
        isvalid = false;
    } else {
        checkin.innerHTML = "";
    }



    if (isvalid) {
        setTimeout(() => {
            alert("Signup Successfully");
        }, 1000);
    }

}

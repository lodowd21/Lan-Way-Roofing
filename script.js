function start() {
    preloadImage('images/roof.jpg');

}

function showDiv() {
    document.getElementById('missionStatement').style.display = "block";
}

function preloadImage(url) {
    var img = new Image();
    img.src = url;
}


function showDiv2() {
    document.getElementById('contact').style.display = "block";
}

function sendEmail(){
    alert(`Test3!`);

    let name = document.forms["requestForm"]["name"].value;
    let email = document.forms["requestForm"]["email"].value;
    let address = document.forms["requestForm"]["address"].value;
    let city = document.forms["requestForm"]["city"].value;
    let state = document.forms["requestForm"]["state"].value;
    let zip = document.forms["requestForm"]["zip"].value;
    let phoneNum = document.forms["requestForm"]["phone_num"].value;
    let message = document.forms["requestForm"]["message"].value;

    var xhr = new XMLHttpRequest();
    var formData = JSON.stringify({"name": name, "email": email, "address": address, "city": city, "state": state, "zip": zip, "phoneNum": phoneNum, "message": message});
    xhr.withCredentials = false;
    xhr.open("POST", "https://lanway-logicapp1.azurewebsites.net:443/api/lanway-la-quote-email/triggers/manual/invoke?api-version=2020-05-01-preview&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=SHSUDdbpZdTXJxOWuhvB4CFWFvGW2cTKm6l15Nw5ZPg");
    //xhr.setRequestHeader('Access-Control-Allow-Origin','https://openweathermap.org/api');
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.send(formData);
    xhr.onload = () => {
        console.log(xhr.status)
        if (xhr.status === 200) {
            //console.log(JSON.parse(xhr.response));
            alert(`Quote requested successfully! ${xhr.status}  ${xhr.statusText}`);
        }
        else {
            console.log(`error ${xhr.status} ${xhr.statusText}`)
            alert(`Unexpected error. Please try again. ${xhr.status}  ${xhr.statusText} ld: ${formData} x: ${name}  y: ${address}`);
        }
    } 
    alert(`done!`);

}

function thankyouMessage() {
    let x = document.forms["requestForm"]["name"].value;
    let y = document.forms["requestForm"]["email"].value;
    let z = document.forms["requestForm"]["address"].value;

    if (x != "" && y != "" && z != "") {
        alert("Thank you, we will be in touch shortly!");
        return false;
    }

}

function getWeather() {
    var xhr = new XMLHttpRequest();
    xhr.withCredentials = false;
    xhr.open("GET", "https://api.openweathermap.org/data/2.5/weather?q=london&appid=f4c546f898560a59b0cd737648f02285");
    //xhr.setRequestHeader('Access-Control-Allow-Origin','https://openweathermap.org/api');
    xhr.send();
    xhr.onload = () => {
        console.log(xhr)
        if (xhr.status === 200) {
            console.log(JSON.parse(xhr.response));
            alert(`The weather api worked ${xhr.status}  ${xhr.statusText}`);
        } else {
            console.log(`error ${xhr.status} ${xhr.statusText}`)
            alert(`The weather api failed ${xhr.status}  ${xhr.statusText}`);

        }
    }
}

function getLogicApp() {
    var xhr = new XMLHttpRequest();
    xhr.withCredentials = false;
    xhr.open("GET", "https://lanway-logicapp1.azurewebsites.net:443/api/lanway-la-validate-user/triggers/manual/invoke?api-version=2020-05-01-preview&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=MfH_Rxu-2s_5OhuwaUKsZWxwUWRO2tdkzqMV7VPl5HY");
    //xhr.setRequestHeader('Access-Control-Allow-Origin','https://openweathermap.org/api');
    xhr.send();
    xhr.onload = () => {
        console.log(xhr)
        if (xhr.status === 200) {
            console.log(JSON.parse(xhr.response));
            alert(`The logic app api worked ${xhr.status}  ${xhr.statusText}`);
        } else {
            console.log(`error ${xhr.status} ${xhr.statusText}`)
            alert(`The logic app api failed ${xhr.status}  ${xhr.statusText}`);

        }
    }
}



function validateUser() {
    let x = document.forms["login"]["username"].value;
    let y = document.forms["login"]["password"].value;

    if (x == "") {
        alert("Username7 must be filled out");
        return false;
    }

    if (y == "") {
        alert("Password must be filled out");
        return false;
    }

    /* test validation
    if (x != "lodowd" || y != "hotdog"){
        alert("incorrect user or pass");
        return false;
    }
    */

    var xhr = new XMLHttpRequest();
    var loginData = JSON.stringify({"username": x, "pass": y});
    xhr.withCredentials = false;
    xhr.open("POST", "https://lanway-logicapp1.azurewebsites.net:443/api/lanway-la-admin-login/triggers/manual/invoke?api-version=2020-05-01-preview&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=9VrhMwMgkDGkcwhOQmI5UAkSFrT6pVbtB13P9NE42Yo");
    //xhr.setRequestHeader('Access-Control-Allow-Origin','https://openweathermap.org/api');
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.send(loginData);
    xhr.onload = () => {
        console.log(xhr)
        var isLoginSuccessful = JSON.parse(xhr.response)
        console.log(isLoginSuccessful.isValid)
        if (xhr.status === 200 && isLoginSuccessful.isValid === true) {
            console.log(JSON.parse(xhr.response));
            alert(`Successful login ${xhr.status}  ${xhr.statusText}`);
            window.location.href = "admin_functions.html";
        } else {
            console.log(`error ${xhr.status} ${xhr.statusText}`)
            alert(`Username or password incorrect ${xhr.status}  ${xhr.statusText} ld: ${loginData} x: ${x}  y: ${y}`);

        }
    }

}

function createNewUser(){
    let x = document.forms["newLogin"]["newUsername"].value;
    let y = document.forms["newLogin"]["newPassword"].value;
    let z = document.forms["newLogin"]["newPassword2"].value;

    if (x == "") {
        alert("Username7 must be filled out");
        return false;
    }

    if (y == "") {
        alert("Password must be filled out");
        return false;
    }

    if (z == "") {
        alert("Password confirmation must be filled out");
        return false;
    }

    if (y != z){
        alert("Passwords do not match.")
        return false;
    }

    if(y.length < 5){
        alert("Password too short")
        return false;
    }
    

    console.log(x);

    var xhr = new XMLHttpRequest();
    var loginData = JSON.stringify({"username": x, "pass": y});
    xhr.withCredentials = false;
    //xhr.open("GET", "https://api.openweathermap.org/data/2.5/weather?q=london&appid=f4c546f898560a59b0cd737648f02285");
    xhr.open("POST", "https://lanway-logicapp1.azurewebsites.net:443/api/lanway-la-createUser/triggers/manual/invoke?api-version=2020-05-01-preview&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=HlTKOFZEGlH-8oWyaroQmvGsDZ8byHZrRk_FvxnBe-A");
    //xhr.setRequestHeader('Access-Control-Allow-Origin','https://openweathermap.org/api');
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.send(loginData);
    //xhr.send();
    xhr.onload = () => {
        console.log(xhr)
        if (xhr.status === 200) {
            //console.log(JSON.parse(xhr.response));
            alert(`Account created successfully. ${xhr.status}  ${xhr.statusText}`);
            //window.location.href = "admin_functions.html";
        } else if(xhr.status === 409){
            alert(`Username already exists ${xhr.status}  ${xhr.statusText}`);
        }
        else {
            console.log(`error ${xhr.status} ${xhr.statusText}`)
            alert(`Failed to create account. Unexpected error occured. Try again ${xhr.status}  ${xhr.statusText} ld: ${loginData} x: ${x}  y: ${y}`);
        }
    }

}


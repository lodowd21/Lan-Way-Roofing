function start() {
    preloadImage('images/roof.jpg');

}

function show_div(id){
    document.getElementById(id).style.display = "block";
}

function hide_div(id){
    document.getElementById(id).style.display = "none";
}

function preloadImage(url) {
    var img = new Image();
    img.src = url;
}


function openModal(modal_ID) {

    var modal = document.getElementById(modal_ID);
    console.log(modal_ID);

    modal.style.display = "block";

    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
}

function sendEmail(){
    console.log(`in send email`);

    let first = document.forms["requestForm"]["first"].value;
    let last = document.forms["requestForm"]["last"].value;
    let email = document.forms["requestForm"]["email"].value;
    let address = document.forms["requestForm"]["address"].value;
    let phoneNum = document.forms["requestForm"]["phone_num"].value;
    let city = document.forms["requestForm"]["city"].value;
    let state = document.forms["requestForm"]["state"].value;
    let zip = document.forms["requestForm"]["zip"].value;
    let message = document.forms["requestForm"]["message"].value;

    var xhr = new XMLHttpRequest();
    var formData = JSON.stringify({"first": first, "last": last, "email": email, "phone_num": phoneNum, "address": address, "city": city, "state": state, "zip": zip, "message": message});
    xhr.withCredentials = false;
    xhr.open("POST", "https://lanway-logicapp1.azurewebsites.net:443/api/lanway-la-quote-email/triggers/manual/invoke?api-version=2020-05-01-preview&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=SHSUDdbpZdTXJxOWuhvB4CFWFvGW2cTKm6l15Nw5ZPg");
    //xhr.setRequestHeader('Access-Control-Allow-Origin','https://openweathermap.org/api');
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.send(formData);
    xhr.onload = () => {
        console.log(xhr.status)
        if (xhr.status === 200) {
            //console.log(xhr.response);
            //alert(`Quote requested successfully. We will be in touch shortly!`)
            console.log(`sent email!`);
        }
        else {
            console.log(`error ${xhr.status} ${xhr.statusText}`)
            alert(`Unexpected error. Please try again. ${xhr.status}`);
        }
    }
    console.log(`end send email`);

    alert(`Thank you for the request! We will be in touch shortly.`); 
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
        alert("Username must be filled out");
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
            hide_div('new-admin');
            //window.location.href = "admin_functions.html";
        } else if(xhr.status === 409){
            alert(`Username already exists. ${xhr.status}  ${xhr.statusText}`);
        }
        else {
            console.log(`error ${xhr.status} ${xhr.statusText}`)
            alert(`Failed to create account. Unexpected error occured. Try again ${xhr.status}  ${xhr.statusText} ld: ${loginData} x: ${x}  y: ${y}`);
        }
    }
   
}

function createNewEmployee(){
    let employeeID = document.forms["newEmployee"]["employee_ID"].value;
    let first = document.forms["newEmployee"]["employeeFirst"].value;
    let last = document.forms["newEmployee"]["employeeLast"].value;
    let position = document.forms["newEmployee"]["employeeJob"].value;
    let num = document.forms["newEmployee"]["employeeNum"].value;
    let address = document.forms["newEmployee"]["employeeAddress"].value;
    let city = document.forms["newEmployee"]["employeeCity"].value;
    let zip = document.forms["newEmployee"]["employeeZip"].value;
    let salary = document.forms["newEmployee"]["employeeSalary"].value;

    if (employeeID == "") {
        alert("Employee must have an ID.");
        return false;
    }

    if (first == "") {
        alert("First name must be filled out.");
        return false;
    }

    if (address == "") {
        alert("Address must be filled out.");
        return false;
    }

    if (salary == "") {
        alert("Pay must be filled out.");
        return false;
    }

    var xhr = new XMLHttpRequest();
    var employeeData = JSON.stringify({"employee_ID": employeeID, "first": first, "last": last, "job_description": position, "phone_num": num, "address": address, "city": city, "zip": zip, "salary_hourly_rate": salary});
    xhr.withCredentials = false;
    xhr.open("POST", "https://lanway-logicapp1.azurewebsites.net:443/api/lanway-la-createEmployee/triggers/manual/invoke?api-version=2020-05-01-preview&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=5kIcp2zjga_q7j9GyVIAYYI7EYhMIKw1bG18kdCHOWM");
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.send(employeeData);
    xhr.onload = () => {
        console.log(xhr)
        if (xhr.status === 200) {
            //console.log(JSON.parse(xhr.response));
            alert(`Employee created successfully! ${xhr.status}  ${xhr.statusText}`);
            hide_div('newAdminModal');
        } else if (xhr.status === 409){
            alert(`That ID already exists. Please enter a new one.`);
        }
        else {
            console.log(`error ${xhr.status} ${xhr.statusText}`)
            alert(`Unexpected error. Please try again. ${xhr.status}  ${xhr.statusText} ld: ${employeeData}`);
        }
    }
}

function getEmployee() {

    let employeeID = document.forms["get_employee_data"]["employeeID"].value;

    var xhr = new XMLHttpRequest();
    var employeeData = JSON.stringify({"employee_ID": employeeID});
    console.log(`employeeID ${employeeData}`)
    xhr.withCredentials = false;
    xhr.open("POST", "https://lanway-logicapp1.azurewebsites.net:443/api/lanway-la-getEmployeeInfo/triggers/manual/invoke?api-version=2020-05-01-preview&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=pj1Q--Jl7lJHYLEh6pdW_CrFZp1ox7IgiDirKUoSyfw");
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.send(employeeData);
    xhr.onload = () => {
        //console.log(xhr)
 
        if (xhr.status === 200) {
            console.log(JSON.parse(xhr.response));
            document.forms['get_employee_data'].first.value = JSON.parse(xhr.response).first;
            document.forms['get_employee_data'].last.value = JSON.parse(xhr.response).last;
            document.forms['get_employee_data'].job_descr.value = JSON.parse(xhr.response).job_description;
            document.forms['get_employee_data'].phone.value = JSON.parse(xhr.response).phone_num;
            document.forms['get_employee_data'].address.value = JSON.parse(xhr.response).address;
            document.forms['get_employee_data'].city.value = JSON.parse(xhr.response).city;
            document.forms['get_employee_data'].zip.value = JSON.parse(xhr.response).zip;
            document.forms['get_employee_data'].salary.value = JSON.parse(xhr.response).salary_hourly_rate;
        } else if (xhr.status === 404){
            alert(`ID not found. Please enter a valid ID. Error code: ${xhr.status}`);
        } else {
            console.log(`error ${xhr.status}`)
            alert(`An unexpected error has occured. Error code: ${xhr.status}`);

        }
    }
}


function getContactCard(){

    var xhr = new XMLHttpRequest();
    xhr.withCredentials = false;
    xhr.open("POST", "https://lanway-logicapp1.azurewebsites.net:443/api/lanway-la-get-contact-card/triggers/manual/invoke?api-version=2020-05-01-preview&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=w8ca5DCfcUgZh7NMRHVXcDnrRM6UHBadDHPhuzf8atk");
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.send();
    xhr.onload = () => {
        //console.log(xhr)
        if (xhr.status === 200) {
            console.log(JSON.parse(xhr.response));
            document.forms['new_info'].address.value = JSON.parse(xhr.response).address;
            document.forms['new_info'].po_box.value = JSON.parse(xhr.response).po_box;
            document.forms['new_info'].phone_num.value = JSON.parse(xhr.response).phone_num;
            document.forms['new_info'].fax_num.value = JSON.parse(xhr.response).fax_num;
            document.forms['new_info'].email.value = JSON.parse(xhr.response).email;
        } else {
            console.log(`error ${xhr.status}`)
            alert(`An unexpected error has occured. ${xhr.status}`);

        }
    }
}


function updateContactCard(){

    let address = document.forms["new_info"]["address"].value;
    let pobox = document.forms["new_info"]["po_box"].value;
    let phone = document.forms["new_info"]["phone_num"].value;
    let fax = document.forms["new_info"]["fax_num"].value;
    let email = document.forms["new_info"]["email"].value;

    var xhr = new XMLHttpRequest();
    var contactCard = JSON.stringify({"address": address, "po_box": pobox, "phone_num": phone, "fax_num": fax, "email": email});
    xhr.withCredentials = false;
    xhr.open("POST", "https://lanway-logicapp1.azurewebsites.net:443/api/lanway-la-update-contact-card/triggers/manual/invoke?api-version=2020-05-01-preview&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=MtldJmT6aoNSq3tPB8feFRWsnFy8LcXdB2gMz5tkLvM");
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.send(contactCard);
    xhr.onload = () => {
        //console.log(xhr)
        if (xhr.status === 200) {
            console.log(xhr.response);
            alert(`Successfully Updated! ${xhr.status}`);
            hide_div('changeModal');
        } else {
            console.log(`error ${xhr.status}`)
            alert(`An unexpected error has occured. ${xhr.status}`);
        }
    }
}

function updateEmployeeInfo(){

    let employeeID = document.forms["get_employee_data"]["employeeID"].value;
    let first = document.forms["get_employee_data"]["first"].value;
    let last = document.forms["get_employee_data"]["last"].value;
    let position = document.forms["get_employee_data"]["job_descr"].value;
    let num = document.forms["get_employee_data"]["phone"].value;
    let address = document.forms["get_employee_data"]["address"].value;
    let city = document.forms["get_employee_data"]["city"].value;
    let zip = document.forms["get_employee_data"]["zip"].value;
    let salary = document.forms["get_employee_data"]["salary"].value;

    if (employeeID == "") {
        alert("Employee must have an ID.");
        return false;
    }

    if (first == "") {
        alert("First name must be filled out.");
        return false;
    }

    if (address == "") {
        alert("Address must be filled out.");
        return false;
    }

    if (salary == "") {
        alert("Pay must be filled out.");
        return false;
    }

    var xhr = new XMLHttpRequest();
    var employeeData = JSON.stringify({"employee_ID": employeeID, "first": first, "last": last, "job_description": position, "phone_num": num, "address": address, "city": city, "zip": zip, "salary_hourly_rate": salary});
    xhr.withCredentials = false;
    xhr.open("POST", "https://lanway-logicapp1.azurewebsites.net:443/api/lanway-la-update-employee/triggers/manual/invoke?api-version=2020-05-01-preview&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=TLvHfMnAoGhEWbHHacHkmDvc-l0K2XHc5K_9EVRLy6g");
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.send(employeeData);
    xhr.onload = () => {
        //console.log(xhr)
        if (xhr.status === 200) {
            console.log(xhr.response);
            alert(`Employee information updated.`);
            hide_div('getEmployeeData');
        } else {
            console.log(`error ${xhr.status}`)
            alert(`An unexpected error has occured. Error code: ${xhr.status}`);
        }
    }
}

function deleteEmployee(){

    let employee_ID = document.forms["delete"]["employee_ID"].value;

    var xhr = new XMLHttpRequest();
    var employeeID = JSON.stringify({"employee_ID": employee_ID});
    xhr.withCredentials = false;
    xhr.open("POST", "https://lanway-logicapp1.azurewebsites.net:443/api/lanway-la-delete-employee/triggers/manual/invoke?api-version=2020-05-01-preview&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=C5JqWmJMoaupoPhPWTfQ0rjYOYTWqf0r0x-VIPNf6j4");
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.send(employeeID);
    xhr.onload = () => {
        //console.log(xhr)
        if (xhr.status === 200) {
            console.log(xhr.response);
            alert(`Employee deleted successfully. ${xhr.status}`);
            hide_div('deleteModal');
        } else {
            console.log(`error ${xhr.status}`)
            alert(`An unexpected error has occured. ${xhr.status}`);
        }
    }
}


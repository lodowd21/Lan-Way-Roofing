function start(){
    preloadImage('images/roof.jpg');
}

function showDiv() {
    document.getElementById('missionStatement').style.display = "block";
 }

 function preloadImage(url) {
     var img=new Image();
     img.src=url;
 }
 

function showDiv2() {
    document.getElementById('contact').style.display = "block";
 }


 function thankyouMessage(){
    let x = document.forms["requestForm"]["name"].value;
    let y = document.forms["requestForm"]["email"].value;
    let z = document.forms["requestForm"]["address"].value;

    if (x != "" && y != "" && z != "") {
        alert("Thank you, we will be in touch shortly!");
        return false;
      }

 }

 function getWeather(){
    var xhr = new XMLHttpRequest();
    xhr.withCredentials = false;
    xhr.open("GET", "https://api.openweathermap.org/data/2.5/weather?q=london&appid=f4c546f898560a59b0cd737648f02285");
    //xhr.setRequestHeader('Access-Control-Allow-Origin','https://openweathermap.org/api');
    xhr.send();
    xhr.onload = () => {
        console.log(xhr)
        if(xhr.status === 200){
            console.log(JSON.parse(xhr.response));
            alert(`The weather api worked ${xhr.status}  ${xhr.statusText}`);
                } else {
            console.log(`error ${xhr.status} ${xhr.statusText}`)
            alert(`The weather api failed ${xhr.status}  ${xhr.statusText}`);

        }
     }
 }

function validateUser() {
    let x = document.forms["login"]["username"].value;
    let y = document.forms["login"]["password"].value;

    if (x == "") {
        alert("Username must be filled out");
        return false;
    }

    if (y == "") {
        alert("Password must be filled out");
        return false;
    }

    if (x != "lodowd" || y != "hotdog"){
        alert("incorrect user or pass");
        return false;
    }


    var xhr = new XMLHttpRequest();
    xhr.withCredentials = false;
    xhr.open("GET", "https://api.openweathermap.org/data/2.5/weather?q=london&appid=f4c546f898560a59b0cd737648f02285");
    //xhr.setRequestHeader('Access-Control-Allow-Origin','https://openweathermap.org/api');
    xhr.send();
    xhr.onload = () => {
        console.log(xhr)
        if(xhr.status === 200){
            console.log(JSON.parse(xhr.response));
            alert(`Successful login ${xhr.status}  ${xhr.statusText}`);
            window.location.href="index.html";
                } else {
            console.log(`error ${xhr.status} ${xhr.statusText}`)
            alert(`Username or password incorrect ${xhr.status}  ${xhr.statusText}`);

        }
     }

}
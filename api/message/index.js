module.exports = async function (context, req) {
    //const { Connection, Request } = require("tedious");
    /*
    function getWeather2(){
        console.log("hi getWeather2")
        var xhr = new XMLHttpRequest();
        xhr.withCredentials = false;
        xhr.open("GET", "https://api.openweathermap.org/data/2.5/weather?q=london&appid=f4c546f898560a59b0cd737648f02285");
        //xhr.setRequestHeader('Access-Control-Allow-Origin','https://openweathermap.org/api');
        xhr.send();
        xhr.onload = () => {
            console.log(xhr)
            if(xhr.status === 200){
                console.log(JSON.parse(xhr.response));
                //alert(`The weather api worked ${xhr.status}  ${xhr.statusText}`);
                    } else {
                console.log(`error ${xhr.status} ${xhr.statusText}`)
                //alert(`The weather api failed ${xhr.status}  ${xhr.statusText}`);
    
            }
         }
     }
*/

    let x = 1;
    let y = 2;
    console.log("in app/message 1")
    //getWeather2();
    const xhr = new XMLHttpRequest();
    const url = new URL("https://www.geeksforgeeks.org");   // Using toString() method 
    console.log(url.toString());

    console.log("hi getWeather2")
    context.res.json({
        text: "Hello from the API 9 " + (x+y)
    });

};
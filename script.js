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

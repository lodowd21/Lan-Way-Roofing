
function showDiv() {
    document.getElementById('missionStatement').style.display = "block";
 }

 function preloadImage(url) {
     var img=new Image();
     img.src=url;
 }

 function slideShow(){
     var i = 0;
     var images = [];
     var time = 3000;

     //images
     images[0] = 'images/wayneeidson.jpg';
     images[1] = 'images/image2.jpg'

     document.slide.src = images[i];

     if(i < images.length - 1){
         i++;
     } else {
         i = 0;
     }

     setTimeout( slideShow(), time);

 }
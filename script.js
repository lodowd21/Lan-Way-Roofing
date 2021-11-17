function start(){
    preloadImage('images/roof.jpg');
    slideShow();
}

function showDiv() {
    document.getElementById('missionStatement').style.display = "block";
 }

 function preloadImage(url) {
     var img=new Image();
     img.src=url;
 }

 function slideShow(){

    var indexValue = 0;
            function slideShow(){
              setTimeout(slideShow, 4000);
              var x;
              const img = document.querySelectorAll("img");
              for(x = 0; x < img.length; x++){
                img[x].style.display = "none";
              }
              indexValue++;
              if(indexValue > img.length){indexValue = 1}
              img[indexValue -1].style.display = "block";
            }
            slideShow();

 }
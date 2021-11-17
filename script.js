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

    var pic = document.getElementById('aboutus__slideshow');
	
	var img = pic.style.backgroundImage; 
	
	if( img == "" ){
		pic.style.backgroundImage = 'url("image2.jpg")';
	}else if(img == 'url("image2.jpg")' ) {
	pic.style.backgroundImage = 'url("nrca.png")';
	}else if(img == 'url("nrca.png")' ) {
	pic.style.backgroundImage = 'url("wayneeidson.jpg")';
	}else if(img == 'url("wayneeidson.jpg")' ) {
	pic.style.backgroundImage = 'url("image2.jpg")';
	}
	
	setTimeout(function(){
		slideShow();
	}, 1000);

 }
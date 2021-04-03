$(document).ready(function() {





$( "header, .hometop, .cycle-slideshow div" ).fadeIn( 500 );           
            	
	
$().UItoTop({ easingType: 'easeOutQuart' });	


	
			












});










var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight){
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  });
}


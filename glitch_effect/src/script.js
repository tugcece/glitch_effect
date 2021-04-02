const color = document.querySelector(".glitch");
var x = document.getElementsByTagName("BODY")[0];
color.addEventListener("click",change);

function change(){ 
 color.style.color="red"; 
 x.style.transitionDuration="15sn";  x.style.backgroundImage="url('https://i.hizliresim.com/K6Sux5.png')";
} 



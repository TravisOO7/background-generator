var colour1 = document.querySelector(".color1");
var colour2 = document.querySelector(".color2");
var head3 = document.querySelector("h3");
var body = document.querySelector("#gradient");
var button = document.querySelector("button");

window.addEventListener("load",setGradient);

function setGradient(){
	body.style.background = "linear-gradient(to right, " + colour1.value + "," + colour2.value + ")" 
	head3.textContent = body.style.background + ";";
 }

  function randomColor(colour1,colour2){
	colour1.value = "#"+((1<<24)*Math.random()|0).toString(16);
	colour2.value = "#"+((1<<24)*Math.random()|0).toString(16);
	setGradient();
}

button.addEventListener("click",randomColor);


colour1.addEventListener("input",setGradient);

colour2.addEventListener("input",setGradient);


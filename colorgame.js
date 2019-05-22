var numsquares = 6;
//var colors = generaterandomcolors(numsquares);
var colors = [];
var pickedcolor;
var squares = document.querySelectorAll(".square");
//var pickedcolor = pickcolor();
var colordisplay = document.getElementById("colordisplay");
var messagedisplay = document.getElementById("message");
var h1 = document.querySelector("h1");
var resetbutton = document.querySelector("#reset");
var modebuttons = document.querySelectorAll(".mode");
/*var easybtn = document.querySelector("#easybt")
var hardbtn = document.querySelector("#hardbt")*/
init();
function init(){
	setupmodebuttons();
	setupsquares();
	reset();
}

function setupmodebuttons(){
	for (var i = 0; i < modebuttons.length; i++) {
		modebuttons[i].addEventListener("click", function(){
		modebuttons[0].classList.remove("selected");
		modebuttons[1].classList.remove("selected");
		this.classList.add("selected");
		this.textContent === "Easy" ? numsquares = 3: numsquares = 6;	
		/*if(this.textContent === "Easy"){
			numsquares = 3;
		}else{
			numsquares = 6;
		}*/
		reset();
		});
	}
}

function setupsquares(){
for (var i = 0; i < squares.length; i++){
		//add initial colors to squares
		squares[i].style.backgroundColor = colors[i];
		//add click listeners to squares
		squares[i].addEventListener("click", function(){
			//grap color of clicked square
			var clickedcolor = this.style.backgroundColor;
			//compare to picked color
			if(clickedcolor === pickedcolor){
				messagedisplay.textContent = "Correct!";
				resetbutton.textContent = "Play Again?";
				changecolors(clickedcolor);
				h1.style.backgroundColor = clickedcolor;
			}else{
				this.style.backgroundColor = "#232323";
				messagedisplay.textContent = "Try Again!";
			}
		});
	}
}

function reset(){
	colors = generaterandomcolors(numsquares);
pickedcolor = pickcolor();
colordisplay.textContent = pickedcolor;
messagedisplay.textContent = "";
resetbutton.textContent = "New Colors";
for (var i = 0; i < squares.length; i++) {
	if(colors[i]){
		squares[i].style.display = "block";
		squares[i].style.backgroundColor = colors[i];	
	}else{
		squares[i].style.display = "none";
	}
}
h1.style.backgroundColor = "steelblue";
}
/*easybtn.addEventListener("click", function(){
hardbtn.classList.remove("selected");
easybtn.classList.add("selected");
numsquares = 3;
colors = generaterandomcolors(numsquares);
pickedcolor = pickcolor();
colordisplay.textContent = pickedcolor;
for (var i = 0; i < squares.length; i++) {
	if(colors[i]){
		squares[i].style.backgroundColor = colors[i];
	}else{
		squares[i].style.display = "none";
	}
}
});

hardbtn.addEventListener("click", function(){
hardbtn.classList.add("selected");
easybtn.classList.remove("selected");
numsquares = 6;
colors = generaterandomcolors(numsquares);
pickedcolor = pickcolor();
colordisplay.textContent = pickedcolor;
for (var i = 0; i < squares.length; i++) {
		squares[i].style.backgroundColor = colors[i];
		squares[i].style.display = "block";
}
});
*/
resetbutton.addEventListener("click", function(){
reset();
/*colors = generaterandomcolors(numsquares);
pickedcolor = pickcolor();
colordisplay.textContent = pickedcolor;
messagedisplay.textContent = "";
this.textContent = "New Colors";
for (var i = 0; i < squares.length; i++) {
	squares[i].style.backgroundColor = colors[i];
}
h1.style.backgroundColor = "steelblue";*/
});

function changecolors(color){
	//loop through all squares
	for (var i = 0; i < squares.length; i++) {
	//change each color to match given color
	squares[i].style.backgroundColor = color;
	}
}
// random the rgb color in the picked color in the array
function pickcolor(){
	var random = Math.floor(Math.random()*colors.length);
	return colors[random];
}

//generate random colors for the squares
function generaterandomcolors(num){
//make an array
var arr = [];
//add num random colors to array
for (var i = 0; i < num; i++) {
	//get random colors and push it in the array
arr.push(randomcolors())
}
//return that array
return arr;
}

//get random colors
function randomcolors(){
//pick a red from 0 - 255
var r = Math.floor(Math.random()*256);
//pick a green from 0 - 255
var g = Math.floor(Math.random()*256);
//pick a blue from 0 - 255
var b = Math.floor(Math.random()*256);
return "rgb("+r+", " +g+", " +b+")";
}
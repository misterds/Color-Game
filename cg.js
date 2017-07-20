
// ------------------------------------------------------
// declaring  variables
var numberSquar = 6;
var colors=[];
var pickedColor;
var colors = generateRandomColor(numberSquar);
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
colorDisplay.textContent = pickedColor;
var messageAnsewr = document.querySelector("#messageAnsewr");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#resetB");
var modeBottons =document.querySelectorAll(".mode");

init();

// ------------------------------------------------------
function init(){
	setupButtons();
	setupSquesrs();
    reset();
}

// ------------------------------------------------------
//  function to setup Buttons
 function setupButtons(){
 	for(var i= 0 ; i<modeBottons.length; i++){
	modeBottons[i].addEventListener("click", function(){
		modeBottons[0].classList.remove("selected");
		modeBottons[1].classList.remove("selected");
		this.classList.add("selected");
		this.textContent === "Easy" ?  numberSquar = 3: numberSquar = 6;
		reset();
	});
  } 
}
// ------------------------------------------------------
// function to setup Squasre
   function setupSquesrs(){
   	for (var i = 0; i < squares.length; i++) {
    // add clisk lisnter to squear
    squares[i].addEventListener("click", function() {
    	 var cC=this.style.background;
        //  compare color of cliked
        if (cC === pickedColor) {
            messageAnsewr.textContent = "Correct";
            resetButton.textContent = "Play again?";
            changeColor(cC);
            h1.style.background = cC;
        } 
        else {
            this.style.background = "#232323";
            messageAnsewr.textContent = "Try again ";
        }
    });
  }
 }

// ------------------------------------------------------
// Buttons easy and hard

 function reset(){
 	 // generate al new color    
    colors = generateRandomColor(numberSquar);
    // change clorDisplay  to match picked COlor
    pickedColor = pickColor();
    resetButton.textContent="New colors";
    messageAnsewr.textContent= "";
    // change colors of sqaure 
    for (var i = 0; i < squares.length; i++) {
    	if(colors[i]){
    		squares[i].style.display = "block";
    		 squares[i].style.background = colors[i];
    	}else{

    		squares[i].style.display = "none";
    	}
       
    }
    // changeging  the  bacgroun  after  reset the  game 
    h1.style.background = "steelblue";
 }

// ------------------------------------------------------

// reset Button 
resetButton.addEventListener("click", function() {
  reset();
});

// ------------------------------------------------------

//  function that is changing  the colors in the square 
function changeColor(color) {
    // loop to all the square
    for (var i = 0; i < squares.length; i++) {

        // change  each color to math givine color
        squares[i].style.background = color;
    }
}

// ------------------------------------------------------
//  function that  is  picking  colors 
function pickColor() {
    var randomColor = Math.floor(Math.random() * colors.length);
    return colors[randomColor];
}
// ------------------------------------------------------
//  function  genertate  random color
function generateRandomColor(num) {
    // make array
    var arr = [];
    // reapet num  times
    for (var i = 0; i < num; i++) {
    // get random callor
        arr.push(randomColor());
    }
    // return array
    return arr;
}
// ------------------------------------------------------
// function  for  creating    colors 
function randomColor() {
    //  pick  a " red" from 0-255
    var r = Math.floor(Math.random() * 256);
    //  pick  a " green" from 0-255
    var g = Math.floor(Math.random() * 256);
    //  pick  a " blue" from 0-255
    var b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g + ", " + b + ")";
}
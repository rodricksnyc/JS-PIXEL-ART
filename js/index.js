let myCanvas = document.getElementById("canvas");
let myBrush = document.getElementById("brush");
let myButton = document.getElementById("set-color");
let myTextInput = document.getElementById("color-field");
let myForm = document.getElementById("form");
// let isMouseDown = false;


myButton.addEventListener("click", function(event) {
  event.preventDefault();
  console.log(myTextInput.value);
  myBrush.style.backgroundColor = myTextInput.value;

});


/*

Step 1: Building the canvas
Our canvas is 500px by 500px and we need to fill it with cells (wich a class of .square) that are 10px by 10px.

First, add however many divs with a class of "square" as you need to to fill our the #canvas element.

If #canvas is 500 x 500, how many 10 x 10 squares can we fit in to it?

How we we create elements in JavaScript and add them to the page?

*/


function addElement () {
  let element = document.createElement("div");
    element.className = "square";
    element.addEventListener("mouseenter", function(event) {
      event.target.style.backgroundColor = myTextInput.value;
    });
    // element.addEventListener("mouseleave", function(event){
    //   if (!isMouseDown) {
    //     event.target.style.backgroundColor = "#E7E5DB";
    //   }
    // });
    myCanvas.appendChild(element);
}

function createCanvas () {
  for (i = 0; i < 10000; i++) {
    addElement();
  }
}

createCanvas();

// window.addEventListener("mousedown", function(event){
//   isMouseDown = true;
// });
// window.addEventListener("mouseup", function(event){
//   isMouseDown = false;
// });

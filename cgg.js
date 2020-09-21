


var colors = generateRandomColors(6);


var squares = document.querySelectorAll(".square");
var pickedColor = pickColor()
var colorDisplay = document.querySelector("#colorDisplay");
colorDisplay.textContent = pickedColor;
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var newColors = document.querySelector("button");
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");


easyBtn.addEventListener("click", function(){
    easyBtn.classList.add("selected")
    hardBtn.classList.remove("selected")
    colors = generateRandomColors(3);
    pickedColor= pickColor()
    colorDisplay.textContent = pickedColor;
    for (var i = 0 ; i < squares.length ; i++){
        if(colors[i]){
            squares[i].style.backgroundColor = colors[i]
        }
        else{
            squares[i].style.display = "none";
        }
    }
})


hardBtn.addEventListener("click", function(){
    easyBtn.classList.remove("selected")
    hardBtn.classList.add("selected")

    colors = generateRandomColors(6);
    pickedColor= pickColor()
    colorDisplay.textContent = pickedColor;
    for (var i = 0 ; i < squares.length ; i++){
        squares[i].style.backgroundColor = colors[i];
        squares[i].style.display = "block";
    }
    
})

for (var i = 0 ; i < squares.length ; i++){
    //add initial colors
    squares[i].style.backgroundColor = colors[i];

    //add click listeners to squares
    squares[i].addEventListener("click", function(){
        //grab color of clicked square
        var clickedColor = this.style.backgroundColor;
        //compare color to picked color
        console.log(clickedColor, pickedColor)
        if(clickedColor === pickedColor){
            messageDisplay.textContent = "Correct!";
            changeColors(clickedColor);
            h1.style.background = clickedColor;
            newColors.textContent= "play again";
        }
        else{
            this.style.backgroundColor= "#232323"
            messageDisplay.textContent = "Try again!"
        }
    });
}


function changeColors(color){
    //loop through all squares
    for (var i = 0 ; i < squares.length ; i++){
    //change each square color to match the given color
    squares[i].style.background = color;
    }

    
    
}


function pickColor(){
    //pick a random color
   var random = Math.floor(Math.random() * colors.length)
   return colors[random]
}

function generateRandomColors(num){
    ///make an array
    var arr = []
    //add num random colors to the array
    for (var i = 0 ; i < num; i++ ){
        //get random color and push into array
        arr.push(randomColor())

    }
    //return that array
    return arr
}

function randomColor(){
    //pick a red from 0 to 255
    var r = Math.floor(Math.random() * 256)
    //pick a green from 0 to 255
    var g = Math.floor(Math.random() * 256)
    //pick a blue from 0 to 255
    var b = Math.floor(Math.random() * 256)

    return "rgb(" + r + ", " + g + ", " + b + ")"
    
}

newColors.addEventListener("click", function(){
    //generate all new colors
    colors = generateRandomColors(6);
    //pick a new random color from array
    pickedColor = pickColor();
    //change color display to match picked color
    colorDisplay.textContent = pickedColor;
    //change color of squares
    for (var i = 0 ; i < squares.length ; i++){
        
        squares[i].style.backgroundColor = colors[i];
    }
    // change the h1 color back to black
    h1.style.backgroundColor = "#232323";

    
})


// alert("CONNECTED!");
var numSquare = 6;
var colors = generateColors(numSquare);

var squares = document.querySelectorAll(".boxes");
var pickedColor = selectColor();
document.querySelector('.rgbTitle').innerHTML = pickedColor;
var mes = document.querySelector('.message');
var h1 = document.querySelector("h1");
for(var i = 0; i< squares.length; i++) {
    squares[i].style.backgroundColor = colors[i];
    squares[i].addEventListener("click", function(){
        var clickedColor = this.style.backgroundColor;
        if(clickedColor === pickedColor) {
            mes.textContent = "correct!";
            changeColor(clickedColor);
            h1.style.backgroundColor = pickedColor;
        }else {
            this.style.backgroundColor = "#808080";
            
            mes.textContent = "try again!";
        }
    });
}

var newColor = document.querySelector("button");
newColor.addEventListener("click", function(){
    colors = generateColors(numSquare);
    pickedColor = selectColor();
    document.querySelector('.rgbTitle').innerHTML = pickedColor;
    for(var i = 0; i< squares.length; i++) {
        squares[i].style.backgroundColor = colors[i];
        squares[i].addEventListener("click", function(){
            var clickedColor = this.style.backgroundColor;
            if(clickedColor === pickedColor) {
                mes.textContent = "correct!";
                changeColor(clickedColor);
                h1.style.backgroundColor = pickedColor;
            }else {
                this.style.backgroundColor = "#808080";
                
                mes.textContent = "try again!";
            }
        });
    }
    h1.style.backgroundColor = "steelblue";
});


var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");
easyBtn.addEventListener("click", function(){
    easyBtn.classList.add("selected");
    hardBtn.classList.remove("selected");
    numSquare = 3;
    colors = generateColors(numSquare);
    pickedColor = selectColor();
    document.querySelector('.rgbTitle').innerHTML = pickedColor;
    for(var i = 0; i< squares.length; i++) {
        if(colors[i])
            squares[i].style.backgroundColor = colors[i];
        else
            squares[i].style.display = "none";
    }
});
hardBtn.addEventListener("click", function(){
    hardBtn.classList.add("selected");
    easyBtn.classList.remove("selected");
    numSquare = 3;
    colors = generateColors(numSquare);
    pickedColor = selectColor();
    document.querySelector('.rgbTitle').innerHTML = pickedColor;
    for(var i = 0; i< squares.length; i++) {
        squares[i].style.backgroundColor = colors[i];
        squares[i].style.display = "block";
    }
});

function changeColor(color) {
    for(var i = 0; i< squares.length; i++) {
        squares[i].style.backgroundColor = color;
    }
}

function selectColor() {
    var num = Math.floor(Math.random() * colors.length);
    return colors[num];
}

function generateColors(num) {
    var arr = [];
    for(var i = 0; i<num; i++) {
        arr.push(randomColor());
    }
    return arr;
}

function randomColor() {
    var r = Math.floor(Math.random()*255);
    var g = Math.floor(Math.random()*255);
    var b = Math.floor(Math.random()*255);
    return "rgb(" + r +", " + g + ", " + b + ")";

}
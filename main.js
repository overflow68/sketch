const canvas = document.getElementById("canvas");
const btnHolder = document.getElementById("btnHolder");


const size16x = document.createElement("button");
size16x.setAttribute("id","16");
size16x.setAttribute("class","pickSize");
btnHolder.appendChild(size16x);
size16x.textContent = "16 X 16";

const size32x = document.createElement("button");
size32x.setAttribute("id","32");
size32x.setAttribute("class","pickSize");
btnHolder.appendChild(size32x);
size32x.textContent = "32 X 32";

const size64x = document.createElement("button");
size64x.setAttribute("id","64");
size64x.setAttribute("class","pickSize");
btnHolder.appendChild(size64x);
size64x.textContent = "64 X 64";

function addSquares(size){

    let squareSpace = 1024/size; 
canvas.style.gridTemplateColumns = `repeat(${size},${squareSpace}px)`;
canvas.style.gridTemplateRows = `repeat(${size},${squareSpace}px)`;
    let canvasSize = size * size;
    i = 0;

    for(i;i<canvasSize;i++){
        let newDiv = document.createElement("div");
        newDiv.classList.add("square");
        newDiv.setAttribute("id",i)
        canvas.appendChild(newDiv);

    }

}
addSquares(64);
const squares = document.querySelectorAll(".square");
squares.forEach((square)=>{
    square.addEventListener("mouseover",()=>{
        square.setAttribute("class","blackSquare");



 
    })

});
const canvas = document.getElementById("canvas");
const btnHolder = document.getElementById("btnHolder");
let squares ="";
addSquares(64);

const changeSize = document.createElement("button");
changeSize.textContent = "Change size";
btnHolder.appendChild(changeSize);

changeSize.addEventListener("click",()=>{
    newSize = prompt("Select new canvas size.");
    if (newSize < 0 || newSize > 100 || newSize === ""){
        alert("Max Size is 100 x 100, and you can't input a negative number. ");
    }
    else{
    canvas.innerHTML = '';
    
    addSquares(newSize);
    }});

const eraseBtn = document.createElement("button");
eraseBtn.textContent = "Erase";
btnHolder.appendChild(eraseBtn);

eraseBtn.addEventListener("click",erase);


function erase(){
    squares.forEach((square)=>{
        square.classList.remove("blackSquare");

    });
};

function draw(){
    squares.forEach((square)=>{
        square.addEventListener("mouseover",()=>{
            if (square.className !="square blackSquare"){
                square.className +=" blackSquare";
            }
            
    })});
};

function addSquares(size){

    let squareSpace = 600/size; 
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
    squares = updateSquares();
    draw();

};

function updateSquares(){
    const squares = document.querySelectorAll(".square");
    return squares;
};


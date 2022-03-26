var lastSize = 0;
var scaleIncriment = 255;
// Create 16*16 grid
const cdiv = document.querySelector('.canvas');
for(i = 0; i < 256; i++){
    const div = document.createElement('div');
    div.classList.add('box');
    div.style.width = '37.5px';
    div.style.height = '37.5px';
    lastSize = 16;
    cdiv.appendChild(div);
}
fillbox();
// Get input
function getInput() {
    const squares = document.getElementById("input").value;
    if(squares >= 2 && squares <= 100){
        createGrid(squares);
    }
    
}
// Create custom grid
function createGrid(squares) {
    const cdiv = document.querySelector('.canvas');
    removeNodes(cdiv);
    for(i = 0; i < (squares*squares); i++){
        const div = document.createElement('div');
        div.classList.add('box');
        lastSize = squares;
        const dim = 600/squares;
        div.style.width = dim + 'px';
        div.style.height = dim + 'px';
        cdiv.appendChild(div);
    }
    
}

function removeNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

function fillbox (){
    const box = document.querySelectorAll('.box');

    box.forEach(div => {div.addEventListener('mouseover', () =>{
        div.style.opacity = 1;
        div.style.backgroundColor = 'black';
    })})

}

function clearBoxes() {
    createGrid(lastSize);
}

function rgb() {

    const box = document.querySelectorAll('.box');
    box.forEach(div => {div.addEventListener('mouseover', () =>{
        div.style.opacity = 1;
        var r = Math.floor(Math.random() * (255 - 0 + 1) + 0);
        var g = Math.floor(Math.random() * (255 - 0 + 1) + 0);
        var b = Math.floor(Math.random() * (255 - 0 + 1) + 0);

        var rgbString = r + ", " + g + ", " + b;
        div.style.backgroundColor = 'rgb(' + rgbString + ')';
    })})
}

function gray() {
    const box = document.querySelectorAll('.box');
    box.forEach(div => { div.addEventListener('mouseover', () => {
        div.style.backgroundColor = 'darkgray';
    })});
}


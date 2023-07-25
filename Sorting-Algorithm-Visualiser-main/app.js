const mergeButton = document.getElementById("Merge");
const bubbleButton = document.getElementById("Bubble");
const insertionButton = document.getElementById("Insertion");
const resetButton = document.getElementById("reset");

const speedInput = document.getElementById("Speed");
const sizeInput = document.getElementById("blocks");

const parent = document.querySelector(".parent");
parent.style = "flex-direction:row";

let span = [];
let arr = [];

let sizOfArray=16;
const parentWidth = parent.offsetWidth;

generateArray();

function generateArray(){
    arr=[];
    span=[];
    while (parent.lastElementChild) {
        parent.removeChild(parent.lastElementChild);
    }
    for (let i = 0; i < sizOfArray; i++) {
        const iDiv = document.createElement('div');
        parent.appendChild(iDiv);
        span[i] = iDiv;
        arr[i] = Math.floor(Math.random() * 90) + 10;
        span[i].style.width = parentWidth/sizOfArray +'px';
        span[i].style.height = arr[i] * 4 + 10 + 'px';
        
    }
}


var delayInMilliseconds = 0;
let increment = 1010 - 100 * speedInput.value;
let changedelay = increment/2;
console.log(increment);
speedInput.addEventListener("change",function(){
    increment=1010-100*speedInput.value;
    changedelay = increment / 2;
    console.log(increment);
});

sizeInput.addEventListener("change", function () {
    sizOfArray=sizeInput.value;
    generateArray();
});

function disabling() {
    mergeButton.disabled = true;
    bubbleButton.disabled = true;
    resetButton.disabled = true;
    insertionButton.disabled = true;
    speedInput.disabled=true;
    sizeInput.disabled=true;
}
function enabling() {
    mergeButton.disabled = false;
    bubbleButton.disabled = false;
    resetButton.disabled = false;
    insertionButton.disabled = false;
    speedInput.disabled = false;
    sizeInput.disabled = false;
}

mergeButton.onclick = function () {
    mergeSorting();
    disabling();
};
bubbleButton.onclick = function () {
    bubbleSorting();
    disabling();
};
insertionButton.onclick = function () {
    insertionSorting();
    disabling();
};

resetButton.onclick = function () {
    generateArray();
}
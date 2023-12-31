const slider=document.querySelector("#sizeslider");
const sliderValue=document.querySelector("#slidervalue");
const square=document.querySelector(".square");//square
let squareDimension=0;
let pen="black";
let isMouse=false;
let colors=["violet","indigo","orange","blue","green","yellow","red"];
function changeColor(){
    if(pen=="black"){
        return "black"
    }
    else if(pen=="rainbow"){
        let randomNum= Math.floor(Math.random()*7);
        return colors[randomNum];
    }
    else if(pen=="eraser"){
        return "white";
    }
}
for (let j = 1; j<=16; j++) {
    let rowDiv=document.createElement("div");
    rowDiv.classList="row"+j;
    square.appendChild(rowDiv);
    rowDiv.style.cssText="display:flex;flexDirection:row;"
    for(let i=1;i<=16;i++){
        const newDiv=document.createElement("div");
        newDiv.classList="squarediv";
        newDiv.style.cssText="width:41.25px;height:41.25px;background:white;";
        newDiv.addEventListener('mousedown',()=>{
            isMouse=true;
        })
        newDiv.addEventListener('mouseup',()=>{
            isMouse=false;
        })
        newDiv.addEventListener('mousemove',()=>{
            if(isMouse==true){
                newDiv.style.background=changeColor();
            }
        })
        rowDiv.appendChild(newDiv);
    }
}
function changeSquare(value){
    squareDimension=660/value;
    squareDimensionPx=squareDimension+"px";
    for (let j = 0; j<value; j++) {
        let rowDiv=document.createElement("div");
        rowDiv.classList="row"+j;
        square.appendChild(rowDiv);
        rowDiv.style.cssText="display:flex;flexDirection:row;";
        for(let i=0;i<value;i++){
            const newDiv=document.createElement("div");
            newDiv.classList="squarediv";
            newDiv.style.cssText="width:"+squareDimensionPx+";height:"+squareDimensionPx+";background:white;";
            newDiv.addEventListener('mousedown',()=>{
                isMouse=true;
            })
            newDiv.addEventListener('mouseup',()=>{
                isMouse=false;
            })
            newDiv.addEventListener('mousemove',()=>{
                if(isMouse==true){
                    newDiv.style.background=changeColor();
                }
            })
            rowDiv.appendChild(newDiv);
        }
    }
}
function clearSquare(){
    square.innerHTML='';
}
function clearButton(currentButton){
    if(currentButton=="black"){
        rainbow.style.cssText="background:white;color:black";
        eraser.style.cssText="background:white;color:black";
    }
    else if(currentButton=="rainbow"){
        black.style.cssText="background:white;color:black";
        eraser.style.cssText="background:white;color:black";
    }
    else if(currentButton=="eraser"){
        black.style.cssText="background:white;color:black";
        rainbow.style.cssText="background:white;color:black";
    }
}

slider.addEventListener("input",function (){
    sliderValue.textContent=slider.value+" X "+slider.value;
    clearSquare();
    changeSquare(slider.value);
});
const black=document.querySelector("#black");
const rainbow=document.querySelector("#rainbow");
const eraser=document.querySelector("#eraser");
const clear=document.querySelector("#clear");


black.onclick=()=>{
    clearButton("black");
    black.style.background="black";
    black.style.color="white";
    pen="black";
}
rainbow.onclick=()=>{
    clearButton("rainbow");
    rainbow.style.background="black";
    rainbow.style.color="white";
    pen="rainbow";
}
eraser.onclick=()=>{
    clearButton("eraser");
    eraser.style.background="black";
    eraser.style.color="white";
    pen="eraser";
}
clear.onclick=()=>{
    const clearPad=document.querySelectorAll(".squarediv");
    for(let i=0;i<clearPad.length;i++){
        clearPad[i].style.background="white";
    }
}
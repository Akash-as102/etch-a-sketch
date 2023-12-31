const slider=document.querySelector("#sizeslider");
const sliderValue=document.querySelector("#slidervalue");
const square=document.querySelector(".square");//square
let squareDimension=0;
for (let j = 0; j<16; j++) {
    let rowDiv=document.createElement("div");
    rowDiv.classList="row"+j;
    square.appendChild(rowDiv);
    rowDiv.style.cssText="display:flex;flexDirection:row;"
    for(let i=0;i<16;i++){
        const newDiv=document.createElement("div");
        newDiv.classList="squarediv";
        newDiv.style.cssText="width:41.25px;height:41.25px;background:white;";
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
let pen="black";

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



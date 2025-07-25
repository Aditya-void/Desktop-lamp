var bulb = document.querySelector(".glass");
var warmBtn = document.querySelector("#warm-btn");
var redBtn = document.querySelector("#red-btn");
var cyanBtn = document.querySelector("#cyan-btn");
var greenBtn = document.querySelector("#green-btn");
var bagg = document.querySelector("html");
var bag = document.querySelector("body");
var baggg = document.querySelector("#buttons");


var flag = 1;

warmBtn.addEventListener("click",function warm(){
    if(flag == 1){
    bulb.style.backgroundColor= "#FFED29";
    flag = 0;
    warmBtn.innerHTML = "OFF";
    warmBtn.style.borderColor = "#ed2438"; 
    bagg.style.backgroundColor = "#f5f4a9";
    bag.style.backgroundColor = "#f5f4a9";
    baggg.style.backgroundColor = "#f5f4a9"    
    bulb.style.borderColor = "#fff";
    }

    else{

    bulb.style.backgroundColor = "transparent";
    flag = 1;
    warmBtn.innerHTML = "WARM"
    warmBtn.style.borderColor = "#24ed71"; 
    bagg.style.backgroundColor = "black";
    bag.style.backgroundColor = "black";
    baggg.style.backgroundColor = "black"
    bulb.style.borderColor = "rgba(255, 255, 255, 0.305)";
    }
});

redBtn.addEventListener("click",function red(){
    if(flag == 1){
    bulb.style.backgroundColor= "#FF4450";
    flag = 0;
    redBtn.innerHTML = "OFF";
    redBtn.style.borderColor = "#ed2438"; 
    bagg.style.backgroundColor = "#FF3131";
    bag.style.backgroundColor = "#FF3131";
    baggg.style.backgroundColor = "#FF3131"    
    bulb.style.borderColor = "#fff";
    }

    else{

    bulb.style.backgroundColor = "transparent";
    flag = 1;
    redBtn.innerHTML = "RED"
    redBtn.style.borderColor = "#24ed71"; 
    bagg.style.backgroundColor = "black";
    bag.style.backgroundColor = "black";
    baggg.style.backgroundColor = "black";
    bulb.style.borderColor = "rgba(255, 255, 255, 0.305)";
    }
});

cyanBtn.addEventListener("click",function red(){
    if(flag == 1){
    bulb.style.backgroundColor= "#64fafa";
    flag = 0;
    cyanBtn.innerHTML = "OFF";
    cyanBtn.style.borderColor = "#ed2438"; 
    bagg.style.backgroundColor = "#00FFFF";
    bag.style.backgroundColor = "#00FFFF";
    baggg.style.backgroundColor = "#00FFFF";    
    bulb.style.borderColor = "#fff";
    }

    else{

    bulb.style.backgroundColor = "transparent";
    flag = 1;
    cyanBtn.innerHTML = "CYAN"
    cyanBtn.style.borderColor = "#24ed71"; 
    bagg.style.backgroundColor = "  black";
    bag.style.backgroundColor = "black";
    baggg.style.backgroundColor = "black";
    bulb.style.borderColor = "rgba(255, 255, 255, 0.305)";
    }
});

greenBtn.addEventListener("click",function red(){
    if(flag == 1){
    bulb.style.backgroundColor= "#24ed71";
    flag = 0;
    greenBtn.innerHTML = "OFF";
    greenBtn.style.borderColor = "#ed2438"; 
    bagg.style.backgroundColor = "#39FF14";
    bag.style.backgroundColor = "#39FF14";
    baggg.style.backgroundColor = "#39FF14";
    bulb.style.borderColor = "#fff";
    }

    else{

    bulb.style.backgroundColor = "transparent";
    flag = 1;
    greenBtn.innerHTML = "GREEN"
    greenBtn.style.borderColor = "#24ed71"; 
    bagg.style.backgroundColor = "black";
    bag.style.backgroundColor = "black";
    baggg.style.backgroundColor = "black"
    bulb.style.borderColor = "rgba(255, 255, 255, 0.305)";
    }
});
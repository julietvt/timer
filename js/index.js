'use strict';
const timerValueElem = document.getElementById("timerValue");
const timerStartElem = document.getElementById("start");
const timerStopElem = document.getElementById("stop");
const timerResetElem = document.getElementById("reset");
const date = new Date();
const DELAY = 10;
let intervalID = null;
timerStartElem.onclick = function () {
    if(intervalID){
        return;
    }
    intervalID = setInterval(incSecond, DELAY);
};

timerStopElem.onclick = function (){
    if(intervalID){
        clearInterval(intervalID);
        intervalID = null;
    }
};

timerResetElem.onclick = function(){
    //date.setHours(0,0,0,0);
    date.setMinutes(0,0,0);
    updateTimerValue();
}

function incSecond() {
    date.setMilliseconds(date.getMilliseconds() + DELAY);
    updateTimerValue();
}

function updateTimerValue(){
    timerValueElem.innerText = `${format2(date.getMinutes())}:${format2(date.getSeconds())}:${format3(date.getMilliseconds())}`;
}

function format2(value) {
    return value < 10 ? `0${value}`: value;
}

function format3(value){
    return value < 100 ? value < 10 ? `00${value}`: `0${value}` : value;
}

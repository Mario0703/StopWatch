let minuttes = 0;
let hours = 0;
let seconds = 0;
let second = 0;
const timeStab = document.getElementById("time");
const stopBTN = document.getElementById("stop-btn");
const startBTN = document.getElementById("start-btn");
const resetBTN = document.getElementById("Reset-btn");

let myClock = setInterval(function() {Counter();},1000);

function Counter(){

    startBTN.onclick = function(){
        second = 1
    }

    stopBTN.onclick = function(){
        second = 0
    }

    resetBTN.onclick = function(){
        seconds = 0;
        minuttes = 0
        hours = 0;
    }

    seconds += second;


    if(seconds >= 59){
        seconds = 0;
        minuttes +=1;
    }

    if (minuttes >= 59){
        hours +=1
        minuttes =0
    }

    timeStab.innerHTML = FormatTime(seconds,minuttes,hours);
    

    function FormatTime(seconds,minuttes,hours){
        seconds = seconds < 10 ? "0"+seconds : seconds;
        minuttes = minuttes < 10 ? "0"+minuttes : minuttes;
        hours = hours < 10 ? "0"+hours : hours;

        return `${hours}:${minuttes}:${seconds}`;

    }

}




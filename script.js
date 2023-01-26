let minuttes = 0;
let hours = 0;
let seconds = 0;
let second = 0;
let timeStab = document.getElementById("time");
let stopBTN = document.getElementById("stop-btn");
let startBTN = document.getElementById("start-btn");


const myClock = setInterval(function() {Counter();},1000);

function Counter(){

    startBTN.onclick = function(){
        second = 1
    }

    stopBTN.onclick = function(){
        second = 0
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
    console.log(formatTime(seconds))

    function formatTime(seconds){
        if(seconds <= 10){
            "1"+seconds;
        }
        return `${hours}:${minuttes}:${seconds}`;
    }
}




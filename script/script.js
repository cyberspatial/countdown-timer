var pomodsec = document.getElementById("psec").textContent;
var pomodmin = document.getElementById("pmin").textContent;
var breaksec5 = document.getElementById("bsec5").textContent;
var breakmin5 = document.getElementById("bmin5").textContent;
var breaksec10 = document.getElementById("bsec10").textContent;
var breakmin10 = document.getElementById("bmin10").textContent;
var minute = document.getElementsByClassName("min");
var second = document.getElementsByClassName("sec");
var reset = document.getElementById("reset");
var start_btn = document.getElementsByClassName('start');
var pomod = document.getElementsByClassName('time-container')[0];
var fivemin = document.getElementsByClassName('time-container')[1];
var tenmin = document.getElementsByClassName('time-container')[2];
var pomodbtn = document.getElementsByClassName('break')[0];
var breakbtn = document.getElementsByClassName('break')[1];



var min = 0;
var sec = 0;

var newsec = "";
var i = 0;

function changetime(i) {

    minute[i].innerHTML = min;
    second[i].innerHTML = sec--;


    if (sec < 10) {
        newsec = "0" + sec;
        second[i].innerHTML = newsec;
    }
    if (min < 10) {
        newmin = "0" + min;
        minute[i].innerHTML = newmin;
    }



    if (min == 0 && sec == 0) {
        var audio = new Audio('Audio/alarm.wav');
        audio.play();
        clearInterval(control);
    }

    if (sec == 0) {
        sec = 59;
        min = min - 1;
    }
    reset.addEventListener("click", resetfun);



}
var control;
function check(i) {
    if (i == 0) {
        min = pomodmin - 1;
        sec = 59 - pomodsec;

    }
    if (i == 1) {
        min = breakmin5 - 1;
        sec = 59 - breaksec5;
    }
    if (i == 2) {
        min = breakmin10 - 1;
        sec = 59 - breaksec10;
    }
    start_btn[i].disabled = true;
    control = setInterval(changetime, 1000, i);
}

function resetfun() {
    start_btn[i].disabled = false;

    minute[i].innerHTML = pomodmin;
    min = pomodmin - 1;
    second[i].innerHTML = "00";
    sec = 59 - pomodsec;
    clearInterval(control);

}



function breakcoming() {
    pomod.style.display = "none";
    fivemin.style.display = "flex";
    tenmin.style.display = "none";
    pomodbtn.style.display = "none";
    breakbtn.style.display = "flex";
    clearInterval(control);
    minute[0].innerHTML = pomodmin;
    second[0].innerHTML = "00";
    start_btn[0].disabled = false;

}
function pomodcoming() {
    pomod.style.display = "flex";
    fivemin.style.display = "none";
    tenmin.style.display = "none";
    pomodbtn.style.display = "flex";
    breakbtn.style.display = "none";
    clearInterval(control);
    minute[1].innerHTML = breakmin5;
    second[1].innerHTML = "00";
    minute[2].innerHTML = breakmin10;
    second[2].innerHTML = "00";
    start_btn[1].disabled = false;
    start_btn[2].disabled = false;

}
function min5shift() {
    pomod.style.display = "none";
    fivemin.style.display = "none";
    tenmin.style.display = "flex";
    pomodbtn.style.display = "none";
    breakbtn.style.display = "flex";
    clearInterval(control);
    minute[1].innerHTML = breakmin5;
    second[1].innerHTML = "00";
    start_btn[2].disabled = false;
    start_btn[1].disabled = false;

}
function min10shift() {
    pomod.style.display = "none";
    fivemin.style.display = "flex";
    tenmin.style.display = "none";
    pomodbtn.style.display = "none";
    breakbtn.style.display = "flex";
    clearInterval(control);
    minute[2].innerHTML = breakmin10;
    second[2].innerHTML = "00";
    start_btn[2].disabled = false;


}












const d = new Date();
var hour = d.getHours();
const extractmain = document.getElementById('main')
var extarctgreet = document.getElementsByClassName('greeting')[0];
var extracthead = document.getElementsByClassName('heading')[0];
var extracttime = document.getElementsByClassName('time');
function changeBackground() {
    if (hour >= 4 && hour < 12) {
        extractmain.setAttribute('class', 'morning');
        extarctgreet.innerHTML = "GOOD MORNING! HUSTLERS"
    }
    else if (hour >= 12 && hour < 17) {
        extractmain.setAttribute('class', 'afternoon');
        extarctgreet.innerHTML = "GOOD AFTERNOON! HUSTLERS"
        extracthead.style.color = "black";
    }
    else if (hour >= 17 && hour <= 20) {
        extractmain.setAttribute('class', 'evening');
        extarctgreet.innerHTML = "GOOD EVENING! HUSTLERS"
        extracthead.style.color = "black";
    }
    else {
        extractmain.setAttribute('class', 'night');
        extarctgreet.innerHTML = "GOOD NIGHT! HUSTLERS"
        for (var j = 0; j < extracttime.length; j++) {
            extracttime[j].style.color = "white";
        }
    }
}

changeBackground();


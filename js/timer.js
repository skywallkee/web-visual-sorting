async function timer() {
    timer = document.getElementById("timer"),
    seconds = 0, minutes = 0, hours = 0;
}

async function addTimerSecond() {
    seconds++;
    if (seconds >= 60) {
        seconds = 0;
        minutes++;
        if (minutes >= 60) {
            minutes = 0;
            hours++;
        }
    }
    
    timer.textContent = (hours ? (hours > 9 ? hours : "0" + hours) : "00") + ":" + (minutes ? (minutes > 9 ? minutes : "0" + minutes) : "00") + ":" + (seconds > 9 ? seconds : "0" + seconds);

    startTimer();
}

async function startTimer() {
    timer.style["color"] = "green";
    timer.style["font-weight"] = "bold";
    t = setTimeout(addTimerSecond, 1000);
}

async function clearTimer() {
    timer.textContent = "00:00:00";
    timer.style["color"] = "black";
    timer.style["font-weight"] = "bold";
    seconds = 0; minutes = 0; hours = 0;
}

async function stopTimer() {
    clearTimeout(t);
    var old = "black";
    timer.style["color"] = "red";
    timer.style["font-weight"] = "bold";
    await new Promise(resolve => setTimeout(resolve, 500));
    if(old != "green") {
        old = timer.style["color"];
        timer.style["color"] = "black";
    }
    else
        timer.style["color"] = "green";
    timer.style["font-weight"] = "bold";
    await new Promise(resolve => setTimeout(resolve, 500));
    if(old != "green") {
        old = timer.style["color"];
        timer.style["color"] = "red";
    }
    else
        timer.style["color"] = "green";
    timer.style["font-weight"] = "bold";
    await new Promise(resolve => setTimeout(resolve, 500));
    if(old != "green") {
        old = timer.style["color"];
        timer.style["color"] = "black";
    }
    else
        timer.style["color"] = "green";
    timer.style["font-weight"] = "bold";
}
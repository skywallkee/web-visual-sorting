var started = false;

$(document).ready(function() { 
    $('.modal').modal();
    $(".dropdown-trigger").dropdown({
        coverTrigger: false
     });


});

function getRndInteger(min, max) {
    if(min > max) {
        var temp = min;
        min = max;
        max = temp;
    }
    return Math.floor(Math.random() * (max - min)) + min;
  }

function sorting(algorithm) {
    document.getElementById('sortTitle').textContent = algorithm;
    return;
}

function setSpeed(speed) {
    document.getElementById('speedTitle').textContent = speed;
    return;
}

function clearLines() {
    var list = document.getElementById('vertical-lines');
    while(list.hasChildNodes()) {
        list.removeChild(list.childNodes[0]);
    }
}

function setField(array) {
    var field = "";
    for(const number in array) {
        field += array[number].toString() + " ";
    }
    document.getElementById('numbers').value = field;
}

function setArray(array) {
    clearLines();

    var maxHeight = 0;
    var minHeight = 500;
    for(const index in array) {
        if(array[index] > maxHeight){
            maxHeight = array[index];
        }
        if(array[index] < minHeight){
            minHeight = array[index];
        }
    }
    var multiplier = 500/maxHeight;
    for(const index in array) {
        const line = document.createElement('div');
        line.className = 'line';
        line.id = "line" + index.toString();
        var style = "display: inline-block; border-left:";
        var border = $(window).width()/(2.5*array.length);
        style += border.toString() + "px solid grey; height: ";
        var height = array[index] * multiplier + 15;
        style += height.toString() + 'px;';
        line.style = style;
        line.style["border-right"] = "1px solid dimgray";
        document.getElementById('vertical-lines').appendChild(line);
    }
}

function setArrayField(array) {
    var numbers = document.getElementById('numbers').value;
    var result = numbers.split(' ').filter(Boolean).map(function(item) {
        return parseInt(item, 10);
    });
    setArray(result);
}

function getMaxLengthRandom() {
    var length = document.getElementById('maxLength').value;
    length = parseInt(length, 10);
    if(length <= 0)
        return 10;
    return length;
}
function getMinLengthRandom() {
    var length = document.getElementById('minLength').value;
    length = parseInt(length, 10);
    if(length <= 0)
        return 10;
    return length;
}

function createRandomArray() {
    var length = getRndInteger(getMinLengthRandom(), getMaxLengthRandom());
    var i;
    var numbersArray = [];
    for(i = 0; i < length; i++) {
        numbersArray.push(getRndInteger(0, 500))
    }
    setField(numbersArray);
    setArray(numbersArray);
    started = false;
}

document.addEventListener('DOMContentLoaded', function() {
    createRandomArray();
}, false);

function sleep() {
    speed = document.getElementById('speedTitle').textContent;;
    if(speed.localeCompare("Very Slow") == 0)
        return new Promise(resolve => setTimeout(resolve, 700));
    else if(speed.localeCompare("Slow") == 0)
        return new Promise(resolve => setTimeout(resolve, 500));
    else if(speed.localeCompare("Normal") == 0)
        return new Promise(resolve => setTimeout(resolve, 250));
    else if(speed.localeCompare("Fast") == 0)
        return new Promise(resolve => setTimeout(resolve, 50));
    else
        return new Promise(resolve => setTimeout(resolve, 0));
}
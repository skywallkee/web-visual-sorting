async function bogoSort() {
    var sorted = false;
    var array = document.getElementsByClassName('line');
    while(!sorted) {
        sorted = true;
        for(var index = 0; index < array.length - 1; index++) {
            if(parseFloat(array[index].style["height"]) < parseFloat(array[index + 1].style["height"]))
            {
                sorted = false;
                break;
            }
            else { 
            }
        }
        if(sorted == false) {
            var index1 = getRndInteger(0, array.length);
            var index2 = getRndInteger(0, array.length);
            array[index1].style["border-left-color"] = "green";
            array[index1].style["border-right"] = "1px solid darkgreen";
            array[index2].style["border-left-color"] = "green";
            array[index2].style["border-right"] = "1px solid forestgreen";
            await sleep();
            var temp = array[index1].style["height"];
            array[index1].style["height"] = array[index2].style["height"];
            array[index2].style["height"] = temp;
            await sleep();
            array[index1].style["border-left-color"] = "grey";
            array[index1].style["border-right"] = "1px solid dimgrey";
            array[index2].style["border-left-color"] = "grey";
            array[index2].style["border-right"] = "1px solid dimgrey";
        }
    }

    for(var index=0; index < array.length; index++) {
        array[index].style["border-left-color"] = "turquoise";
        array[index].style["border-right"] = "1px solid blue";
        new Promise(resolve => setTimeout(resolve, 15));
    }
}
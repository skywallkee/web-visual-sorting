async function insertionSort () {
    var array = Array.from(document.getElementsByClassName('line'));
    for (var index1 = 0; index1 < array.length; index1++) {
        array[index1].style["border-left-color"] = "blue";
        array[index1].style["border-right"] = "1px solid navy";
        await sleep();
        let value = parseInt(array[index1].style["height"]);
        for (var index2 = index1 - 1; index2 > -1 && parseInt(array[index2].style["height"]) < value; index2--) {
            array[index1].style["border-left-color"] = "green";
            array[index1].style["border-right"] = "1px solid darkgreen";
            array[index2].style["border-left-color"] = "green";
            array[index2].style["border-right"] = "1px solid forestgreen";
            await sleep();
            var temp = array[index2 + 1].style["height"];
            array[index2 + 1].style["height"] = array[index2].style["height"];
            array[index2].style["height"] = temp;
            await sleep();
            array[index1].style["border-left-color"] = "gray";
            array[index1].style["border-right"] = "1px solid dimgray";
            array[index2].style["border-left-color"] = "gray";
            array[index2].style["border-right"] = "1px solid dimgray";
        }
        array[index2 + 1].style["height"] = value;
    }
    for(var index=0; index < array.length; index++) {
        array[index].style["border-left-color"] = "turquoise";
        array[index].style["border-right"] = "1px solid blue";
        new Promise(resolve => setTimeout(resolve, 15));
    }
  }
async function mBubbleSort() {
    var array = document.getElementsByClassName('line');
    for(var index1 = 0; index1 < array.length; index1++) {
        for(var index2 = 0; index2 < array.length; index2++) {
            array[index1].style["border-left-color"] = "blue";
            array[index1].style["border-right"] = "1px solid navy";
            array[index2].style["border-left-color"] = "yellow";
            array[index2].style["border-right"] = "1px solid olive";
            await sleep();
            if(parseFloat(array[index1].style["height"]) > parseFloat(array[index2].style["height"])) { 
                array[index1].style["border-left-color"] = "green";
                array[index1].style["border-right"] = "1px solid darkgreen";
                array[index2].style["border-left-color"] = "green";
                array[index2].style["border-right"] = "1px solid forestgreen";
                await sleep();
                var size = array[index1].style["height"];
                array[index1].style["height"] = array[index2].style["height"];
                array[index2].style["height"] = size;
                sorted = false;
            }
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
    started = false;
}
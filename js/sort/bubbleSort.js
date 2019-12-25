async function bubbleSort() {
    var sorted = false;
    var array = document.getElementsByClassName('line');
    while(!sorted){
        sorted = true;
        for(var index=0; index < array.length - 1; index++) {
            array[index].style["border-left-color"] = "blue";
            array[index].style["border-right"] = "1px solid navy";
            array[index+1].style["border-left-color"] = "yellow";
            array[index+1].style["border-right"] = "1px solid olive";
            await sleep();
            if(parseFloat(array[index].style["height"]) < parseFloat(array[index+1].style["height"])) { 
                array[index].style["border-left-color"] = "green";
                array[index].style["border-right"] = "1px solid darkgreen";
                array[index+1].style["border-left-color"] = "green";
                array[index+1].style["border-right"] = "1px solid forestgreen";
                await sleep();
                var size = array[index].style["height"];
                array[index].style["height"] = array[index+1].style["height"];
                array[index+1].style["height"] = size;
                sorted = false;
            }
            array[index].style["border-left-color"] = "grey";
            array[index].style["border-right"] = "1px solid dimgrey";
            array[index+1].style["border-left-color"] = "grey";
            array[index+1].style["border-right"] = "1px solid dimgrey";
        }
    }
    for(var index=0; index < array.length; index++) {
        array[index].style["border-left-color"] = "turquoise";
        array[index].style["border-right"] = "1px solid blue";
        new Promise(resolve => setTimeout(resolve, 15));
    }
}
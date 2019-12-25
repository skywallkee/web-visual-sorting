function changeHeight(array, size) {
    for(var index = 0; index < array.length; index++) {
        array[index].style["border-left-width"] = ($(window).width()/(2.5*size)).toString() + "px";
    }
}

async function stalinSort() {
    var array = document.getElementsByClassName('line');
    var container = document.getElementById('vertical-lines');
    var index = 0;
    while(index < array.length - 1) {
        array[index].style["border-left-color"] = "blue";
        array[index].style["border-right"] = "1px solid navy";
        array[index + 1].style["border-left-color"] = "yellow";
        array[index + 1].style["border-right"] = "1px solid olive";
        await sleep();
        if(parseFloat(array[index].style["height"]) < parseFloat(array[index + 1].style["height"])) {
            array[index].style["border-left-color"] = "green";
            array[index].style["border-right"] = "1px solid darkgreen";
            array[index + 1].style["border-left-color"] = "green";
            array[index + 1].style["border-right"] = "1px solid forestgreen";
            await sleep();
            container.removeChild(array[index]);
            if(index > 0)
                index -= 2;
            else
                index -= 1;
        }
        index += 1;
        changeHeight(array, array.length);
    }
    for(var index=0; index < array.length; index++) {
        array[index].style["border-left-color"] = "turquoise";
        array[index].style["border-right"] = "1px solid blue";
        new Promise(resolve => setTimeout(resolve, 15));
    }
}
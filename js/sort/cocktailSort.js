async function cocktailSort() {
    var array = document.getElementsByClassName('line');
    let is_Sorted = true;
    while (is_Sorted) {
        for (let index = 0; index< array.length - 1; index++){
            array[index].style["border-left-color"] = "blue";
            array[index].style["border-right"] = "1px solid navy";
            array[index+1].style["border-left-color"] = "yellow";
            array[index+1].style["border-right"] = "1px solid olive";
            await sleep();
            if (parseInt(array[index].style["height"]) < parseInt(array[index + 1].style["height"])) {
                array[index].style["border-left-color"] = "green";
                array[index].style["border-right"] = "1px solid darkgreen";
                array[index+1].style["border-left-color"] = "green";
                array[index+1].style["border-right"] = "1px solid forestgreen";
                await sleep();
                let temp = array[index].style["height"];
                array[index].style["height"] = array[index + 1].style["height"];
                array[index+1].style["height"] = temp;
                is_Sorted = true;
            }
            array[index].style["border-left-color"] = "grey";
            array[index].style["border-right"] = "1px solid dimgrey";
            array[index+1].style["border-left-color"] = "grey";
            array[index+1].style["border-right"] = "1px solid dimgrey";
        }

        if (!is_Sorted)
            break;

        is_Sorted = false;

        for (let index = array.length - 1; index > 0; index--){
            array[index].style["border-left-color"] = "blue";
            array[index].style["border-right"] = "1px solid navy";
            array[index-1].style["border-left-color"] = "yellow";
            array[index-1].style["border-right"] = "1px solid olive";
            await sleep();
            if (parseInt(array[index-1].style["height"]) < parseInt(array[index].style["height"])) {
                array[index].style["border-left-color"] = "green";
                array[index].style["border-right"] = "1px solid darkgreen";
                array[index-1].style["border-left-color"] = "green";
                array[index-1].style["border-right"] = "1px solid forestgreen";
                await sleep();
                let temp = array[index].style["height"];
                array[index].style["height"] = array[index - 1].style["height"];
                array[index - 1].style["height"] = temp;
                is_Sorted = true;
            }
            array[index].style["border-left-color"] = "grey";
            array[index].style["border-right"] = "1px solid dimgrey";
            array[index-1].style["border-left-color"] = "grey";
            array[index-1].style["border-right"] = "1px solid dimgrey";
        }
    }
    for(var index=0; index < array.length; index++) {
        array[index].style["border-left-color"] = "turquoise";
        array[index].style["border-right"] = "1px solid blue";
        new Promise(resolve => setTimeout(resolve, 15));
    }
}
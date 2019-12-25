async function swap(array, x, y) {
    array[x].style["border-left-color"] = "mediumorchid";
    array[x].style["border-right"] = "1px solid mediumpurple";
    array[y].style["border-left-color"] = "orchid";
    array[y].style["border-right"] = "1px solid thistle";
    await sleep();
    var temp = array[x].style["height"];
    array[x].style["height"] = array[y].style["height"];
    array[y].style["height"] = temp;
    array[x].style["border-left-color"] = "gray";
    array[x].style["border-right"] = "1px solid dimgray";
    array[y].style["border-left-color"] = "gray";
    array[y].style["border-right"] = "1px solid dimgray";
}

async function selectionSort() {
    var array = Array.from(document.getElementsByClassName('line'));
    var len = array.length;
    for (var index1 = 0; index1 < len - 1; index1 = index1 + 1) {
        array[index1].style["border-left-color"] = "blue";
        array[index1].style["border-right"] = "1px solid navy";
        await sleep();
        var index2_min = index1;
        for (var index2 = index1 + 1; index2 < len; index2 = index2 + 1) {
            array[index2].style["border-left-color"] = "yellow";
            array[index2].style["border-right"] = "1px solid olive";
            await sleep();
            if (parseInt(array[index2].style["height"]) > parseInt(array[index2_min].style["height"])) {
                array[index1].style["border-left-color"] = "green";
                array[index1].style["border-right"] = "1px solid darkgreen";
                array[index2].style["border-left-color"] = "green";
                array[index2].style["border-right"] = "1px solid forestgreen";
                index2_min = index2;
                await sleep();
                array[index1].style["border-left-color"] = "blue";
                array[index1].style["border-right"] = "1px solid navy";
            }
            array[index2].style["border-left-color"] = "gray";
            array[index2].style["border-right"] = "1px solid dimgray";
        }
        if (index2_min !== index1) {
            swap(array, index1, index2_min);
            await sleep();
        }
        array[index1].style["border-left-color"] = "gray";
        array[index1].style["border-right"] = "1px solid dimgray";
    }
    for(var index=0; index < array.length; index++) {
        array[index].style["border-left-color"] = "turquoise";
        array[index].style["border-right"] = "1px solid blue";
        new Promise(resolve => setTimeout(resolve, 15));
    }
}
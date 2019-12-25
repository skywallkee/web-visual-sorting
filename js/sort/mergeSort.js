function getMaxIndex(arr) {
    var maxx = parseInt(arr[0].id.replace("line", ""));
    for(var index=0; index < arr.length; index++) {
        if(parseInt(arr[index].id.replace("line", "")) > maxx)
            maxx = parseInt(arr[index].id.replace("line", ""));
    }
    return maxx;
}

function getMinIndex(arr) {
    var minn = parseInt(arr[0].id.replace("line", ""));
    for(var index=0; index < arr.length; index++) {
        if(parseInt(arr[index].id.replace("line", "")) < minn)
            minn = parseInt(arr[index].id.replace("line", ""));
    }
    return minn;
}

async function merge(left, right) {
    let arr = [];
    var promise = new Promise(resolve => sleep());
    while (left.length && right.length) {
        left[0].style["border-left-color"] = "blue";
        left[0].style["border-right"] = "1px solid navy";
        right[0].style["border-left-color"] = "yellow";
        right[0].style["border-right"] = "1px solid olive";
        await sleep();
        if (parseInt(left[0].style["height"]) > parseInt(right[0].style["height"])) {
            left[0].style["border-left-color"] = "green";
            left[0].style["border-right"] = "1px solid darkgreen";
            await sleep();
            left[0].style["border-left-color"] = "gray";
            left[0].style["border-right"] = "1px solid dimgray";
            right[0].style["border-left-color"] = "gray";
            right[0].style["border-right"] = "1px solid dimgray";
            arr.push(left.shift());
        } 
        else {
            right[0].style["border-left-color"] = "green";
            right[0].style["border-right"] = "1px solid forestgreen";
            await sleep();
            left[0].style["border-left-color"] = "gray";
            left[0].style["border-right"] = "1px solid dimgray";
            right[0].style["border-left-color"] = "gray";
            right[0].style["border-right"] = "1px solid dimgray";
            arr.push(right.shift());
        }
    }
    return arr.concat(left.slice().concat(right.slice()));
}
  
async function doMergeSort(arr) {
    if (arr.length < 2) {
        return arr;
    }

    const middle = Math.floor(arr.length / 2);
    const left = arr.slice(0, middle);
    const right = arr.slice(middle);
    var array = await merge(await doMergeSort(left), await doMergeSort(right));
    let heights = [];
    for(index in array) {
        heights.push(array[index].style["height"]);
    }
    for(index in arr) {
        arr[index].style["height"] = heights[index];
        await new Promise(resolve => setTimeout(resolve, 15));
    }
    return arr;
}

async function mergeSort(array){
    await doMergeSort(array);
    for(var index=0; index < array.length; index++) {
        array[index].style["border-left-color"] = "turquoise";
        array[index].style["border-right"] = "1px solid blue";
        new Promise(resolve => setTimeout(resolve, 15));
    }
}
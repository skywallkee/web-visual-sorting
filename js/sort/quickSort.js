async function swap(arr, i, j){
    var temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

 async function partition(arr, pivot, left, right, array){
    var pivotValue = arr[pivot],
        partitionIndex = left;

    for(var i = left; i < right; i++){
        if(arr[i] < pivotValue){
            array[i].style["border-left-color"] = "green";
            array[i].style["border-right"] = "1px solid forestgreen";
            array[partitionIndex].style["border-left-color"] = "green";
            array[partitionIndex].style["border-right"] = "1px solid forestgreen";
            await sleep();
            await swap(arr, i, partitionIndex);
            var temp = array[i].style["height"];
            array[i].style["height"] = array[partitionIndex].style["height"];
            array[partitionIndex].style["height"] = temp;
            array[i].style["border-left-color"] = "gray";
            array[i].style["border-right"] = "1px solid dimgray";
            array[partitionIndex].style["border-left-color"] = "gray";
            array[partitionIndex].style["border-right"] = "1px solid dimgray";
            partitionIndex++;
        }
    }
    array[right].style["border-left-color"] = "green";
    array[right].style["border-right"] = "1px solid forestgreen";
    array[partitionIndex].style["border-left-color"] = "green";
    array[partitionIndex].style["border-right"] = "1px solid forestgreen";
    await sleep();
    await swap(arr, right, partitionIndex);
    var temp = array[right].style["height"];
    array[right].style["height"] = array[partitionIndex].style["height"];
    array[partitionIndex].style["height"] = temp;
    array[right].style["border-left-color"] = "gray";
    array[right].style["border-right"] = "1px solid dimgray";
    array[partitionIndex].style["border-left-color"] = "gray";
    array[partitionIndex].style["border-right"] = "1px solid dimgray";
    return partitionIndex;
}

async function doQuickSort(arr, left, right){
    var array = Array.from(document.getElementsByClassName('line'));
    var len = arr.length, 
    pivot,
    partitionIndex;


    if(left < right){
        pivot = right;
        array[pivot].style["border-left-color"] = "blue";
        array[pivot].style["border-right"] = "1px solid navy";
        await sleep();
        partitionIndex = await partition(arr, pivot, left, right, array);
        array[pivot].style["border-left-color"] = "gray";
        array[pivot].style["border-right"] = "1px solid dimgray";
        await doQuickSort(arr, left, partitionIndex - 1);
        await doQuickSort(arr, partitionIndex + 1, right);
    }
}

async function quickSort(arr) {
    await doQuickSort(arr,  0, arr.length - 1);
    var array = Array.from(document.getElementsByClassName('line'));
    for(var index=0; index < array.length; index++) {
        array[index].style["border-left-color"] = "turquoise";
        array[index].style["border-right"] = "1px solid blue";
        new Promise(resolve => setTimeout(resolve, 15));
    }
}
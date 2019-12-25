async function swap(a, i, j) {
    var tmp = a[i];
    a[i] = a[j];
    a[j] = tmp;
}

async function max_heapify(a, i, length, array) {
    while (true) {
        var left = i*2 + 1;
        var right = i*2 + 2;
        var largest = i;
        array[largest].style["border-left-color"] = "red";
        array[largest].style["border-right"] = "1px solid darkred"
        await sleep();
        if (left < length && a[left] < a[largest]) {
            array[left].style["border-left-color"] = "green";
            array[left].style["border-right"] = "1px solid darkgreen";
            array[largest].style["border-left-color"] = "green";
            array[largest].style["border-right"] = "1px solid forestgreen";
            await sleep();
            array[left].style["border-left-color"] = "gray";
            array[left].style["border-right"] = "1px solid dimgray";
            array[largest].style["border-left-color"] = "blue";
            array[largest].style["border-right"] = "1px solid navy";
            largest = left;
        }

        if (right < length && a[right] < a[largest]) {
            array[right].style["border-left-color"] = "green";
            array[right].style["border-right"] = "1px solid darkgreen";
            array[largest].style["border-left-color"] = "green";
            array[largest].style["border-right"] = "1px solid forestgreen";
            await sleep();
            array[right].style["border-left-color"] = "gray";
            array[right].style["border-right"] = "1px solid dimgray";
            array[largest].style["border-left-color"] = "blue";
            array[largest].style["border-right"] = "1px solid navy";
            largest = right;
        }

        if (i == largest) {
            break;
        }

        array[i].style["border-left-color"] = "green";
        array[i].style["border-right"] = "1px solid darkgreen";
        array[largest].style["border-left-color"] = "green";
        array[largest].style["border-right"] = "1px solid forestgreen";
        await sleep();
        var size = array[i].style["height"];
        array[i].style["height"] = array[largest].style["height"];
        array[largest].style["height"] = size;
        await swap(a, i, largest);
        i = largest;
    }
}

async function heapify(a, length, array) {
    for (var i = Math.floor(length/2); i >= 0; i--) {
        await max_heapify(a, i, length, array);
    }
}

async function doHeapSort(a, array) {
    await heapify(a, a.length, array);

    for (var i = a.length - 1; i > 0; i--) {
        array[0].style["border-left-color"] = "green";
        array[0].style["border-right"] = "1px solid darkgreen";
        array[i].style["border-left-color"] = "green";
        array[i].style["border-right"] = "1px solid forestgreen";
        await sleep();
        var size = array[i].style["height"];
        array[i].style["height"] = array[0].style["height"];
        array[0].style["height"] = size;
        await swap(a, i, 0);
        array[0].style["border-left-color"] = "gray";
        array[0].style["border-right"] = "1px solid dimgray";
        array[i].style["border-left-color"] = "gray";
        array[i].style["border-right"] = "1px solid dimgray";
        await max_heapify(a, 0, i, array);
    }
}

async function heapSort() {
    var array = Array.from(document.getElementsByClassName('line'));
    var a = [];
    for(index in array) {
        a.push(parseInt(array[index].style["height"]));
    }
    await doHeapSort(a, array);
    for(var index=0; index < array.length; index++) {
        array[index].style["border-left-color"] = "turquoise";
        array[index].style["border-right"] = "1px solid blue";
        new Promise(resolve => setTimeout(resolve, 15));
    }
}
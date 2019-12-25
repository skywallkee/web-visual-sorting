function findIndexOfHeight(arr, height) {
    for(index in arr) {
        if(parseInt(arr[index].style["height"]) == parseInt(height))
            return index;
    }
    return -1;
}

async function radixSort(arr) {
    var array = Array.from(document.getElementsByClassName('line'));
    const maxNum = Math.max(...arr) * 10;
    let divisor = 10;
    while (divisor < maxNum) {
       // Create bucket arrays for each of 0-9
       let buckets = [...Array(10)].map(() => []);
       // For each number, get the current significant digit and put it in the respective bucket
       for (let num of arr) {
            var index = findIndexOfHeight(array, num);
            array[index].style["border-left-color"] = "blue";
            array[index].style["border-right"] = "1px solid navy";
            await sleep();
            buckets[9 - Math.floor((num % divisor) / (divisor / 10))].push(num);
            let heights = [];
            for(bIndex in buckets) {
                for(index in buckets[bIndex]) {
                    heights.push(buckets[bIndex][index]);
                }
            }
            for(index in heights) {
                var index2 = findIndexOfHeight(array, heights[index]);
                array[index].style["border-left-color"] = "green";
                array[index].style["border-right"] = "1px solid darkgreen";
                array[index2].style["border-left-color"] = "green";
                array[index2].style["border-right"] = "1px solid forestgreen";
                var temp = array[index].style["height"];
                array[index].style["height"] = array[index2].style["height"];
                array[index2].style["height"] = temp;
                array[index].style["border-left-color"] = "grey";
                array[index].style["border-right"] = "1px solid dimgrey";
                array[index2].style["border-left-color"] = "grey";
                array[index2].style["border-right"] = "1px solid dimgrey";
            }
            await sleep();
       }
       // Reconstruct the array by concatinating all sub arrays
       arr = [].concat.apply([], buckets);
       // Move to the next significant digit
       divisor *= 10;
    }
    for(var index=0; index < array.length; index++) {
        array[index].style["border-left-color"] = "turquoise";
        array[index].style["border-right"] = "1px solid blue";
        new Promise(resolve => setTimeout(resolve, 15));
    }
 }
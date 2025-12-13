// Space O(n) Time - O(nlogn)

const arr = [1, 4, 10, 5, 3];

function heapSort(arr) {
    let n = arr.length;
  
    // create max heap O(n)
    for (let i = n - 1; i >= 0; i--) {
        heapifyDown(arr, i, n);
    }

    // Sort the array
    for (let i = n - 1; i > 0; i--) {
        // replace first last
        [arr[0], arr[i]] = [arr[i], arr[0]];
        heapifyDown(arr, 0, i);
    }

    return arr;
}


// O(logn)
function heapifyDown(arr, i, n) { 
    let largest = i;

    let left = (2 * i) + 1;
    let right = (2 * i) + 2;

    if (left < n && arr[left] > arr[largest]) {
        largest = left;
    }

    if (right < n && arr[right] > arr[largest]) {
        largest = right;
    }

    if (largest !== i) {
        [arr[i], arr[largest]] = [arr[largest], arr[i]];
        heapifyDown(arr, largest, n);
    }
}

console.log(heapSort(arr));

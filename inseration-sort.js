const arr = [3,4,7,5,1,2];
let n = arr.length;

for(let i = 1; i< n; i++) {
    let curr = arr[i];
    let p = i - 1;
    while(arr[p] > curr && p >=0) {
        arr[p+1] = arr[p];
        p--;
    }
    arr[p+1] = curr;
}

console.log(arr);

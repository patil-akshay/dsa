const arr = [1,2,3,4,5,6]

function sum(n) {
    if(n === 0) {return 0;}
    return arr[n - 1] + sum(n-1);
}
console.log(sum(arr.length));

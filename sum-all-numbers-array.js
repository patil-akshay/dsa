const arr = [1,2,3,4,5,6,7]

function sum(n) {
    if(n === 0) {return 0;}
    return arr[n - 1] + sum(n-1);
}
console.log(sum(arr.length));


// sum of odd numbers

const arr = [5,2,0,3,6,7,3];

function sum(n) {
    let isOdd = (arr[n-1] % 2 != 0);
    if(n === 0) {return 0;}
    return isOdd ? arr[n - 1] + sum(n-1) : sum(n-1);
}
console.log(sum(arr.length));


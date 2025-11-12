// with recursion

const n = 5;
var fib = function(n) {
    if(n <=1) { return n;}
    return fib(n-1) + fib(n-2);
};

console.log(fib(n));


// with for loop
var fib = function (n) {
    let dp = [0,1];
    for(let i =2; i <= n; i++){
        dp[i] = dp[i-1] + dp[i-2];
    }
    return dp[n];
};

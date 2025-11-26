/**
 * @param {number[]} temperatures
 * @return {number[]}
 */

// Time O(n)

var dailyTemperatures = function (arr) {
    const stack = [];
    let n = arr.length;
    let ans = Array(n).fill(0);
    stack.push(n - 1);

    for (let i = n - 2; i >= 0; i--) {
        while (stack.length) {
            let top = stack[stack.length - 1];
            if (arr[i] >= arr[top]) { // dup tempratures
                stack.pop();
            } else {
                // found next warmer day
                ans[i] = top - i;
                break;
            }
        }
        stack.push(i);
    }
    return ans;
};

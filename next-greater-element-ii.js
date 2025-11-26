/**
 * @param {number[]} nums
 * @return {number[]}
 */
var nextGreaterElements = function (nums) {
    const stack = [];
    let arr = [...nums, ...nums]; // doubling array to address cicular
    let n = arr.length;
    let ans = Array(n).fill(-1);
    stack.push(arr[n - 1]);

    for (let i = n - 2; i >= 0; i--) {
        while (stack.length) {
            let top = stack[stack.length - 1];
            if (arr[i] < top) {
                // found greater element
                ans[i] = top;
                break;
            } else {
                stack.pop();
            }
        }
        stack.push(arr[i]);
    }

    return ans.slice(0, n / 2);
};


//without doubling the array

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var nextGreaterElements = function (arr) {
    const stack = [];
    //let arr = [...nums, ...nums];
    let n = arr.length;
    let ans = Array(n).fill(-1);
    stack.push(arr[n - 1]);

    for (let i = (2 * n) - 2; i >= 0; i--) {
        while (stack.length) {
            let top = stack[stack.length - 1];
            if (arr[i % n] < top) {
                // found greater element
                ans[i % n] = top;
                break;
            } else {
                stack.pop();
            }
        }
        stack.push(arr[i % n]);
    }

    return ans.slice(0, n);
};

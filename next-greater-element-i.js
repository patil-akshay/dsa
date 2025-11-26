/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */

// Space/Time - O(n)

var nextGreaterElement = function (nums1, nums2) {
    const stack = [];
    let map = {};
    let n = nums2.length;
    stack.push(nums2[n - 1]);
    map[nums2[n - 1]] = -1;

    for (let i = n - 2; i >= 0; i--) {
        let top = stack[stack.length - 1];
        if (nums2[i] < top) {
            map[nums2[i]] = top;
        } else {
            while (stack.length) {
                if (stack[stack.length - 1] < nums2[i]) {
                    stack.pop();
                } else {
                    map[nums2[i]] = stack[stack.length - 1];
                    break;
                }
            }
            if (!stack.length) {
                map[nums2[i]] = -1;
            }
        }
        stack.push(nums2[i]);
    }

    let ans = [];
    for (let i = 0; i < nums1.length; i++) {
        ans.push(map[nums1[i]]);
    }
    return ans;
};

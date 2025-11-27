/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
    let left = 0;
    let right = nums.length - 1;
    let res = [-1, -1];
    while (left < right) {
        let m = Math.floor((left + right) / 2);

        if (nums[m] < target) {
            left = m + 1;
        } else {
            right = m;
        }
    }
    if (nums[left] === target) {
        res[0] = left;
    }

    left = 0;
    right = nums.length - 1;

    while (left < right) {
        let m = Math.ceil((left + right) / 2);

        if (nums[m] > target) {
            right = m - 1;
        } else {
            left = m;
        }
    }
    if (nums[left] === target) {
        res[1] = left;
    }
    return res;
};

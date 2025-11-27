/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function (nums) {
    let left = 0;
    let right = nums.length - 1;
    while (left < right) {
        let m = Math.floor((left + right) / 2);
        if (nums[m + 1] > nums[m]) { // peak is on right
            left = m + 1;
        } else { // peak is on left
            right = m;
        }
    }
    return left;
};

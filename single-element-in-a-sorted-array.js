/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNonDuplicate = function (nums) {
    let left = 0;
    let right = nums.length - 1;
    while (left <= right) {
        let m = Math.floor((left + right) / 2);
        if (nums[m] == nums[m - 1]) {
            // pair exists on left
            let leftCount = m - 1 - left;
            if (leftCount % 2 === 1) {
                right = m - 2;
            } else {
                left = m + 1;
            }
        } else if (nums[m] == nums[m + 1]) {
            let leftCount = m - left;
            if (leftCount % 2 === 1) {
                right = m - 1;
            } else {
                left = m + 2;
            }
        } else {
            return nums[m];
        }
    }
};

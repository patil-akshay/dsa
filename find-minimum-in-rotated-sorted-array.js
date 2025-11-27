/**
 * @param {number[]} nums
 * @return {number}
 */

//O(logn)

var findMin = function (nums) {
    let left = 0;
    let right = nums.length - 1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);

        if (nums[left] <= nums[right]) { // array is already sorted
            return nums[left];
        }

        if (nums[mid] < nums[mid - 1]) {
            return nums[mid];
        }

        if (nums[left] > nums[mid]) { // right part sorted
            right = mid - 1;
        } else {
            left = mid + 1; // left part sorted
        }
    }
};

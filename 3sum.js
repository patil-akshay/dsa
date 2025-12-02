
// Time - O(n2) Space - O(n)

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
    nums.sort((a, b) => a - b);
    let ans = [];
    for (let i = 0; i < nums.length; i++) {
        // avoid for duplicates
        if (nums[i] !== nums[i - 1]) {
            twoSum(nums, i, ans);
        }
    }
    return ans;
};

var twoSum = function (nums, x, ans) {
    let left = x + 1;
    let right = nums.length - 1;
    while (left < right) {
        let sum = nums[left] + nums[right] + nums[x];
        if (sum > 0) {
            // Sum is too large
            right--;
        } else if (sum < 0) {
            // Sum is too small
            left++;
        } else {
            ans.push([nums[left], nums[right], nums[x]]);
            left++;
            right--;
             // Skip duplicate values for the second element
            while (left < right && nums[left] == nums[left - 1]) left++;
        }
    }
};

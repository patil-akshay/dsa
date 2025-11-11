var findMaxConsecutiveOnes = function (nums) {
    let curr = 0;
    let max = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] == 1) {
            curr++;
        } else {
            max = Math.max(curr, max);
            curr = 0;
        }
    }
    return Math.max(curr, max); // [1,1,0,0,1,1] no zero at end
};

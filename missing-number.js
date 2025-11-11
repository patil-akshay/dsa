var missingNumber = function (nums) {
    const n = nums.length;
    const sumOriginal = n * (n + 1) / 2;
    let sumGiven = 0;

    for (let i = 0; i < nums.length; i++) {
        sumGiven = sumGiven + nums[i]
    }

    return sumOriginal - sumGiven;
};

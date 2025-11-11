const nums = [0,1,0,3,12];
let x = 0;
for(let i=0; i<nums.length; i++) {
    if(nums[i] != 0){
        nums[x] = nums[i];
        x++;
    }
}

// fill remaining elements to zero

for(let i = x ; i< nums.length ; i++){
    nums[i] = 0;
}

console.log(nums);


// one more

var moveZeroes = function (nums) {
    let nonzero = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] != 0) {
            [nums[i], nums[nonzero]] = [nums[nonzero], nums[i]];
            nonzero++;
        }
    }
    return nums;
};

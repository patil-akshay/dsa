var search = function (nums, target) {
    let left = 0;
    let right = nums.length - 1;
    for (let i = 0; i < nums.length; i++) {
        let m = Math.floor((left + right) / 2);
        if (nums[m] === target) {
            return m;
        } else if(target > nums[m]) {
            left = m + 1;
        }else {
            right = m -1
        }
    }
    return -1;
};





const nums = [-1,0,3,5,9,12];
const target = 0;
var search = function(nums, target) {
    let left = 0;
    let right = nums.length - 1;
    while(left <= right) {
        let m = Math.floor((left + right) / 2);
        if (nums[m] === target) {
            return m;
        } else if(target > nums[m]) {
            left = m + 1;
        }else {
            right = m -1
        }
    }
    return -1;
};

console.log(search(nums,target));

const nums = [5,2,4,1,0];
let n = nums.length - 1;
let swapped = false;
for (let i =0; i< n; i++) {
    for(let j = 0; j< n-i; j++ ) {
        if(nums[j] > nums[j + 1]) {
            // [nums[j], nums[j+1]] = [nums[j+1], nums[j]];
            let x = nums[j];
            nums[j] = nums[j + 1];
            nums[j + 1] = x
            swapped = true;
        }
    }
    if(!swapped) break;
}
console.log(nums);

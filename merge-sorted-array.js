const nums1 =[1,3,5,7]
const nums2 = [2,4,8,9]
let m = nums1.length;
let n = nums2.length;

var merge = function (nums1, m, nums2, n) {
    let p1 = m - 1;
    let p2 = n - 1;


    for (let i = m + n - 1; i >= 0; i--) {
        if (p2 < 0) {
            break;
        }
        if (p1 >= 0 && nums1[p1] > nums2[p2]) {
            nums1[i] = nums1[p1];
            p1--;
        } else {
            nums1[i] = nums2[p2];
            p2--;
        }
    }
    return nums1;
};

console.log(merge(nums1, m, nums2, n));

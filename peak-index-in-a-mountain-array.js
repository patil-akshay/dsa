/* Use two pointers, l (left) and r (right), initially spanning the entire array.
Compute the mid index m = l + Math.floor((r - l) / 2).
Compare arr[m] with its right neighbor arr[m + 1]:
If arr[m] < arr[m + 1], then we are in the increasing slope, so move l = m + 1.
Else, we are in the decreasing slope (or at the peak), so move r = m.
Continue until l == r, which will be the peak index. */

/**
 * @param {number[]} arr
 * @return {number}
 */
var peakIndexInMountainArray = function (arr) {
    let left = 0;
    let right = arr.length - 1;
    while (left < right) {
        let m = Math.floor((left + right) / 2);
        if (arr[m + 1] > arr[m]) {
            left = m + 1;
        } else {
            right = m;
        }
    }
    return left // or right;
};

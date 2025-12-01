/* Use two pointers l and r to represent the search range for the starting index of the k closest elements.
Initially, l = 0 and r = arr.length - k (since the leftmost starting index can only go up to n - k).
Perform binary search:
At each step, take m = (l + r) // 2.
Compare the distance of x from the two possible window edges:
x - arr[m] (distance from the left edge)
arr[m + k] - x (distance from the right edge).
If the left distance is larger, shift l = m + 1; otherwise, shift r = m.
At the end of binary search, l will be the optimal starting index.
Return the subarray arr[l : l + k]. */

/**
 * @param {number[]} arr
 * @param {number} k
 * @param {number} x
 * @return {number[]}
 */
var findClosestElements = function (arr, k, x) {
    let left = 0;
    let right = arr.length - 1;
    while (left < right) {
        let m = Math.floor((left + right) / 2);
        if ((arr[m + k] - x) < (x - arr[m])) {
            left = m + 1;
        } else {
            right = m;
        }
    }
    return arr.slice(left, left + k);
};

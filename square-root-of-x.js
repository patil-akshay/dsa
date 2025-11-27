/**
 * @param {number} x
 * @return {number}
 */

//Time - O(logn) space - O(1)

var mySqrt = function (x) {
    if (x < 2) return x;

    // binary search
    let l = 2;
    let r = Math.floor(x / 2);

    while (l <= r) {
        let m = Math.floor((l + r) / 2);
        if (x == m ** 2) {
            return m;
        } else if (x > m ** 2) {
            l = m + 1;
        } else {
            r = m - 1;
        }
    }
    return r; //in case of not a perfect square
};

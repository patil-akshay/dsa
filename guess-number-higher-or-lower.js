/** 
 * Forward declaration of the guess API.
 * @param {number} num   your guess
 * @return 	     -1 if num is higher than the picked number
 *			      1 if num is lower than the picked number
 *               otherwise return 0
 * var guess = function(num) {}
 */

/**
 * @param {number} n
 * @return {number}
 */
var guessNumber = function (n) {
    let r = n;
    let l = 1;

    while(l <= r){
        let m = Math.floor((l + r) / 2);
        let res = guess(m);
        if (res == 0) {
            return m;
        } else if (res == -1) {
            r = m - 1;
        } else {
            l = m + 1;
        }
    }
};

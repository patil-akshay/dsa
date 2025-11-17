/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */


// O(n) because we're jumping 2k times

var reverseStr = function (s, k) {
    s = s.split('');

    for (let x = 0; x < s.length; x = x + (2 * k)) {
        // reverse the first K elements from x
        let mid = Math.floor(k / 2);
        for (let i = 0; i < mid; i++) {
            let temp = s[x + i];
            s[x + i] = s[x + k - 1 - i];
            s[x + k - i - 1] = temp;
        }
    }

    // // reverse string
    // let n = s.length;
    // let mid = Math.floor(n / 2);
    // for (let i = 0; i < mid; i++) {
    //     let temp = s[i];
    //     s[i] = s[n - i - 1];
    //     s[n - i - 1] = temp;
    // }

    return s.join('');
};

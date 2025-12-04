/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function (s1, s2) {
    let hashS = Array(26).fill(0);
    let hashW = Array(26).fill(0);

    let wlength = s1.length;

    for (let i = 0; i < wlength; i++) {
        ++hashS[s1.charCodeAt(i) - 97];
        ++hashW[s2.charCodeAt(i) - 97];
    }

    let i = 0;
    let j = wlength - 1;

    while (j < s2.length) {
        if (isHashSame(hashS, hashW)) {
            return true;
        } else {
            // remove exixting
            --hashW[s2.charCodeAt(i) - 97];
            i++;
            j++;
            // add new
            ++hashW[s2.charCodeAt(j) - 97];
        }
    }
    return false;
};

var isHashSame = function (hashS, hashW) {
    for (let i = 0; i < 26; i++) {
        if (hashS[i] !== hashW[i]) {
            return false;
        }
    }
    return true;
}

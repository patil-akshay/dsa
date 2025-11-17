/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
    s = s.trim();
    s = s.split(" ");
    return s[s.length - 1].length;
};

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
    let len = 0;
    for (let i = s.length - 1; i >= 0; i--) {
        if (s[i] !== ' ') len++;
        else if (len !== 0) break;
    }
    return len;
};


/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
    // trim all the spaces at the end
    let n = s.length - 1; // start from last char 
    while (n >= 0) {
        if (s[n] === ' ') {
            --n;
        } else {
            break;
        }
    }

    // count the chars till we reach space
    let count = 0;
    while (n >= 0) {
        if (s[n] === ' ') {
            break;
        } else {
            count++;
            --n;
        }
    }
    return count;
};

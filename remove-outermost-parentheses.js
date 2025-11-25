/**
 * @param {string} s
 * @return {string}
 */

// With stack # Time complexity:O(n) # Space complexity:O(n)

var removeOuterParentheses = function (s) {
    const stack = [];
    let res = '';
    for (let i = 0; i < s.length; i++) {
        if (s[i] == '(') {
            stack.push(s[i]);
            if (stack.length > 1) {
                res = res + s[i];
            }
        } else {
            if (stack.length > 1) {
                res = res + s[i];
            }
            stack.pop();
        }
    }
    return res;
};


// Without Stack
// # Time complexity:O(n) # Space complexity:O(1)

/**
 * @param {string} s
 * @return {string}
 */
var removeOuterParentheses = function (s) {
    let level = 0;
    let res = '';
    for (let i = 0; i < s.length; i++) {
        if (s[i] == '(') {
            ++level;
            if (level > 1) {
                res = res + s[i];
            }
        } else {
            if (level > 1) {
                res = res + s[i];
            }
            --level;
        }
    }
    return res;
};

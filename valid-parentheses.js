/**
 * @param {string} s
 * @return {boolean}
 */

// Time O(n) Space O(n)

var isValid = function (s) {
    let stack = [];
    let check = {
        '{': '}',
        '[': ']',
        '(': ')'
    };
    for (let i = 0; i < s.length; i++) {
        if (check[s[i]]) {
            stack.push(s[i]);
        } else {
            let top = stack.pop();
            if (!top || s[i] !== check[top]) {
                return false;
            }
        }
    }

    return stack.length == 0;
};

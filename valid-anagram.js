/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */


//Time O(n) ---> Space O(1)

var isAnagram = function (s, t) {
    if (s.length != t.length) return false;
    const check = new Map();
    for (let i = 0; i < s.length; i++) {
        if (check.get(s[i])) {
            check.set(s[i], check.get(s[i]) + 1);
        } else {
            check.set(s[i], 1);
        }
    }

    for (let i = 0; i < t.length; i++) {
        if (!check.get(t[i]) || check.get(t[i]) < 0) {
            return false;
        } else {
            check.set(t[i], check.get(t[i]) - 1);
        }
    }

    return true;
};

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function (s, t) {
    const st = new Map();
    const ts = new Map();
    for (let i = 0; i < s.length; i++) {
        if (!st.has(s[i]) && !ts.has(t[i])) {
            st.set(s[i], t[i]);
            ts.set(t[i], s[i]);
        } else if (ts.get(t[i]) != s[i] || st.get(s[i]) != t[i]) {
            return false;
        }
    }
    return true;
};

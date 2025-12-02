/**
 * @param {string} s
 * @return {number}
 Time complexity: O(n)
Space complexity: O(1)
 */
var lengthOfLongestSubstring = function (s) {
    let i = j = 0;
    let check = new Map();
    let maxWS = 0;
    let currWS = 0;
    for (j = 0; j < s.length; j++) {
        // element is in map
        if (check.has(s[j]) && check.get(s[j]) >= i) {
            i = check.get(s[j]) + 1;
        }
        check.set(s[j], j);
        currWS = j - i + 1;
        maxWS = Math.max(maxWS, currWS);
    }
    return maxWS;
};

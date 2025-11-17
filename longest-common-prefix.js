/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
    let prefix = "";

    // Loop over letters of the first word
    for (let i = 0; i < strs[0].length; i++) {
        let char = strs[0][i]; // current letter from first word

        // Check this letter in all words
        for (let j = 1; j < strs.length; j++) {
            if (strs[j][i] !== char) {
                return prefix; // stop if any word differs
            }
        }

        // If all matched, add to prefix
        prefix += char;
    }

    return prefix;
};

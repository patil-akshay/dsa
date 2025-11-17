/**
 * @param {string} s
 * @return {number}
 */

//Time - O(n) map can run only 26 times, so it will be O(1) Space - O(1) max can go (26)

var maxFreqSum = function (s) {
    const countMap = new Map();
    for (let i = 0; i < s.length; i++) {
        if (countMap.get(s[i])) {
            countMap.set(s[i], countMap.get(s[i]) + 1);
        } else {
            countMap.set(s[i], 1);
        }
    }
    let maxVowels = 0;
    let maxCons = 0;

    for (const [key, value] of countMap.entries()) {
        if (key == 'a' || key == 'e' || key == 'i' || key == 'o' || key == 'u') {
            maxVowels = Math.max(maxVowels, value);
        } else {
            maxCons = Math.max(maxCons, value);
        }
    }

    return maxVowels + maxCons;
};

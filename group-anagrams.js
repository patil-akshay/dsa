/**
 * @param {string[]} strs
 * @return {string[][]}
 */


// time n * m log m  ** space nm

var groupAnagrams = function (strs) {
    const data = new Map();
    for (let i = 0; i < strs.length; i++) { // n
        let sorted = strs[i].split('').sort().join(''); // m log m
        if (data.has(sorted)) {
            let value = data.get(sorted);
            value.push(strs[i]);
        } else {
            data.set(sorted, [strs[i]]);
        }
    }
    return Array.from(data.values());
};



/**
 * @param {string[]} strs
 * @return {string[][]}
 */

// Time O(nm) Space O(nm)
var groupAnagrams = function (strs) {
    const data = new Map();
    for (let i = 0; i < strs.length; i++) { // n number of string
        let freqArr = Array(26).fill(0);
        let s = strs[i];
        for (let j = 0; j < s.length; j++) { // m length of string
            let index = s[j].charCodeAt() - 'a'.charCodeAt();
            ++freqArr[index];
        }
        let key = '';
        for (let k = 0; k < 26; k++) {
            key = key + String.fromCharCode(k) + freqArr[k];
        }
        if (data.has(key)) {
            let value = data.get(key);
            value.push(strs[i]);
        } else {
            data.set(key, [strs[i]]);
        }
    }
    return Array.from(data.values());
};

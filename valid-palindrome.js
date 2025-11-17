/**
 * @param {string} s
 * @return {boolean}
 */


// Time - O(n)  Space - O(n)

var isPalindrome = function (s) {
    //filtered value
    s = s.toLowerCase();
    let filteredString = ''; // extra space
    let rev = '';
    for (let i = 0; i < s.length; i++) {
        if (s[i].match(/[a-z0-9]/i)) {
            filteredString += s[i];
            rev = s[i] + rev; // add chars to left side
        }
    }
    return filteredString === rev;
};


// With low space

var isPalindrome = function (s) {
    s = s.toLowerCase();
    let left = 0;
    let right = s.length - 1
    while (left < right) {
        if (!s[left].match(/[a-z0-9]/i)) {
            left++;
        } else if (!s[right].match(/[a-z0-9]/i)) {
            right--;
        } else if (s[left] == s[right]) {
            right--;
            left++;
        } else {
            return false;
        }
    };

    return true;
}

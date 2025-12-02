/**
 * @param {number[]} height
 * @return {number}
 */

// /time-space- O(n)

var trap = function (height) {
    let maxL = [];
    maxL[0] = height[0];


    // calculate max left
    for (let i = 1; i < height.length; i++) {
        maxL[i] = Math.max(maxL[i - 1], height[i]);
    }

    // calculate max right
    let maxR = [];
    maxR[height.length - 1] = height[height.length - 1];

    for (let i = height.length - 2; i >= 0; i--) {
        maxR[i] = Math.max(height[i], maxR[i + 1]);
    }

    let ans = 0;

    for (let i = 0; i < height.length; i++) {
        let water = (Math.min(maxL[i], maxR[i])) - height[i];
        ans = ans + Math.max(water, 0); // avoid negative
    }
    return ans;
};

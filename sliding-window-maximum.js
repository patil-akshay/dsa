/*
Iterate over the array with a right pointer.
For each element:
Remove all smaller elements from the back of the deque (they can never be maximum again).
Add the current index to the deque.
Compute the left boundary: left = right - k + 1.
If the maximum (front of deque) is out of the window, remove it.
Once the first full window is formed (right >= k - 1), add nums[deque[0]] to the result.

Time complexity: O(n) – each element is pushed and popped at most once.
Space complexity: O(k) – deque stores up to k indices.
*/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function (nums, k) {
    const res = [];
    const q = [];

    let i = j = 0;

    while (j < nums.length) {
        // remove all elements grater than current from queue
        while (q.length && nums[j] > q[q.length - 1]) { q.pop(); }
        q.push(nums[j]);
        // window size is K
        if (j >= k - 1) {
            res.push(q[0]);
            // leftmost element of curr window is largest which is q[0] then remove it
            nums[i] === q[0] && q.shift();
            i++;
        }
        j++;
    }
    return res;
};

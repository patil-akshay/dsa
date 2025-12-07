/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */

// Time - Space - O(n)
var levelOrder = function (root) {
    if (!root) return [];
    const ans = [];
    const q = [root];
    while (q.length) {
        let level = [];

        // level limit
        let levelSize = q.length;

        for (let i = 0; i < levelSize; i++) {
            // get first element
            let curr = q.shift();

            // push childerns of curr element back in queue
            curr.left && q.push(curr.left);
            curr.right && q.push(curr.right);

            level.push(curr.val);
        }
        ans.push(level);
    }
    return ans;
};

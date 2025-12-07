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

 Input: root = [3,9,20,null,null,15,7]
Output: [[3],[9,20],[15,7]]
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


//Using recurrsion

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
var levelOrder = function (root) {
    if (!root) return [];
    const ans = [];
    function traversal(curr, level) {
        if (!ans[level]) ans[level] = [];
        ans[level].push(curr.val);
        curr.left && traversal(curr.left, level + 1);
        curr.right && traversal(curr.right, level + 1);
    }
    // pass level
    traversal(root, 0);
    return ans;
};


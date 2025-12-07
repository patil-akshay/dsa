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
 * @return {number[]}
 */
var postorderTraversal = function (root) {
    const ans = [];
    function traversal(curr) {
        if (!curr) {
            return;
        }
        traversal(curr.left);
        traversal(curr.right);
        ans.push(curr.val);
    }
    traversal(root);
    return ans;
};


// 2 stacks

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
 * @return {number[]}
 */
var postorderTraversal = function (root) {
    if (!root) return [];
    const s1 = [root];
    const s2 = [];
    const ans = [];
    while (s1.length) {
        let curr = s1.pop();
        s2.push(curr);
        curr.left && s1.push(curr.left);
        curr.right && s1.push(curr.right);
    }

    while (s2.length) {
        ans.push(s2.pop().val);
    }
    return ans;
};

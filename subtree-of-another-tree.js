/*
Time complexity: O(n+m) to scan both trees.
Space complexity: O(n+m) for storing the serialized strings.
*/


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
 * @param {TreeNode} subRoot
 * @return {boolean}
 */
var isSubtree = function (root, subRoot) {
    const serialize = (node) => {
        if (!node) return ',#';
        return `,${node.val}` + serialize(node.left) + serialize(node.right);
    };

    // ,3,4,1,#,#,2,#,#,5,#,#
    const rootStr = serialize(root);
    // ,4,1,#,#,2,#,#
    const subStr = serialize(subRoot);
    return rootStr.includes(subStr);
};

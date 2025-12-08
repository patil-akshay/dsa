/*
1️⃣ Initialize an empty count
2️⃣ Define a recursive DFS function:   
• If node is null, return   
• If node's value ≥ max seen so far → increase count
• Update max to node.val if it's larger   
• Recurse left and right with updated max
3️⃣ Start traversal from root with -Infinity as initial max
4️⃣ Return count as the count of good nodes

Time complexity:
O(n) → Every node is visited once

Space complexity:
Total → O(n)
O(h) → Recursive stack depth (h = height of tree)
O(n) → In worst case, store every node value in the result array
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
 * @return {number}
 */
var goodNodes = function (root) {
    let count = 0;
    function dfs(node, max) {
        if (!node) return;
        if (node.val >= max) {
            max = node.val;
            count++;
        }
        node.left && dfs(node.left, max); // we traverse left subtree
        node.right && dfs(node.right, max); // we traverse right subtree
    }

    dfs(root, -Infinity);

    return count;
};

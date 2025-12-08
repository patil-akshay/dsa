/*
Time complexity: (O(n)), where n is the number of nodes.
Space complexity: (O(n)), for the queue used in BFS.

We perform a level-order traversal using a queue. For every level, we record the last node processed. This gives us the rightmost node at that depth.
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
 * @return {number[]}
 */
var rightSideView = function (root) {
    if (!root) return [];
    const result = [];
    const queue = [root];

    while (queue.length > 0) {
        const levelSize = queue.length;
        for (let i = 0; i < levelSize; i++) {
            const node = queue.shift();

            // push the first node of that level in result array
            i == 0 && result.push(node.val);

            // push childern back in queue from right to left
            node.right && queue.push(node.right);
            node.left && queue.push(node.left);
        }
    }
    return result;
};

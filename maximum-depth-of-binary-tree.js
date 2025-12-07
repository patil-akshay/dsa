// Top Down approach

/* Time Complexity: O(n) → Each node is visited once.
Space Complexity: O(h) → Recursion stack, where h is the height of the tree 
(worst case: O(n) for skewed tree, best case: O(log n) for balanced tree).
*/

var maxDepth = function (root) {
    let maxDepth = 0;
    function traversal(curr, depth) {
        maxDepth = Math.max(maxDepth, depth);
        curr.left && traversal(curr.left, depth + 1);
        curr.right && traversal(curr.right, depth + 1);
    }
    traversal(root, 1);
    return maxDepth;
};



// Bottom up Approach 

var maxDepth = function(root) {
    if (!root) {
        return 0;
    }
    
    const leftDepth = maxDepth(root.left);
    const rightDepth = maxDepth(root.right);
    
    return 1 + Math.max(leftDepth, rightDepth);
};

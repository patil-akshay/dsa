/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function (head) {
    // Base case: 0 or 1 node.
    if (!head || !head.next) {
        return head;
    }

    // Nodes to be swapped
    const left = head;
    const right = head.next;

    // Recursive call
    left.next = swapPairs(right.next);

    // Complete the swap
    right.next = left;

    // Return the new head
    return right;
};

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
    const firstNode = head;
    const secondNode = head.next;

    // Recursive call
    firstNode.next = swapPairs(secondNode.next);

    // Complete the swap
    secondNode.next = firstNode;

    // Return the new head
    return secondNode;
};

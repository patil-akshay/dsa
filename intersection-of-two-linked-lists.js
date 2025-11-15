/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function (headA, headB) {
    const check = new Set();
    while (headB) {
        check.add(headB);
        headB = headB.next;
    }

    while (headA) {
        if (check.has(headA)) {
            return headA;
        }
        headA = headA.next;
    }
    return null;
};

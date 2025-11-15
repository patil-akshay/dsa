/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */


// O(n)
var rotateRight = function (head, k) {
    if (!head || !head.next) { return head; }

    let length = 0;
    let curr = head;
    while (curr) {
        length++;
        curr = curr.next;
    }

    // avoid more iterations
    k = k % length;

    let slow = head;
    let fast = head;

    // move fast pointer k steps ahead
    for (let i = 0; i < k; i++) {
        fast = fast.next;
    }

    //reaching end of list
    while (fast.next) {
        slow = slow.next;
        fast = fast.next;
    }

    fast.next = head;
    let newHead = slow.next;

    slow.next = null;
    return newHead;
};

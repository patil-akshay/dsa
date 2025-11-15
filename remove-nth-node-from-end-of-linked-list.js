/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
    let node = new ListNode();
    node.next = head;

    let len = 0;
    while (head) {
        head = head.next;
        len++;
    }

    let prevPos = len - n;
    let prev = node;

    for (let i = 0; i < prevPos; i++) {
        prev = prev.next;
    }

    prev.next = prev.next.next;
    return node.next;
};

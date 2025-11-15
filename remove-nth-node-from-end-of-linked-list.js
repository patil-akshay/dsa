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

// 2pass  Time/Space O(n) / O(1)
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




//optimised one-pass approach

var removeNthFromEnd = function (head, n) {
    // add node
    let node = new ListNode();
    node.next = head;

    // move my first pointer by n
    let first = node;
    for (let i = 0; i < n; i++) {
        first = first.next;
    }

    // move both pointers until the first pointer reaches the last

    let second = node;
    while (first && first.next) {
        first = first.next;
        second = second.next;
    }
    second.next = second.next.next
    return node.next;
};


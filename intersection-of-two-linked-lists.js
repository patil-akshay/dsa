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
// Time O(n+m) // space - O(n)
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


// Two pointers approach
/* Initialize two pointers, p1 and p2, pointing to the heads of the two lists.
Move each pointer forward one node at a time.
If a pointer reaches the end of its list, redirect it to the head of the other list.
Keep looping until the two pointers meet:
If they meet at a node, that node is the intersection.
If they both become null, there is no intersection.
Return the node where they meet. 

Time complexity:O(n)
Space complexity:O(1)
*/


/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function (headA, headB) {
    if (!headA || !headB) return null;
    let p1 = headA;
    let p2 = headB;
    while (p1 !== p2) {
        p1 = p1 ? p1.next : headB;
        p2 = p2 ? p2.next : headA;
    }
    return p1;
};




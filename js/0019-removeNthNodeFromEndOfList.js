//	Time: 	 O(n)
//	Space:	 O(1)
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
var removeNthFromEnd = function(head, n) {
    const length = getListLength(head);
    if (length === n) return head.next;

    let follow = head;
    let lead = head;
    for (let i = 0; i < n; i += 1) {
        lead = lead.next;
    }

    while (lead.next) {
        lead = lead.next;
        follow = follow.next;
    }

    follow.next = follow.next.next;

    return head;
};

var getListLength = function(head) {
    let count = 0;
    let curr = head;
    while (curr) {
        curr = curr.next;
        count += 1;
    }
    return count;
}

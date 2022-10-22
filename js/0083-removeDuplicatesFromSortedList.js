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
 * @return {ListNode}
 */
var deleteDuplicates = function(head) {
    const dummy = head;
    let prev = head;
    let curr = head && head.next;

    while (curr) {
        if (curr.val === prev.val) {
            prev.next = curr.next;
            curr = prev.next;
        } else {
            curr = curr.next;
            prev = prev.next;
        }
    }

    return dummy;
};

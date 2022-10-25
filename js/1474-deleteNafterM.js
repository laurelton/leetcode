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
 * @param {number} m
 * @param {number} n
 * @return {ListNode}
 */
var deleteNodes = function(head, m, n) {
    let dummy = new ListNode(null);
    dummy.next = head;
    curr = dummy;

    while (curr) {
        let i = 0;
        while (i < m && curr) {
            curr = curr.next
            i += 1;
        }
        let j = 0;
        while (j < n && curr && curr.next) {
            curr.next = curr.next.next;
            j += 1;
        }
    }

    return dummy.next;
};

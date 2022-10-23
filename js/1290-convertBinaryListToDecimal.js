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
 * @return {number}
 */
var getDecimalValue = function(head) {
    let num = 0;
    let curr = head;

    while (curr) {
        num <<= 1;
        num += curr.val;
        curr = curr.next;
    }

    return num;
};

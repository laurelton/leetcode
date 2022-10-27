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
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
var reverseBetween = function(head, left, right) {
    const sntl = {next: head};
    let leftTail = sntl;
    
    for (let i = 1; i < left; i += 1) {
        leftTail = leftTail.next;
    }

    const revTail = leftTail.next;  // Tail of reversed sublist
    let revSubList = null;  // Head of reversed sublist

    let next = null;
    let curr = revTail;

    for (i = left; i <= right; i += 1) {
        next = curr.next;
        curr.next = revSubList;

        [revSubList, curr] = [curr, next];
    }

     const rightHead = next;
     
    leftTail.next = revSubList;
    revTail.next = rightHead;

    return sntl.next;
};

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
    // Create sentinel node to allow reversing from head
    // const sntl = new ListNode(0, head);
    const sntl = {next: head};
    let curr = sntl;
    
    // Iterate to node left - 1
    for (let i = 1; i < left; i += 1) {
        curr = curr.next;
    }

    // Set left - 1 as tail of left portion of list
    const leftTail = curr;
    // set left as tail of reversed sublist
    const revTail = curr.next;

    // Create pointer to left, and left + 1
    // reverse sublist to right
    let prev = null;
    let next = null;
    curr = curr.next;
    for (i = left; i <= right; i += 1) {
        next = curr.next;
        curr.next = prev;

        [prev, curr] = [curr, next];
    }

    // set right as head of reversed sublist
    // Set right + 1 as head of right portion of list
    const revHead = prev;
    const rightHead = next;

    // Attach head of sublist to tail of left
    // Attach tail of sublist to head of right
    leftTail.next = revHead;
    revTail.next = rightHead;

    return sntl.next;
};

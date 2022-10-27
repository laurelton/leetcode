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
var oddEvenList = function(head) {
    if (!head) return head;

    const oddHead = head;
    let oddCurr;
    let evenHead = head.next;
    let evenCurr;

    let curr = head;
    let indx = 1;
    while (curr) {
        if (indx % 2) {
            if (!oddCurr) {
                oddCurr = curr;
            } else {
                oddCurr.next = curr;
                oddCurr = oddCurr.next;
            }
            curr = curr.next;
            oddCurr.next = null
        } else {
            if (!evenCurr) {
                evenCurr = curr;
            } else {
                evenCurr.next = curr;
                evenCurr = evenCurr.next;
            }
            curr = curr.next;
            evenCurr.next = null;
        }
        indx += 1;
    }

    oddCurr.next = evenHead;
    return oddHead;
};

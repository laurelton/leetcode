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
var swapPairs = function(head) {
    let dummy = new ListNode(null);
    dummy.next = head;
    let curr = dummy.next;
    let prev = dummy;

    while (curr && curr.next) {
        let swap = curr.next;
        let nextNode = swap.next;

        prev.next = swap;
        swap.next = curr;
        curr.next = nextNode;

        prev = curr;
        curr = nextNode;
    }

    return dummy.next;
};

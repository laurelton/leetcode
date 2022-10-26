//	Time: 	 O()
//	Space:	 O()
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
    let prev = new ListNode(null);
    let curr = new ListNode(null);
    curr.next = head;
    prev.next = curr;
    let next;
    let conn;
    let tail;

    // for (let i = 0; i < left; i += 1) {
    //     prev = prev.next;
    //     curr = curr.next;
    //     next = curr.next;
    //     con = prev;
    // }
    // console.log(`Prev:\t ${prev.val}`);
    // console.log(`Curr:\t ${curr.val}`);
    // console.log(`Next:\t ${next.val}`);

    let i = 0;
    while (i < right) {
        if (i < left) {
            prev = prev.next;
            conn = prev;
            curr = curr.next;
            tail = curr;
            next = curr.next;
            
        } else {
            next = curr.next;
            curr.next = prev;

            prev = curr;
            curr = next;
        }
        i += 1;
    }
    conn.next = curr;
    tail.next = next;

};

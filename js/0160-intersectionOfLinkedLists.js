//	Time: 	 O(n + m) - 2 pass
//	Space:	 O(1)
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
var getIntersectionNode = function(headA, headB) {
    const lenA = getListLength(headA);
    const lenB = getListLength(headB);

    const [short, long] = lenA < lenB ? [headA, headB] : [headB, headA];

    const diff = Math.abs(lenA - lenB);

    let currS = short;
    let currL = long;
    for (let i = 0; i < diff; i += 1) {
        currL = currL.next;
    }

    while (currS !== currL && currS && currL) {
        currS = currS.next;
        currL = currL.next;

        if (currS === currL) break;
    }

    return currS === currL ? currS : null;
};

var getListLength = function(head) {
    let curr = head;
    let count = 0;

    while (curr) {
        curr = curr.next;
        count += 1;
    }

    return count;
}

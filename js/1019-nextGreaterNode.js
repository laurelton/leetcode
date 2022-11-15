//	Time: 	 O(n)
//	Space:	 O(n)
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number[]}
 */
var nextLargerNodes = function(head) {
    const result = [];
    const vals = [];
    let idx = 0;
    let curr = head;

    while (curr) {
        result.push(0);
        while (vals.length && curr.val > vals.at(-1).val) {
            const obj = vals.pop();
            result[obj.idx] = curr.val;
        }
        vals.push({idx, val: curr.val});
        
        idx += 1;
        curr = curr.next;
    }

    return result;
};

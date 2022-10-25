//	Time: 	 O(n) - 5 pass
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
 * @return {boolean}
 */
var isPalindrome = function(head) {
    // Get length
    const length = getLength(head);
    if (length < 2) return true;

    // Get halves
    let {left, tail, right} = splitList(head, length);
    tail.next = null;

    // Reverse right half
    right = reverseList(right);

    // Compare lists
    const listsEqual = compareLists(left, right);

    // Restore original list
    tail.next = reverseList(right);

    return listsEqual;
};

var getLength = function(head) {
    let i = 0;
    let curr = head;

    while (curr) {
        curr = curr.next;
        i += 1;
    }

    return i
};

var splitList = function(head, length) {
    const mid = Math.ceil(length / 2);
    let curr = new ListNode(null);
    curr.next = head;

    for (let i = 0; i < mid; i += 1) {
        curr = curr.next;
    }

    return {
        left: head, 
        tail: curr, 
        right: curr.next,
    };
};

var reverseList = function(head) {
    let prev = null;
    let next = null;
    let curr = head;

    while (curr) {
        next = curr.next;
        curr.next = prev;

        prev = curr;
        curr = next;
    }

    return prev;
};

var compareLists = function(long, short) {
    let sNode = short;
    let lNode = long;

    while (sNode) {
        if (sNode.val !== lNode.val) {
            return false;
        }
        sNode = sNode.next;
        lNode = lNode.next;
    }

    return true;
};

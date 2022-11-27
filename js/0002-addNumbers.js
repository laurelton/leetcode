const {ListNode, arrToList, listToArr} = require('./utils/linkedList.js');
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
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    const resultHead = new ListNode(0);
    let resultTail = resultHead;
    let curr1 = l1;
    let curr2 = l2;
    let carry = 0;

    while (curr1 && curr2) {
        const total = (curr1.val + curr2.val + carry) % 10;
        carry = Math.floor((curr1.val + curr2.val + carry) / 10);
        resultTail.next = new ListNode(total);
        resultTail = resultTail.next;
        curr1 = curr1.next;
        curr2 = curr2.next;
    }

    while (curr1) {
        const total = (curr1.val + carry) % 10;
        carry = Math.floor((curr1.val + carry) / 10);
        resultTail.next = new ListNode(total);
        resultTail = resultTail.next;
        curr1 = curr1.next;
    }

    while (curr2) {
        const total = (curr2.val + carry) % 10;
        carry = Math.floor((curr2.val + carry) / 10);
        resultTail.next = new ListNode(total);
        resultTail = resultTail.next;
        curr2 = curr2.next;
    }

    while (carry > 0) {
        resultTail.next = new ListNode(carry);
        carry = 0;
    }

    return resultHead.next;
};

const testCases = [
    {
        input: {
            arr1: [2,4,3],
            arr2: [5,6,4],
        },
        expected: [7,0,8],
    },
    {
        input: {
            arr1: [0],
            arr2: [0],
        },
        expected: [0],
    },
    {
        input: {
            arr1: [9,9,9,9,9,9,9],
            arr2: [9,9,9,9],
        },
        expected: [8,9,9,9,0,0,0,1],
    },
];

for (const {input: {arr1, arr2}, expected} of testCases) {
    console.log(`Input:     ${arr1}\n           ${arr2}`);
    console.log(`Expected:  ${expected}`);
    const l1 = arrToList(arr1);
    const l2 = arrToList(arr2);
    const actual = listToArr(addTwoNumbers(l1, l2));
    console.log(`Actual:    ${actual}`);
    console.log('='.repeat(50), '\n');
}

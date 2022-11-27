class ListNode {
    constructor(val, next) {
        this.val = val === undefined ? 0 : val;
        this.next = next === undefined ? null : next;
    }
}

function arrToList(arr) {
    if (arr.length === 0) return null;

    const head = new ListNode(arr[0]);
    let tail = head;
    for (let i = 1; i < arr.length; i += 1) {
        tail.next = new ListNode(arr[i]);
        tail = tail.next;
    }

    return head;
}

function listToArr(head) {
    if (!head) return [];

    const arr = [];
    let curr = head;
    while (curr) {
        arr.push(curr.val);
        curr = curr.next;
    }

    return arr;
}

module.exports = {
    ListNode,
    arrToList,
    listToArr,
};

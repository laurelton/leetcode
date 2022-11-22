class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    add(node) {
        if (!this.head) {
            this.head = node;
            this.tail = node;
        } else {
            this.tail.next = node;
            this.tail = node;
        }
    }

    get() {
        let val = null;
        if (this.head) {
            val = this.head.val;
            if (this.head === this.tail) {
                this.tail = null;
            }
            let next = this.head.next;
            this.head.next = null;
            this.head = next;
        }

        return val;
    }
}

/**
 * @param {number} k
 */
var MyCircularQueue = function(k) {
    this.maxLen = k;
    this.currLen = 0;
    this.values = new LinkedList();
};

/** 
 * @param {number} value
 * @return {boolean}
 */
MyCircularQueue.prototype.enQueue = function(value) {
    if (this.isFull()) return false;
    
    const node = new Node(value);
    this.values.add(node);
    this.currLen += 1;
    
    return true;
};

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.deQueue = function() {
    if (this.isEmpty()) return false;
    
    this.values.get();
    this.currLen -= 1;
    
    return true;
};

/**
 * @return {number}
 */
MyCircularQueue.prototype.Front = function() {
    if (this.isEmpty()) return -1;

    return this.values.head.val;
};

/**
 * @return {number}
 */
MyCircularQueue.prototype.Rear = function() {
    if (this.isEmpty()) return -1;

    return this.values.tail.val;
};

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.isEmpty = function() {
    return this.currLen === 0;
};

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.isFull = function() {
    return this.currLen === this.maxLen;
};

/** 
 * Your MyCircularQueue object will be instantiated and called as such:
 * var obj = new MyCircularQueue(k)
 * var param_1 = obj.enQueue(value)
 * var param_2 = obj.deQueue()
 * var param_3 = obj.Front()
 * var param_4 = obj.Rear()
 * var param_5 = obj.isEmpty()
 * var param_6 = obj.isFull()
 */

const queue = new MyCircularQueue(3);
queue.enQueue(1);
queue.enQueue(2);
queue.enQueue(3);
queue.enQueue(4);
console.log(queue.Rear());
console.log(queue.isFull());
queue.deQueue();
queue.enQueue(4);
console.log(queue.Rear());

var MyLinkedList = function() {
    this.head = null;
    this.tail = null;
    this.length = 0;    
};

/** 
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.get = function(index) {
    if (index < 0) return -1;

    let curr = this.head;
    let currIndx = 0;

    while (curr) {
        if (currIndx === index) {
            return curr.val;
        } else {
            curr = curr.next;
            currIndx += 1;
        }
    }

    return -1;
};

/** 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function(val) {
    if (!this.head) {
        this.head = {val, next: null},
        this.tail = this.head;
    } else {
        const node = {val, next: this.head}
        this.head = node;
    }
    this.length += 1;

    return;
};

/** 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function(val) {
    if (!this.tail) {
        this.addAtHead(val);
    } else {
        this.tail.next = {val, next: null};
        this.tail = this.tail.next;
        this.length += 1;
    }

    return;
};

/** 
 * @param {number} index 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function(index, val) {
    if (index < 0) return;
    if (index === 0) return this.addAtHead(val);
    if (index === this.length) return this.addAtTail(val);

    let curr = this.head;
    let currIndx = 0;
    let node = {val, next:null}; 

    while (curr) {
        if (currIndx === index - 1) {
            node.next = curr.next;
            curr.next = node;
            this.length += 1;
            break;
        } else {
            curr = curr.next;
            currIndx += 1;
        }
    }
    
    return;
};

/** 
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function(index) {
    if (index < 0) return;

    if (index === 0) {
        this.head = this.head.next;
    } else {
        let curr = this.head;
        let currIndx = 0;

        while (curr && curr.next) {
            if (currIndx === index - 1) {
                curr.next = curr.next.next;
                this.length -= 1;
                if (currIndx === this.length - 1) {
                    this.tail = curr;
                }
                break;
            } else {
                curr = curr.next;
                currIndx += 1;
            }
        }
    }

    return;
};

/** 
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */
class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    //Insert first node
    insertFirst(data) {
        let node = new Node(data);

        if (!this.head) {
            this.head = node;
            this.tail = this.head;
        } else {
            node.next = this.head;
            this.head = node;
        }
        return this;
    }

    //Insert last node
    insertLast(data) {
        let node = new Node(data);
        if (!this.head) {
            this.head = node;
            this.tail = this.head;
        } else {
            this.tail.next = node;
            this.tail = node;
        }
        return this;
    }

    // Insert at index
    insertAt(index, data) {
        // If index is out of range
        if (index < 0) {
            return false;
        }

        if (index === 0) {
            return this.insertFirst(data);
        }

        const node = new Node(data);

        const pNode = this.get(index - 1);
        const leader = pNode.next;
        pNode.next = node;
        node.next = leader;
        return true;
    }

    // Remove from beginning
    removeBegn() {
        if (!this.head) return;

        let currentHead = this.head;
        this.head = currentHead.next;

        return currentHead;
    }

    // Remove from end
    removeLast() {
        if (!this.head) return;

        let currentHead = this.head;
        let nTail = currentHead;
        while (currentHead.next) {
            nTail = currentHead;
            currentHead = currentHead.next;
        }
        this.tail = nTail;
        this.tail.next = null;

        return currentHead;
    }

    // Remove node data by index
    removeByIndex(index) {
        // Edge cases
        if (index < 0) return;
        // if index is 0
        if (index === 0) return this.removeBegn();

        const pNode = this.get(index - 1);
        const rNode = pNode.next;
        pNode.next = rNode.next;

        return rNode;
    }

    // check if value exists or not
    includes(data) {
        let head = this.head;
        while (head) {
            if (head.data === data) {
                return true;
            }
            head = head.next;
        }

        return false;
    }

    get(index) {
        if (index < 0) return null;
        let counter = 0;
        let currentNode = this.head;
        while (counter !== index) {
            currentNode = currentNode.next;
            counter++;
        }
        return currentNode;
    }

    // Print all data in an array
    print() {
        const array = [];
        let currentHead = this.head;
        while (currentHead) {
            array.push(currentHead.data);
            currentHead = currentHead.next;
        }
        console.log(array);
    }
}

const ll = new SinglyLinkedList();

ll.insertFirst(200);
ll.insertFirst(100);

ll.insertLast(300);
ll.insertLast(400);

ll.print(); // [ 100, 200, 300, 400 ]

ll.removeBegn();
ll.print(); // [ 200, 300, 400 ]

ll.removeLast();
ll.print(); // [ 200, 300 ]

ll.insertAt(0, 100);
ll.print(); // [ 100, 200, 300 ]

ll.removeByIndex(2);
ll.print(); // [ 100, 200 ]

console.log(ll.includes(100)); // true
console.log(ll.includes(300)); // false
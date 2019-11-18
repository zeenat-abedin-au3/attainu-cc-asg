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

const list = new SinglyLinkedList();

list.insertFirst(200);
list.insertFirst(150);
list.insertLast(300);
list.insertAt(0, 100);
list.print(); // [ 100, 150, 200, 300 ]


const findMidpoint = list => {
    let slowPt = list.get(0);
    let fastPt = list.get(0);

    while (fastPt.next && fastPt.next.next) {
        slowPt = slowPt.next;
        fastPt = fastPt.next.next;
    }
    return slowPt;
};


console.log(findMidpoint(list).data) // 150


class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class SinglyLL {
    constructor() {
        this.head = null;
    }

    //  add at the end
    unshift(value) {
        const newNode = new Node(value);
        if (!this.head) {
            this.head = newNode
        }
        else {
            newNode.next = this.head;
            this.head = newNode;
        }

    }

    //   Reverse k'th sub list
    reverse(headNode, k) {
        let currentNode = headNode;
        let nextNode = null,
            prevNode = null,
            count = 0;

        while (currentNode && count < k) {
            nextNode = currentNode.next;
            currentNode.next = prevNode;
            prevNode = currentNode;
            currentNode = nextNode;
            count++;
        }

        if (nextNode !== null) {
            headNode.next = this.reverse(nextNode, k);
        }
        return prevNode;
    }


    printLL() {
        let current = this.head;
        const array = [];
        while (current) {
            array.push(current.value);
            current = current.next;
        }
        console.log(array);
        console.log("Print Done");
    }
}

const list = new SinglyLL();

list.unshift(8);
list.unshift(7);
list.unshift(6);
list.unshift(5);
list.unshift(4);
list.unshift(3);
list.unshift(2);
list.unshift(1);

list.printLL();
list.head = list.reverse(list.head, 3);
list.printLL();





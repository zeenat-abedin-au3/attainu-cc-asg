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
    push(value) {
        const newNode = new Node(value);
        newNode.next = this.head;
        this.head = newNode;
    }

    //   Reverse k'th sub list
    alternateReverse(headNode, k) {
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

        if (headNode) {
            headNode.next = currentNode;
        }

        count = 0;
        while (count < k - 1 && currentNode) {
            currentNode = currentNode.next;
            count++;
        }

        if (currentNode) {
            currentNode.next = this.alternateReverse(currentNode.next, k);
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

list.push(8);
list.push(7);
list.push(6);
list.push(5);
list.push(4);
list.push(3);
list.push(2);
list.push(1);

list.printLL();
list.head = list.alternateReverse(list.head, 2);
list.printLL();





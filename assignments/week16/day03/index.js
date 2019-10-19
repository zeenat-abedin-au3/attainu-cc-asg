//Stack 

class Stack {
    constructor() {
        this.storage = {}
        this.size = 0
    }

    push(element) {
        this.size++
        this.storage[this.size] = element
    }

    pop() {
        let removed = this.storage[this.size]
        delete this.storage[this.size]
        this.size--
        return removed
    }
}

const myStack = new Stack()

myStack.push('dog')
myStack.push('cat')
myStack.push('bear')

myStack.pop()

console.log(myStack)



//Queue

class Queue {
    constructor() {
        this.storage = {}
        this.head = 0
        this.tail = 0
    }

    enqueue(element) {
        this.storage[this.tail] = element
        this.tail++
    }

    dequeue() {
        let removed = this.storage[this.head]
        delete this.storage[this.head]
        this.head++
        return removed
    }
}


const queue = new Queue()

queue.enqueue('seahorse')
queue.enqueue('dolphin')
queue.enqueue('whale shark')

queue.dequeue()

console.log(queue)
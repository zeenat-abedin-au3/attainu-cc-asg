class Heap {
    constructor(compareFun) {
        this.heap = [];

        if (compareFun)
            this.compareFun = compareFun;
        else
            this.compareFun = this.defaultCompre;
    }

    defaultCompre(a, b) {
        return a < b;
    }

    addToHeap(value) {
        this.heap.push(value);
        this.heapifyUp();
    }

    heapifyUp(index = this.heap.length - 1) {
        let currentIndex = index;
        while (currentIndex >= 0) {
            let parentIndex = Math.floor((currentIndex - 1) / 2);
            if (parentIndex >= 0 && this.compareFun(this.heap[parentIndex], this.heap[currentIndex])) {
                this.swap(currentIndex, parentIndex);
                currentIndex = parentIndex;
            }
            else {
                break;
            }
        }
    }

    getLeftChildIndex(currentIndex) {
        return currentIndex * 2 + 1
    }
    heapifyDown(index = 0) {
        let currentIndex = index;
        let indexToSwap;
        while (currentIndex <= this.heap.length - 1) {
            let leftChildIndex = this.getLeftChildIndex(currentIndex);
            let rightChildIndex = currentIndex * 2 + 2;
            if (leftChildIndex <= this.heap.length - 1)
                indexToSwap = leftChildIndex;
            if (rightChildIndex <= this.heap.length - 1 && this.compareFun(this.heap[leftChildIndex], this.heap[rightChildIndex]))
                indexToSwap = rightChildIndex;
            if (indexToSwap && this.compareFun(this.heap[currentIndex], this.heap[indexToSwap]))
                this.swap(currentIndex, indexToSwap);
            else
                break;
            currentIndex = indexToSwap;
        }
    }

    find(item) {
        for (var i = 0; i < this.heap.length; i++)
            if (this.heap[i] == item)
                break;
        return i;
    }

    remove(item) {
        let index = this.find(item);
        if (this.heap.length === 0)
            return null;
        if (this.heap.length === 1)
            return this.heap.pop();
        this.heap[index] = this.heap.pop();
        this.heapifyDown();
    }

    swap(i, j) {
        let temp = this.heap[i];
        this.heap[i] = this.heap[j];
        this.heap[j] = temp;
    }


}

class PriorityQueue extends Heap {
    constructor() {
        let compare = function (a, b) {
            return this.priorities[a] < this.priorities[b];
        }
        super(compare);
        this.priorities = {};
    }

    add(item, priority = 0) {
        this.priorities[item] = priority;
        super.addToHeap(item);
    }

    remove(item) {
        super.remove(item);
        delete this.priorities[item];
    }

    changePriority(item, priority = 0) {
        super.remove(item);
        this.add(item, priority);
    }
}

let pq = new PriorityQueue();
pq.add("A", 11);
pq.add("B", 12);
pq.add("C", 13);
pq.add("D", 20);
pq.add("F", 41);
console.log(pq)
pq.remove("C");
console.log(pq)
pq.changePriority("D", 15);
console.log(pq)

class MaxHeap {
    constructor() {
        this.heap = [];
    }

    // add function to add the elements to heap 
    add(value) {
        this.heap.push(value);
        this.heapifyUp();
    }

    heapifyUp() {
        let currentIndex = this.heap.length - 1;
        let parentIndex;
        while (currentIndex > 0) {
            parentIndex = Math.floor((currentIndex - 1) / 2);
            if (this.heap[currentIndex] > this.heap[parentIndex]) {
                this.swap(currentIndex, parentIndex);
            }
            else {
                break;
            }
            currentIndex = parentIndex;
        }
    }
    swap(i, j) {
        let temp = this.heap[i];
        this.heap[i] = this.heap[j];
        this.heap[j] = temp;
    }
}


const findLargest = (array, k) => {
    let heap = new MaxHeap([])
    array.forEach(item => {
        heap.add(item);
    });
    return heap.heap.slice(0, k);
};

console.log(findLargest([3, 1, 5, 12, 2, 11], 3))

console.log(findLargest([5, 12, 11, -1, 12], 3))
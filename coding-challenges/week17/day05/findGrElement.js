class Stack {
    constructor() {
        this.items = [];
        this.length = 0;
    }
    push(value) {
        this.items.push(value);
        this.length++;
    }
    pop() {
        if (!this.items.length) return undefined;
        this.length--;
        return this.items.pop();
    }
}

const nextGreaterEl = array => {
    const stack = new Stack();
    let element = 0;
    let next = 0;
    const output = {};

    //push the first element to stack
    stack.push(array[0]);

    for (let i = 1; i < array.length; i++) {
        next = array[i];

        if (stack.length) {
            element = stack.pop();
            while (element < next) {
                output[element] = next;

                if (!stack.length) break;

                element = stack.pop();
            }
            if (element > next) {
                stack.push(element);
            }
        }

        stack.push(next);
    }

    while (stack.length) {
        element = stack.pop();
        next = -1;
        output[element] = next;
    }

    return output;
};

const arr = [3, 7, 12, 32];
console.log(nextGreaterEl(arr)); // { '3': 7, '7': 12, '12': 32, '32': -1 }




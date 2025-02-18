export class Stack {
    constructor() {
        this.stack = []; // Internal array to store stack items
    }

    push(item) {
        this.stack.push(item); // Add an item to the top of the stack
    }

    pop() {
        return this.stack.pop(); // Remove and return the top item
    }

    peek() {
        return this.stack[this.stack.length - 1]; // View the top item without removing it
    }

    isEmpty() {
        return this.stack.length === 0; // Check if the stack is empty
    }
}
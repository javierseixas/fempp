class Stack {
    constructor() {
        this.top = -1;
        this.items = {};
    }

    get peek() {
        return this.items[this.top];
    }

    push(item) {
        this.top++;
        this.items[this.top] = item;
    }

    pop() {
        if (this.top === -1) {
            throw new Error('Stack is empty');
        }
        const item = this.items[this.top];
        delete this.items[this.top];
        this.top--;
        return item;
    }
}

module.exports = Stack;

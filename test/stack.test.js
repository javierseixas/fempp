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

describe('My Strack', () => {

    let stack;

    beforeEach(() => {
        stack = new Stack();
    });


    it('is created empty', () => {
        expect(stack.top).toBe(-1);
        expect(stack.items).toEqual({});
    });

    it('can push to the top', () => {
        stack.push(1);
        expect(stack.top).toBe(0);
        expect(stack.peek).toBe(1);
    });


    it('can pop off', () => {
        stack.push(1);
        stack.push(2);
        expect(stack.peek).toBe(2);
        stack.pop();
        expect(stack.peek).toBe(1);
    });
    
    it('throws when popping empty stack', () => {
        expect(() => stack.pop()).toThrow('Stack is empty');
    });
})
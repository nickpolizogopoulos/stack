
const _stack = new WeakMap();

class Stack {
    constructor(){
        _stack.set(this, []);
    }

    add(item){
    _stack.get(this).push(item);
    }

    remove(){ 
    const stack = _stack.get(this);
    if (stack.length === 0) return 'The Stack is empty';
    return stack.pop();
    }

    last(){
    const stack = _stack.get(this);
    if (stack.length === 0) return 'The Stack is empty';
    return stack[stack.length - 1];
    }

    count() {
        return _stack.get(this).length;
    }
}

let s = new Stack();
s.add(1);



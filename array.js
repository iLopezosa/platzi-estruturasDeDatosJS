class MyArray {
    constructor() {
        this.length = 0;
        this.data = {};
    }

    get(index) {
        if (this.length <= index)
            throw new Error("Index Out Of Bounds")
        return this.data[index];
    }

    push(item) {
        this.data[this.length] = item;
        this.length++;
        return this.toString();
    }

    pop() {
        if (this.length <= 0)
            throw new Error("Empty array cannot pop")
        const item = this.data[this.length - 1];
        delete this.data[this.length - 1];
        this.length--;
        return item;
    }

    delete(index) {
        if (this.length <= index)
            throw new Error("Index Out Of Bounds")
        const item = this.data[index];
        this.shiftIndex(index);
        return item;
    }

    shiftIndex(index) {
        if (this.length <= index)
            throw new Error("Index Out Of Bounds")
        for(let i = index; i < this.length - 1; i++) {
            this.data[i] = this.data[i + 1];
        }
        delete this.data[this.length - 1];
        this.length--;
    }

    toString() {
        return Object.values(this.data);
    }
}

const myArray = new MyArray();

console.log(myArray.push('Jose'));
console.log(myArray.push('Nacho'));
console.log(myArray.get(0));
console.log(myArray.get(1));
myArray.delete(5)
console.log(myArray.toString());
console.log(myArray.pop());
console.log(myArray.pop());
console.log(myArray.toString());
console.log(myArray.push('Jose'));
console.log(myArray.push('Nacho'));
console.log(myArray.push('Jose2'));
console.log(myArray.push('Nacho2'));
console.log(myArray.delete(0));
console.log(myArray.toString());
console.log(myArray.delete(1));
console.log(myArray.toString());

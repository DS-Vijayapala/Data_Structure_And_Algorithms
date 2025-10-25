
class HashTable {
    constructor(size = 4) {
        this.keyMap = new Array(size);
    }

    _hash(key) {
        let total = 0;
        const PRIME = 31;
        for (let i = 0; i < Math.min(key.length, 100); i++) {
            let char = key[i];
            let value = char.charCodeAt(0) - 96;
            total = (total * PRIME + value) % this.keyMap.length;
        }
        return total;
    }

    set(key, value) {
        let index = this._hash(key);
        if (!this.keyMap[index]) this.keyMap[index] = [];
        this.keyMap[index].push([key, value]);
    }

    get(key) {
        let index = this._hash(key);
        if (this.keyMap[index]) {
            for (let pair of this.keyMap[index]) {
                if (pair[0] === key) return pair[1];
            }
        }
        return undefined;
    }

    keys() {
        const keysArr = [];
        for (let bucket of this.keyMap) {
            if (bucket) {
                for (let [key] of bucket) {
                    keysArr.push(key);
                }
            }
        }
        return keysArr;
    }

    values() {
        const valuesSet = new Set();
        for (let bucket of this.keyMap) {
            if (bucket) {
                for (let [, value] of bucket) {
                    valuesSet.add(value);
                }
            }
        }
        return Array.from(valuesSet);
    }
}

// Example usage:

const ht = new HashTable();
ht.set("name", "Alice");
ht.set("age", 25);
ht.set("city", "Colombo");
ht.set("nickname", "Alice"); // duplicate value

console.log("Keys:", ht.keys());   // ["name", "age", "city", "nickname"]
console.log("Values:", ht.values()); // ["Alice", 25, "Colombo"]

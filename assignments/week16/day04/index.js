class HashTable {
    constructor(size) {
        this.keyMap = new Array(size);
    }

    hash(key) {
        let total = 0;
        let primeNum = 31;
        for (let i = 0; i < key.length; i++) {
            let value = key[i].charCodeAt(0) - 96;
            total = (total * primeNum + value) % this.keyMap.length;
        }
        return total;
    }

    set(key, value) {
        let index = this.hash(key);
        if (!this.keyMap[index]) {
            this.keyMap[index] = [];
        }
        this.keyMap[index].push([key, value]);
    }

    get(key) {
        let index = this.hash(key);
        if (this.keyMap[index]) {
            for (let i = 0; i < this.keyMap[index].length; i++) {
                if (this.keyMap[index][i][0] == key) {
                    return this.keyMap[index][i][1];
                }
            }
        }
        return undefined;
    }

    delete(key) {
        let index = this.hash(key);
        if (this.keyMap[index]) {
            for (let i = 0; i < this.keyMap[index].length; i++) {
                if (this.keyMap[index][i][0] == key) {
                    this.keyMap[index].splice(i, 1);
                    return this.keyMap;
                }
            }
        }
        return undefined;
    }
}


let ht = new HashTable(5);

ht.set("maroon", "#800000");
ht.set("yellow", "#FFFF00")
ht.set("olive", "#808000")
ht.set("salmon", "#F08080")
ht.set("plum", "#DDA0DD")


console.log(ht)


ht.delete("olive")
console.log(ht)



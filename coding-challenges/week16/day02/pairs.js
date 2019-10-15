// item1 + item2 = target
//item2 = target - item1


function pairs(target, array) {
    let map = {}
    let out = []

    for (let i = 0; i < array.length; i++) {
        const element = array[i];

        if (map[target - element]) {
            out.push([(target - element), element])
        } else {
            map[element] = 1
        }
    }
    return out
}

console.log(pairs(10, [1, 2, 4, 5, 6, 10, 12]))
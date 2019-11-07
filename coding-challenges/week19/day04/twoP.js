const lengthOfUnique = array => {
    const length = array.length
    if (length === 0) return 0

    let first = 0
    for (let second = 1; second < length; second++) {
        if (array[first] !== array[second]) {
            first++
            array[first] = array[second]
        }
    }
    return first + 1
}

console.log(lengthOfUnique([2, 3, 3, 3, 6, 9, 9]))
console.log(lengthOfUnique([2, 2, 2, 11]))

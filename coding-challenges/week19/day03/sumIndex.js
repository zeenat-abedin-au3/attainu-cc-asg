const getPairIndex = (array, targetNum) => {
    let start = 0
    let end = array.length - 1

    while (start < end) {
        let sum = array[start] + array[end]
        if (sum === targetNum) return [start, end]
        else if (sum > targetNum) end--
        else start++
    }
}


console.log(getPairIndex([1, 2, 3, 4, 6], 6))
console.log(getPairIndex([2, 5, 9, 11], 11))

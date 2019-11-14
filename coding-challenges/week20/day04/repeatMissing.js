const getTwoValues = array => {
    const result = []
    for (let value of array) {
        value = Math.abs(value)
        if (array[value - 1] > 0) {
            array[value - 1] = -array[value - 1]
        } else {
            result.push(value)
        }
    }
    for (let i = 0; i < array.length; i++) {
        if (array[i] > 0) {
            result.push(i + 1)
            break
        }
    }
    return result
}

console.log(getTwoValues([3, 1, 2, 5, 2]))
console.log(getTwoValues([3, 1, 2, 3, 6, 4])) 

const binaryCount = (dividend) => {
    let output = ''
    let remainder, count = 1;
    while (dividend > 1) {
        remainder = dividend % 2
        if (remainder === 1) count++
        output = remainder + output
        dividend = (dividend - remainder) / 2
    }
    return count
}

console.log(binaryCount(1234)) 
const reverseDigit = number => {
    const maxInt = Math.pow(2, 31) - 1
    const minInt = Math.pow(-2, 31)
    let result = 0;
    let rem = 0;

    while (number !== 0) {
        rem = number % 10
        result = result * 10 + rem
        number = parseInt(number / 10)
        if (result > maxInt || result < minInt) {
            return 0
        }
    }
    return result
}

console.log(reverseDigit(123))
console.log(reverseDigit(-321))
console.log(reverseDigit(120))
console.log(reverseDigit(-323943232322))

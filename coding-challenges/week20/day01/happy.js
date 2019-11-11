const checkHappy = function (num, counter = 0) {
    result = false
    if (counter < 8) {
        let array = num.toString().split('').map(num => num * num)
        let sum = array.reduce((a, b) => a + b, 0)

        if (sum === 1) {
            return result = true
        } else {
            counter++
            checkHappy(sum, counter)
        }
    }
    return result
}

console.log(checkHappy(23))
console.log(checkHappy(59))
console.log(checkHappy(19))
console.log(checkHappy(93))
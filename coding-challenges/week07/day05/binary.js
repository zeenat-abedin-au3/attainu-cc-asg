//definition
function binary(dividend){
    var output = ''
    var remainder
    while (dividend > 1) {
        remainder = dividend % 2
        output = remainder + output
        dividend = (dividend - remainder) / 2
    }
    return dividend + output
}

console.log(binary(17))
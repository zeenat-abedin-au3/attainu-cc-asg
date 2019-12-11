
const iqTest = numbers => {
    numbers = numbers.split(" ")
    numbers = numbers.map(value => parseInt(value))

    const oddValues = numbers.filter(value => {
        if (value % 2 !== 0) return value
    })
    const evenValues = numbers.filter(value => {
        if (value % 2 === 0) return value
    })

    let index;
    if (oddValues.length < evenValues.length) {
        index = numbers.indexOf(oddValues[0]) + 1
    }
    else {
        index = numbers.indexOf(evenValues[0]) + 1
    }

    console.log(index)
}

iqTest("2 4 7 8 10")
iqTest("1 2 1 1")

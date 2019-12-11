
const countDuplicates = string => {
    string = string.toLowerCase()

    const obj = {}
    let counter = 0;

    for (let value of string) {
        if (obj[value]) {
            obj[value]++
        }
        else {
            obj[value] = 1
        }
    }

    for (let key in obj) {
        if (obj[key] > 1) {
            counter++
        }
    }

    console.log(counter)
}

countDuplicates("aabBcdea") // 2
countDuplicates("indivisibility") // 1
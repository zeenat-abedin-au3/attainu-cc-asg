function series(number) {
    let out = [number]

    while (number != 1) {
        switch (number % 2) {
            case 0: //even
                number = number / 2
                out.push(number)
                break;
            case 1: //odd
                number = 3 * number + 1
                out.push(number)
                break;
        }
    }
    return out
}
console.log(series(13))
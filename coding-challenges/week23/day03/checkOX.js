const XO = (str) => {
    str = str.toLowerCase();

    let countX = 0, countO = 0;

    for (var i = 0; i < str.length; i++) {
        if (str[i] === 'x') {
            countX++;
        } else if (str[i] === 'o') {
            countO++;
        }
    }

    return countO === countX
}


console.log(XO("ooxx"))
console.log(XO("xooxx"))
console.log(XO("ooxXm"))
console.log(XO("zpzpzpp"))
console.log(XO("zzoo")) 
const findNextSquare = (number) => {
    let sqrt = Math.sqrt(number);
    if (!Number.isInteger(sqrt)) {
        return -1;
    }
    let nextInt = sqrt + 1;
    return nextInt ** 2
}

console.log(findNextSquare(121)) // 144
console.log(findNextSquare(625)) // 676
console.log(findNextSquare(114)) // -1


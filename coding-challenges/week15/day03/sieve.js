const findPrimes = maxNumber => {
    const newArray = [];

    for (let i = 0; i < maxNumber + 1; i++) {
        newArray.push(true);
    }

    newArray[0] = false;
    newArray[1] = false;

    const primesResult = [];

    for (let i = 2; i <= maxNumber; i++) {
        if (newArray[i]) {
            primesResult.push(i);
        }

        for (let nextNumber = 2 * i; nextNumber <= maxNumber; nextNumber += i) {
            newArray[nextNumber] = false;
        }
    }

    return primesResult;
};

console.log(findPrimes(100));

const snakeP = (array) => {
    const row = 4;
    const col = 5;
    const result = []
    for (let i = 0; i < row; i++) {
        if (i % 2 === 0) {
            for (let j = 0; j < col; j++) {
                result.push(array[i][j])
            }
        }
        else {
            for (let j = col - 1; j >= 0; j--) {
                result.push(array[i][j])
            }
        }
    }

    console.log(result)
}

snakeP(
    [
        [10, 20, 30, 40],
        [15, 25, 35, 45],
        [27, 29, 37, 48],
        [32, 33, 39, 50]
    ]
)

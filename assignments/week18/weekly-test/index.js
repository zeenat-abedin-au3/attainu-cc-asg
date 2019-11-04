const isValidSudoku = (board) => {
    let rowSet = new Array(9).fill().map(() => new Set())
    let colSet = new Array(9).fill().map(() => new Set())
    let subSet = new Array(9).fill().map(() => new Set())
    for (let row = 0; row < 9; row++) {
        for (let col = 0; col < 9; col++) {
            const currentValue = board[row][col]
            const subIdx = Math.floor(row / 3) * 3 + Math.floor(col / 3)
            if (currentValue === ".") continue
            if (rowSet[row].has(currentValue) || colSet[col].has(currentValue) || subSet[subIdx].has(currentValue)) {
                return false
            }
            rowSet[row].add(currentValue)
            colSet[col].add(currentValue)
            subSet[subIdx].add(currentValue)
        }
    }
    return true
}

const myArray = [
    ["5", "3", ".", ".", "7", ".", ".", ".", "."],
    ["6", ".", ".", "1", "9", "5", ".", ".", "."],
    [".", "9", "8", ".", ".", ".", ".", "6", "."],
    ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
    ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
    ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
    [".", "6", ".", ".", ".", ".", "2", "8", "."],
    [".", ".", ".", "4", "1", "9", ".", ".", "5"],
    [".", ".", ".", ".", "8", ".", ".", "7", "9"]
]
console.log(isValidSudoku(myArray))

const myArray2 = [
    ["8", "3", ".", ".", "7", ".", ".", ".", "."],
    ["6", ".", ".", "1", "9", "5", ".", ".", "."],
    [".", "9", "8", ".", ".", ".", ".", "6", "."],
    ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
    ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
    ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
    [".", "6", ".", ".", ".", ".", "2", "8", "."],
    [".", ".", ".", "4", "1", "9", ".", ".", "5"],
    [".", ".", ".", ".", "8", ".", ".", "7", "9"]
]
console.log(isValidSudoku(myArray2))

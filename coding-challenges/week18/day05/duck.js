function check_duck(num) {
    if (num[0] === "0")
        return "Not duck"
    if (num.includes("0"))
        return "duck number"
}

const num = "0200223"

console.log(check_duck(num))
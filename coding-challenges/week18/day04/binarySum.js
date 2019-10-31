const addBinary = (string1, string2) => {
    let i = string1.length - 1;
    let j = string2.length - 1;
    let carry = 0;
    let result = "";

    while (i >= 0 || j >= 0) {
        let fst = string1[i] ? string1[i] : '0';
        let snd = string2[j] ? string2[j] : '0';
        result = String(fst ^ snd ^ carry) + result;

        if (fst == snd && fst !== String(carry)) {
            carry = Number(!carry)
        }
        i--;
        j--;
    }
    if (carry) {
        result = carry + result;
    }
    return result;
};


console.log(addBinary('11', '1'))

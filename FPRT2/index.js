// 1

const bitArray = (array, length) => {
    const result = [];
    for (let i = 0; i < length; i++) {
        result.push(array[i]);
    }
    return result;
};

const generateAllBinary = (length, array, i) => {
    const result = [];
    if (i === length) {
        const data = bitArray(array, length);
        console.log(data);
        return result;
    }

    array[i] = 0;
    generateAllBinary(length, array, i + 1);
    array[i] = 1;
    generateAllBinary(length, array, i + 1);
};

const numToBit = num => {
    if (num <= 0) return null
    const array = Array(num).fill(1);
    generateAllBinary(num, array, 0);
};

numToBit(2);

// 3
const checkPairSeq = array => {
    const length = array.length;

    // if the array has only one or no element

    if (length <= 1) {
        return true;
    }

    let result = false;
    for (let i = 0; i < length; i += 2) {
        if (array[i] <= array[i + 1]) {
            result = false;
        } else {
            result = true;
        }
    }
    return result;
};

console.log(checkPairSeq([4, 5, -2, -3, 11, 10, 5, 6, 20])); // true
console.log(checkPairSeq([2, 4, 4, 2, -2, -4, -4, -2])); // false
console.log(checkPairSeq([1, 4, 5])); // true
console.log(checkPairSeq([1, 4, 5])); // true
console.log(checkPairSeq([4, 5, 1])); // true

// 4
/* 
 as set returns only unique element, or if we check the length of unique elements of the given array
 with the actual array
 V8 uses a variant of hash tables that generally have O(1) complexity for Set/Map operations
 https://codereview.chromium.org/220293002/
*/

const isRepeated = array => {
    if (new Set(array).size < array.length) {
        return true;
    }
    return false;
};

console.log(isRepeated([1, 2, 3, 4, 5])); // false
console.log(isRepeated([1, 2, 3, 4, 5, 5])); // true

// 5
/* 
1. iterate till second last
2. check the index of the current array item from( i + 1),
    if it's matched, that means it's already there in the given array
3. break the loop and store that array of item, and return it
*/

const findFirstDuplicate = array => {
    let duplicate = null;
    for (const i = 0; i < array.length - 1; i++) {
        if (array.indexOf(array[i], i + 1) > -1) {
            duplicate = array[i];
            break;
        }
    }
    return duplicate;
};

console.log(findFirstDuplicate([9, 2, 3, 4, 5, 6, 6, 9])); // Output - 9
console.log(findFirstDuplicate([1, 2, 3, 4, 5, 6, 6, 7, 8, 8, 1])); // Output - 1

// 6
const removeDuplicates = string => {
    const result = [];
    for (let str of string) {
        // if the letter of string is matched with last element (last pushed) then remove from result
        if (result[result.length - 1] === str) {
            result.pop();
        } else {
            result.push(str);
        }
    }
    return result.join('');
};

console.log(removeDuplicates('kklmnnmo'));

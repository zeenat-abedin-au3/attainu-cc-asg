const getUniqueValues = arrary => {
    const obj = {};
    for (let i = 0; i < arrary.length; i++) {
        if (obj[arrary[i]]) {
            delete obj[arrary[i]];
        } else {
            obj[arrary[i]] = arrary[i];
        }
    }
    return Object.values(obj);
};
console.log(getUniqueValues([1, 4, 2, 1, 3, 5, 6, 2, 3, 5])); 
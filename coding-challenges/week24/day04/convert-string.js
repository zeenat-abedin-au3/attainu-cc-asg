const duplicateReplace = string => {
    string = string.toLowerCase().split("");
    const obj = {};

    for (let str of string) {
        if (obj[str]) {
            obj[str]++;
        } else {
            obj[str] = 1;
        }
    }
    string = string.map(str => {
        if (obj[str] === 1) {
            return "(";
        } else {
            return ")";
        }
    });
    string = string.join("");
    console.log(string);
};
duplicateReplace("din"); // ((( 
duplicateReplace("recede"); // ()()()
duplicateReplace("Success"); // )())())
duplicateReplace("(( @"); // ))((
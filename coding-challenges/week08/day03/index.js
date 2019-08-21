//smallest number

function min(arr){
    var min = Math.min.apply(Math, arr);
    console.log(min);
}
min([10, 85, 2, 43, 26, 37, 12, 97, 58, 49]);

//largest number

function max(arr){
    var max = Math.max.apply(Math, arr);
    console.log(max);
}
max([10, 85, 2, 43, 26, 37, 12, 97, 58, 49]); 
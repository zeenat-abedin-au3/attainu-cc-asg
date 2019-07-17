function multiplicationTable(){
    var n = parseInt(prompt("Enter n"));
    for (var i = 1; i <= 10; i++){
        console.log(n + " * " + i + " = " + n * i);
    }
}
multiplicationTable();
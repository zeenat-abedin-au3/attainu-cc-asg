//definition
function fibo(num) {
    if (num === 1){
        return 0;
    }
};
var i;
var fibo = []; // Initializing array

fibo[0] = 0;
fibo[1] = 1;
for (i = 2; i <= 10; i++) {
  fibo[i] = fibo[i - 2] + fibo[i - 1];
  console.log(fibo[i]);
}

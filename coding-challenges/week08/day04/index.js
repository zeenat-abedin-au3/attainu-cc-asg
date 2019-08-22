function isPowerOfTwo(number) {
    return( 
      (number & (-number)) == number &&
      (number > 0));
}
  
let two_power_16 = Math.pow(2, 16);
//true 
console.log(isPowerOfTwo(16));
  
let two_power_9 = Math.pow(2, 9);
//false
console.log(isPowerOfTwo(9));
   
   
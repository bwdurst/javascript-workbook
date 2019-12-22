function findGCD(num1, num2, div = 1, gcd = 1) {

  while (div <= (num1 > num2 ? num1 : num2)) {
    if(!(num1 % div) && !(num2 % div)) {
      gcd = div;
    }
    return findGCD(num1, num2, div+1, gcd)
  }
  return gcd;
}

findGCD(25, 20);



//really cool solution I found online. Reminded me that zero returns false.
// var gcd = function(a, b) {
//   if (!b) {
//     return a;
//   }

//   return gcd(b, a % b);
// }
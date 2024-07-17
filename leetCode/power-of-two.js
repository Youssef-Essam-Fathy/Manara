/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function(n) {
  if (n === 0) return false;
  return n === Math.floor(Math.pow(2, Math.round(Math.log2(n))))
};

console.log(isPowerOfTwo(16))




// n = 2^x
// log2(n) = x
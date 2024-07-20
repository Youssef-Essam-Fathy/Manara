/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    s = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase()
    reversedS = s.split('').reverse().join('')
    return s === reversedS;
};

console.log(isPalindrome(' '))
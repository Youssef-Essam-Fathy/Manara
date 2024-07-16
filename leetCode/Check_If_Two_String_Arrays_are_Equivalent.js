/**
 * @param {string[]} word1
 * @param {string[]} word2
 * @return {boolean}
 */
var arrayStringsAreEqual = function(word1, word2) {
    w1 = word1.join('');
    w2 = word2.join('');
    return w1 === w2;
};
// Time complexity: O(n)
// Space complexity: O(1)
console.log(arrayStringsAreEqual(["as", "c"], ["a", "bc"])); // true
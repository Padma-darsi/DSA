/**
 * @param {number[]} nums
 * @return {number}
 */

var sumOfEncryptedInt = function(nums) {
    let sum = 0;

    for (let num of nums) {
        let digits = num.toString().split('');
        let maxDigit = Math.max(...digits);
        let encrypted = Number(maxDigit.toString().repeat(digits.length));

        sum += encrypted;
    }

    return sum;
};
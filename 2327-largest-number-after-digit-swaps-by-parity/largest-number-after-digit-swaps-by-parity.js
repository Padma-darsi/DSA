/**
 * @param {number} num
 * @return {number}
 */


var largestInteger = function(num) {
    let digits = String(num).split("");

    let even = [];
    let odd = [];

    for (let digit of digits) {
        if (Number(digit) % 2 === 0) {
            even.push(digit);
        } else {
            odd.push(digit);
        }
    }

    even.sort((a, b) => b - a);
    odd.sort((a, b) => b - a);

    let e = 0;
    let o = 0;

    for (let i = 0; i < digits.length; i++) {
        if (Number(digits[i]) % 2 === 0) {
            digits[i] = even[e++];
        } else {
            digits[i] = odd[o++];
        }
    }

    return Number(digits.join(""));
};

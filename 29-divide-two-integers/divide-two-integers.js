/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function(dividend, divisor) {

    // Handle overflow
    if (dividend === -2147483648 && divisor === -1) {
        return 2147483647;
    }

    let sign = (dividend > 0) === (divisor > 0) ? 1 : -1;

    let a = Math.abs(dividend);
    let b = Math.abs(divisor);

    let result = 0;

    while (a >= b) {

        let temp = b;
        let multiple = 1;

        // FIX HERE 👇
        while (a >= temp * 2) {
            temp = temp * 2;
            multiple = multiple * 2;
        }

        a -= temp;
        result += multiple;
    }

    return sign * result;
};
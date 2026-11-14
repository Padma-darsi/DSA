/**
 * @param {number} num
 * @return {number}
 */
var maximum69Number = function(num) {
    let numStr = num.toString();

    let index = numStr.indexOf("6");

    if (index !== -1) {
        numStr = numStr.substring(0, index) + "9" + numStr.substring(index + 1);
    }

    return Number(numStr);
};
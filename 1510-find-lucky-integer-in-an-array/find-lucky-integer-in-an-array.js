/**
 * @param {number[]} arr
 * @return {number}
 */

var findLucky = function(arr) {
    let count = new Map();

    for (let num of arr) {
        count.set(num, (count.get(num) || 0) + 1);
    }

    let result = -1;

    for (let [num, freq] of count) {
        if (num === freq) {
            result = Math.max(result, num);
        }
    }

    return result;
};
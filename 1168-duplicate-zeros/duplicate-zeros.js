/**
 * @param {number[]} arr
 * @return {void} Do not return anything, modify arr in-place instead.
 */


var duplicateZeros = function(arr) {
    let result = [];

    for (let num of arr) {
        result.push(num);

        if (num === 0) {
            result.push(0);
        }
    }

    for (let i = 0; i < arr.length; i++) {
        arr[i] = result[i];
    }
};

/**
 * @param {number[][]} matrix
 * @return {number[]}
 */

var luckyNumbers = function(matrix) {
    let result = [];

    for (let i = 0; i < matrix.length; i++) {
        let min = Math.min(...matrix[i]);
        let col = matrix[i].indexOf(min);

        let isMax = true;

        for (let j = 0; j < matrix.length; j++) {
            if (matrix[j][col] > min) {
                isMax = false;
                break;
            }
        }

        if (isMax) {
            result.push(min);
        }
    }

    return result;
};
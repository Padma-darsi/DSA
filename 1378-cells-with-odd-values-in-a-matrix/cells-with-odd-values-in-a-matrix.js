/**
 * @param {number} m
 * @param {number} n
 * @param {number[][]} indices
 * @return {number}
 */


var oddCells = function(m, n, indices) {
    let rows = new Array(m).fill(0);
    let cols = new Array(n).fill(0);

    for (let [r, c] of indices) {
        rows[r]++;
        cols[c]++;
    }

    let count = 0;

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if ((rows[i] + cols[j]) % 2 !== 0) {
                count++;
            }
        }
    }

    return count;
};

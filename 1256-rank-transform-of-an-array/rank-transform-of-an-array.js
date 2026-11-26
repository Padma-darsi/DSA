/**
 * @param {number[]} arr
 * @return {number[]}
 */


var arrayRankTransform = function(arr) {
    let sorted = [...new Set(arr)].sort((a, b) => a - b);

    let map = new Map();

    for (let i = 0; i < sorted.length; i++) {
        map.set(sorted[i], i + 1);
    }

    let result = [];

    for (let num of arr) {
        result.push(map.get(num));
    }

    return result;
};

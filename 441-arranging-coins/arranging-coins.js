/**
 * @param {number} n
 * @return {number}
 */


/**
 * @param {number} n
 * @return {number}
 */
var arrangeCoins = function(n) {
    let left = 1;
    let right = n;
    let answer = 0;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);

        let coinsNeeded = mid * (mid + 1) / 2;

        if (coinsNeeded <= n) {
            answer = mid;
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return answer;
};
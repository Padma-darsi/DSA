/**
 * @param {number[]} gain
 * @return {number}
 */

var largestAltitude = function(gain) {
    let altitude = 0;
    let maxAltitude = 0;

    for (let num of gain) {
        altitude += num;
        maxAltitude = Math.max(maxAltitude, altitude);
    }

    return maxAltitude;
};
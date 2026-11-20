/**
 * @param {number[]} nums
 * @return {number[]}
 */

var sortedSquares = function(nums) {
    let left = 0;
    let right = nums.length - 1;

    let index = nums.length - 1;
    let result = new Array(nums.length);

    while (left <= right) {
        let leftsquare = nums[left] * nums[left];
        let rightsquare = nums[right] * nums[right];

        if (leftsquare > rightsquare) {
            result[index] = leftsquare;
            left++;
        } else {
            result[index] = rightsquare;
            right--;
        }

        index--;
    }

    return result;
};
/**
 * @param {number[]} nums
 * @return {number[]}
 */


var applyOperations = function(nums) {

    // Step 1: Apply operations
    for (let i = 0; i < nums.length - 1; i++) {
        if (nums[i] === nums[i + 1]) {
            nums[i] *= 2;
            nums[i + 1] = 0;
        }
    }

    // Step 2: Move zeros to the end
    let result = [];

    for (let num of nums) {
        if (num !== 0) {
            result.push(num);
        }
    }

    while (result.length < nums.length) {
        result.push(0);
    }

    return result;
};

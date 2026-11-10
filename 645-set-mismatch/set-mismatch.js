/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findErrorNums = function(nums) {
    let set = new Set();
    let duplicate = -1;
    let missing = -1;

    // Step 1: Find the duplicate number
    for (let i = 0; i < nums.length; i++) {
        if (set.has(nums[i])) {
            duplicate = nums[i];
        } else {
            set.add(nums[i]);
        }
    }

    // Step 2: Find the missing number
    for (let i = 1; i <= nums.length; i++) {
        if (!set.has(i)) {
            missing = i;
            break;
        }
    }

    return [duplicate, missing];
};
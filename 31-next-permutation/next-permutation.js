/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function(nums) {
    let n = nums.length;

    // Step 1: Find breakpoint
    let i = n - 2;
    while (i >= 0 && nums[i] >= nums[i + 1]) {
        i--;
    }

    // Step 2: If breakpoint exists
    if (i >= 0) {
        let j = n - 1;

        // Find next greater element
        while (nums[j] <= nums[i]) {
            j--;
        }

        // Swap
        [nums[i], nums[j]] = [nums[j], nums[i]];
    }

    // Step 3: Reverse right part
    reverse(nums, i + 1, n - 1);
};

// Helper function
function reverse(arr, start, end) {
    while (start < end) {
        [arr[start], arr[end]] = [arr[end], arr[start]];
        start++;
        end--;
    }
}
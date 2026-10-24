

var intersect = function(nums1, nums2) {
    const count = new Map();
    const result = [];

    // Step 1: Count occurrences of each number in nums1
    for (let num of nums1) {
        count.set(num, (count.get(num) || 0) + 1);
    }

    // Step 2: Find matching numbers in nums2
    for (let num of nums2) {
        if (count.get(num) > 0) {
            result.push(num);
            count.set(num, count.get(num) - 1);
        }
    }

    return result;
};

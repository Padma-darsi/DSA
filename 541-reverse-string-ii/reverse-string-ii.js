/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reverseStr = function(s, k) {

    // Strings are immutable in JavaScript, so convert the string
    // into an array to modify its characters.
    let arr = s.split("");

    // Traverse the array in steps of 2 * k.
    // In every 2 * k block, we reverse only the first k characters.
    for (let start = 0; start < arr.length; start += 2 * k) {

        // Set the left pointer to the starting index of the current block.
        let left = start;

        // Set the right pointer to the last index of the first k characters.
        // Math.min() ensures that the right pointer does not exceed the array's last index.
        let right = Math.min(start + k - 1, arr.length - 1);

        // Reverse the selected k characters using the two-pointer approach.
        while (left < right) {

            // Swap the characters at the left and right pointers.
            [arr[left], arr[right]] = [arr[right], arr[left]];

            // Move the left pointer forward and the right pointer backward.
            left++;
            right--;
        }
    }

    // Convert the modified character array back into a string and return it.
    return arr.join("");
};
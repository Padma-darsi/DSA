/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    let result = [];

    function backtrack(index, current, target) {
        // Base case
        if (target === 0) {
            result.push([...current]);
            return;
        }

        if (index === candidates.length || target < 0) {
            return;
        }

        // ✅ Pick (same index because reuse allowed)
        current.push(candidates[index]);
        backtrack(index, current, target - candidates[index]);

        // Backtrack (undo)
        current.pop();

        // ❌ Not Pick (move to next index)
        backtrack(index + 1, current, target);
    }

    backtrack(0, [], target);
    return result;
};
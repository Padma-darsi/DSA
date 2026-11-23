
var lastVisitedIntegers = function(nums) {
    let seen = [];
    let ans = [];
    let k = 0;

    for (let num of nums) {
        if (num > 0) {
            seen.unshift(num);
            k = 0;
        } else {
            k++;

            if (k <= seen.length) {
                ans.push(seen[k - 1]);
            } else {
                ans.push(-1);
            }
        }
    }

    return ans;
};

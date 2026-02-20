/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    if (strs.length === 0) return "";

    strs.sort();

    let first = strs[0];
    let last = strs[strs.length - 1];
    let prefix = "";

    for (let i = 0; i < first.length; i++) {
        if (first[i] === last[i]) {
            prefix += first[i];
        } else {
            break;
        }
    }

    return prefix;
};
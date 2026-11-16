/**
 * @param {string[]} words
 * @param {number} k
 * @return {string[]}
 */

var topKFrequent = function(words, k) {
    let map = new Map();

    // Step 1: Count word frequencies
    for (let word of words) {
        map.set(word, (map.get(word) || 0) + 1);
    }

    // Step 2: Convert Map entries into an array
    let sortedWords = Array.from(map.entries());

    // Step 3: Sort by frequency, then lexicographical order
    sortedWords.sort((a, b) => {
        if (b[1] !== a[1]) {
            return b[1] - a[1];
        }
        return a[0].localeCompare(b[0]);
    });

    // Step 4: Return the first k words
    return sortedWords.slice(0, k).map(item => item[0]);
};
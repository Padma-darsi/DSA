/**
 * @param {string} sentence
 * @return {boolean}
 */
var checkIfPangram = function(sentence) {
    
       let alphabet = "abcdefghijklmnopqrstuvwxyz";

    for (let char of alphabet) {
        if (!sentence.includes(char)) {
            return false;
        }
    }

    return true;
};
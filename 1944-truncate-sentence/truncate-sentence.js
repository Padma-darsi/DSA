/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var truncateSentence = function(s, k) {
    
    let words=s.split(" ");

    let result="";

    for(let i=0;i<k;i++)
    {
        result+=words[i] + " ";
    }
        return result.trim();
};
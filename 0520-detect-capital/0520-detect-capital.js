/**
 * @param {string} word
 * @return {boolean}
 */
var detectCapitalUse = function(word) {
    for(let letter of word){
        if(word == word.toUpperCase() || word == word.toLowerCase() || word == word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()){
            return true;
        }
    }
    return false;
    
};

console.log(detectCapitalUse("Leetcode"));

var reverseWords = function(s) {
    
    let word = s.split(" ");
    let reverse = "";
    
    for(let i=0; i<word.length; i++){
        reverse+=word[i].split("").reverse().join("")

        if (i < word.length - 1) {
            reverse += " ";
        }
    }

    return reverse;
};

console.log(reverseWords("Let's take LeetCode contest"))
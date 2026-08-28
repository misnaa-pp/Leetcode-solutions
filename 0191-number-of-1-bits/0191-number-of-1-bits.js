var hammingWeight = function(n) {

    let count = 0;
    let setBits = n.toString(2);

    for(let i=0; i<=setBits.length; i++){
        if(setBits[i] === "1"){
            count++;
        }
    }
    return count;
    
};

console.log(hammingWeight(11))
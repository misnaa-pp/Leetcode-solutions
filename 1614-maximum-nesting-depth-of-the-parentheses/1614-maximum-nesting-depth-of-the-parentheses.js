function maxDepth(s){
    let depth = 0;
    let maxDepth = 0;

    for (let ch of s ){
        if(ch=="("){
            depth++;

            maxDepth = Math.max(maxDepth,depth);
        }else if (ch==")"){
            depth--;
        }
    }
    return maxDepth;
    
}

console.log(maxDepth("(1+(2*3)+((8)/4))+1"));
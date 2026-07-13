function commonFactors(a,b){
    let sum = 0;
    for(i=1; i<=1000; i++){
        if(a % i == 0 &&  b % i == 0){
            sum++;   
        }
    }
     return sum;
}

console.log(commonFactors(25,30));
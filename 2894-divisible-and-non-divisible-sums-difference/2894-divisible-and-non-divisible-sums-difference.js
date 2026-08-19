
var differenceOfSums = function(n, m) {
    let sum1 =0;
    let sum2 = 0;
    for (let i=1;i<=n;i++){
        if(i % m != 0){
            sum1+=i;
        }
    }
    for (let j=1;j<=n;j++){
        if(j % m === 0){
            sum2+=j;
        }
    }

    return sum1-sum2;
    
};

console.log(differenceOfSums(5,6))
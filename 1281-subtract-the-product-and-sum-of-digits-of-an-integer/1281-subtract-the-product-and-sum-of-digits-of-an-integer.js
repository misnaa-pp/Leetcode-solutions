function subtractProductAndSum(num){
    let product = 1;
    let sum = 0;

    for(let digits of String(num)){
        product*=Number(digits);
        sum+=Number(digits);
        
    }

    return product - sum;
}

console.log(subtractProductAndSum("234"));
function sumOfTheDigitsOfHarshadNumber(x){
    
    let sum = 0;

    for(let num of String(x)){
        sum+=Number(num);
    }
    if(x % sum === 0){
        return sum;
        }

    return -1;
}

console.log(sumOfTheDigitsOfHarshadNumber(56));
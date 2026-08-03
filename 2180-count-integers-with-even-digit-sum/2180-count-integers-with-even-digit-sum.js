function countEven(num){

    let count = 0;
    for(let i=1; i<=num; i++){

        let n = i;
        let sum = 0;

        while(n>0){
            let digit = n % 10;
            sum+=digit;
            n = Math.floor(n / 10);
        }
        if(sum % 2 === 0){
            count++;
        }
    }
    return count;
}

console.log(countEven(123));
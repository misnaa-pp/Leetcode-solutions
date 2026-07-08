function averageValue(nums){

    let sum = 0;
    let count=0;

    for(let x of nums){
        if (x % 2 == 0 && x % 3 ==0){
            sum+=x;
            count++;

        }

    };

    return count === 0 ? 0 : Math.floor(sum / count);
}
nums = [1,3,6,10,12,15];
console.log(averageValue(nums));
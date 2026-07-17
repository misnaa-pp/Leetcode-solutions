function numberGame(nums){
    nums.sort((a,b) => a-b );

    let arr = [];

    for(i=0;i<nums.length;i+=2){
        arr.push(nums[i+1]);
        arr.push(nums[i]);
    }
    return arr;
}

let nums = [5,4,2,3];
console.log(numberGame(nums));
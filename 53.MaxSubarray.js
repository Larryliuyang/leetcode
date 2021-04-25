var maxSubArray = function(nums) {
    if(nums?.length === 0) return 0;
    let temp = nums[0], sum = nums[0];
    for (let i = 1; i < nums.length; i++) {
        temp =  Math.max(temp + nums[i], nums[i]);
        sum = Math.max(temp, sum)
    }
    
    return sum;
};
var findMaxLength = function(nums) {
    let res = 0;
    let preSum = 0;
    let map = new Map();
    map.set(0, -1);
    for (let i = 0 ; i< nums.length; i++) {
        preSum += (nums[i] == 0) ? -1 :1;
        if (map.get(preSum) != null) {
            res = Math.max(res, i - map.get(preSum));
        }else{
            map.set(preSum, i);
        }
    }
    return res;
};
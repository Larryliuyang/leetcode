var threeSumClosest = function(num, target) {
    const nums = num.sort((a, b) => a - b)
    let res = num[0] + num[1] + num[num.length - 1];
    for (let i = 0; i < nums.length-2;i++) {
       
        let l = i + 1, r = nums.length - 1;
        while (l < r) {
            let sum =  nums[i] + nums[l] + nums[r];
            if (sum > target) {
               r--
            }else {
                l++;
            }
            
            if (Math.abs(sum - target) < Math.abs(res - target)) {
                res = sum
            }
        }
    }
    
    return res;
};
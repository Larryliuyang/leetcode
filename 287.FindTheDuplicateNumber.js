var findDuplicate = function(nums) {
    let l = 0, h = nums.length - 1;
    while (l < h) {
        let mid = Math.floor(l + ( h - l) / 2);
        let count  = 0;
        for(let num of nums) {
            if (num <= mid) count++;
        }
        
        if (count <= mid){
            l = mid +1;
        }else {
            h = mid;
        }
    }
    
    return l;
};

////

var findDuplicate = function(nums) {
    let slow = nums[0];
    let fast = nums[nums[0]];
    
    while (slow != fast) { // we are guaranteed to have a cycle
        slow = nums[slow];
        fast = nums[nums[fast]];
    }
    
    slow = 0;
    
    while (slow != fast) {
        slow = nums[slow];
        fast = nums[fast];
    }
    
    return slow;
};
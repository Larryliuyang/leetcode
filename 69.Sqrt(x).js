var mySqrt = function(x) {
    if (x < 2) return x;
    let num;
    let left = 1, right  = x;
    
    while (left < right) {
        let pivot =  Math.floor(left + (right - left)/2);
        num =  pivot * pivot;
        if (num > x) {
            right = pivot -1;
        }else if (num < x) {
            left = pivot + 1;
        }else {
            return pivot;
        }
    }
    
     return x < right * right ? right - 1 : right; 
};

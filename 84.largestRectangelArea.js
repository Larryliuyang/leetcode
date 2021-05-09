var largestRectangleArea = function(heights) {
    let stack =  [];
    let maxArea = 0;
    for (let i = 0; i <= heights.length; i++) {
        let h = i === heights.length ? 0: heights[i];
        while (stack.length !==0 && h < heights[stack[stack.length-1]]) {
            let curHeight = heights[stack.pop()];
            let preIndex =  stack.length === 0 ? -1 : stack[stack.length-1];
            let area =  curHeight * (i - preIndex - 1);
            maxArea =  Math.max(area, maxArea);
        }
        stack.push(i);
    }
    
    return maxArea;
};

//1856 1856. Maximum Subarray Min-Product

var maxSumMinProduct = function(A) {
    let res= 0;
    let s = [];
    for (let i = 0; i<A.length;i++) {
        let pair = [A[i],A[i]];
        let sum = 0 ;
        while(s.length > 0 && A[i] <= s[s.length -1][0]) {
            let top = s.pop();
            sum += top[1];
            res =  Math.max(res, sum * top[0]);
        }
        
        pair[1] += sum;
        s.push(pair);
        
        
      
    }
    
    let sum = 0;
      while(s.length > 0) {
            let top = s.pop();
            sum += top[1];
          res = Math.max(res,top[0] * sum);
        }
    
    return res
};
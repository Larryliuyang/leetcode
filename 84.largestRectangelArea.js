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
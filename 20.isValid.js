https://leetcode.com/problems/valid-parentheses/
var isValid = function(s) {
  let map = new Map();
  let stack = [];
     map.set(')', '(');
     map.set(']', '[');
     map.set('}', '{');
   for (let c of s) {
       if (map.get(c) != null) {
           if (stack.length === 0) return false;
           let cur =  stack.pop();
           if(map.get(c) != cur) return false;
           
       }else {
           stack.push(c);
       }
   }
   return stack.length === 0;
}
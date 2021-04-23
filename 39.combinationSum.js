function combinationSum(candidates, target) {
    const buffer = []
    const result = []
    const dfs = (index, target) => {
        if (target === 0) return result.push(buffer.slice())
        if (target <0) return;
        if (index === candidates.length) return;
        for(let i = index; i < candidates.length; i++){
             buffer.push(candidates[i]);
             dfs(i , target - candidates[i]); 
             buffer.pop();
         }
    }
    
    dfs(0, target);
    return result;
 }

 function combinationSum2(candidates, target) {
    const buffer = []
    const result = []
    candidates = candidates.sort()
    const dfs = (index, target) => {
        if (target === 0) return result.push(buffer.slice())
        if (target <0) return;
        if (index === candidates.length) return;
        for(let i = index; i < candidates.length; i++){
             if(i > index && candidates[i] === candidates[i-1]) continue
             buffer.push(candidates[i]);
             dfs(i +1, target - candidates[i]); 
             buffer.pop();
         }
    }
    
    dfs(0, target);
    return result;
 }
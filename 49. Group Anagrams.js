var groupAnagrams = function(strs) {
    const mapping = {};
    for (let  i = 0; i < strs.length; i++) {
        const str = strs[i];
        const sorted = str.split('').sort().join();
        if (mapping[sorted] === undefined) {
            mapping[sorted] = [str];
        }else{
            mapping[sorted].push(str);
        }
    }
    
    const output = [];
    for (let arr in mapping) {
        output.push(mapping[arr]);
    }
    
    return output;
}
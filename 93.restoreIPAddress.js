var restoreIpAddresses = function(s) {
    let res = [];
    
    var dfs = (start, n, s, prefix)=> {
        if (n===4) {
            if (prefix.length === s.length +4) {
                res.push(prefix.substring(0,prefix.length-1));
                return;
            }
        }
        
        let cur = "";
        for (let i = start; i <s.length; i++) {
            cur += s[i];
            if (cur.length >1 && cur[0] == '0'){
                return
            }
            
            if (parseInt(cur) <=255) {
              
                dfs(i+1, n +1, s, prefix + cur + ".");
            }
            
            else break;
        }
    }
    
    
    
    
    dfs(0,0,s,"");
    return res
};
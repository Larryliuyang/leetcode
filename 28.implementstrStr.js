var strStr = function(s, l) {
    if (l === '' ||  s === l) return 0;
    
    if (s.length < l.length) return -1;
    
    for (let i = 0; i < s.length - l.length + 1; i++) {
        if (s[i] === l[0]) {
            for (let j = 0; j < l.length; j++) {
                if ( l[j] !== s[i +j]) {
                    break
                }else if (j === l.length - 1) {
                    return i;
                }
            }
        }
    }
    
    return -1;
};

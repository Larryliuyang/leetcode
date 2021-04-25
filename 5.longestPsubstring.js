/**
 * @param {string} s
 * @return {string}
 */
 var longestPalindrome = function(s) {
    if (s.length <= 1) return s;
    let n = s.length;
    let isP = [...new Array(s.length + 1)].map(_ => new Array(s.length + 1).fill(false));

    let res = 1, start = 0;
    for (let i = 0; i <n; i++) isP[i][i] = true;
    
    for (let i = 0; i< n; i++) {
        isP[i][i+1] = s[i] === s[i+1];
        if(isP[i][i+1]) {
            start = i;
            res = 2;
        }
    }
    
    
    for (let i = n -1 ; i>=0;i--) {
        for (let j = i +2; j <n; j++) {
            isP[i][j] = isP[i+1][j-1] && s[i] === s[j];
            
            if (isP[i][j] && j -i +1 > res) {
                res = j-i +1;
                start = i;
            }
        }
    }
    
    return s.substring(start, start +res);
};
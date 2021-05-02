var uniquePaths = function(m, n) {
    if (m < 0 || n <0 ) return 0;
     let dp = [... new Array(m)].map(_ => new Array(n).fill(1));
     
     for (let  i = 1; i < m; i++) {
         for (let j = 1; j < n; j++) {
             dp[i][j] = dp[i-1][j] + dp[i][j-1];
         }
     }
     
     return dp[m-1][n-1]
 };
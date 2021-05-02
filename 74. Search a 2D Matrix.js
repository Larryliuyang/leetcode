var searchMatrix = function(matrix, target) {
    const n = matrix.length,  m = matrix[0].length;
    let l = 0, r = m *n -1;
    while(l <r) {
        let mid = Math.floor(l + (r -l )/2);
        if (matrix[Math.floor(mid / m)][mid % m] < target) {
            l = mid +1;
        }else{
            r = mid;
        }
    }
    
    return matrix[Math.floor(r/m)][r % m] == target;
};

// 240. Search a 2D Matrix II
// https://leetcode.com/problems/search-a-2d-matrix-ii/
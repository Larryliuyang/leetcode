/**
 * @param {character[][]} grid
 * @return {number}
 */
 var numIslands = function(grid) {
    let res = 0;
    for (let x = 0; x < grid.length; x++) {
        for (let y = 0; y < grid[0].length; y++) {
            if (grid[x][y] === '1') {
                res++;
                dfs(grid,x,y)
            }
        }
    }
    return res;
};

function dfs(grid, y, x) {
    if (y < 0 || y === grid.length || x < 0 || x === grid[0].length) {
        return
    }

    if (grid[y][x] === '1') {
        grid[y][x] = '0'
    } else {
        return
    }

    dfs(grid, y + 1, x)
    dfs(grid, y - 1, x)
    dfs(grid, y, x + 1)
    dfs(grid, y, x - 1)
}
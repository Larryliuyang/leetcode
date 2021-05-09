var maxPathSum = function(root) {
    let max_sum = Number.MIN_VALUE
    var helper = (node) => {
        if (node == null) return 0;
        let l = Math.max(helper(node.left),0);
        let r = Math.max(helper(node.right),0);
        let temp = node.val + l +r;
        max_sum = Math.max(max_sum, temp);
        return node.val + Math.max(l,r)
    }
    
    
    
    helper(root);
    return max_sum;
};
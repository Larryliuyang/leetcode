//102. Binary Tree Level Order Traversal
var levelOrder = function(root) {
    let res = [];
    if(root == null) return res;
    let queue = [];
    queue.push(root);
    while(queue.length) {
        let curl = [];
        let size =   queue.length;
        for (let i = 0; i < size; i++) {
            let cur =  queue.shift();
            curl.push(cur.val);
            if(cur.left !=null) queue.push(cur.left);
            if(cur.right !=null) queue.push(cur.right);
        }
        
        res.push(curl)
    }
    return res;
}
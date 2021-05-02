var connect = function(root) {
    if (root == null) return root;
    let queue = [];
    queue.unshift(root);
    while(queue.length !=0) {
        let size =  queue.length;
        for (let i = 0; i < size; i++) {
            let cur = queue.shift();
            if(i!=size -1) cur.next = queue[0];
            if (cur.left!=null) queue.push(cur.left);
            if(cur.right != null) queue.push(cur.right);
        }
        
        
    }
    
    return root;
};
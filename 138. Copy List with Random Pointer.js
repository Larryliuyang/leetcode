/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
var copyRandomList = function(head) {
    
    let map =  new Map();
    var helper = (node) => {
        if(node == null) return node;
        if (map.get(node) != null) return map.get(node);
        let newHead = new Node(node.val);
                map.set(node, newHead);

        newHead.next = helper(node.next);
        newHead.random = helper(node.random);
        return newHead;
        
    }
    
    
    
    return helper(head);
    
};
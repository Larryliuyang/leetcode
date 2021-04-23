/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
 var mergeKLists = function(lists) {
    if(lists == null || lists.length == 0) return null;
    let end = lists.length -1;
    while(end > 0) {
        let start = 0;
        while (start < end) {
            lists[start] = merge(lists[start], lists[end]);
            start++;
            end--;
        }
    }
    return lists[0];
};

var merge =(left, right) =>{
    if (left === null || right === null) return left == null ? right : left;
    let dummy = new ListNode(-1);
    let head =  dummy;
    while(left != null && right != null) {
        if (left.val < right.val) {
            head.next = left;
            left = left.next;
        }else{
            head.next = right;
            right = right.next;
        }
        head = head.next;
    }
    
    if (left == null) {
        head.next = right;
    }else {
        head.next = left;
    }
    
    return dummy.next;
}
var reverseKGroup = function(head, k) {
    let count  = 0;
    let ptr =  head;
    while (count < k && ptr) {
        ptr = ptr.next;
        count++;
    }
    
    if (count === k ) {
        let reverseHead = helper(head, k);
        head.next = reverseKGroup(ptr , k);
        return reverseHead;
    }
    return head;
};

const helper = (head, k) => {
    let newHead = null, ptr = head;
    while (k >0) {
        let next =  ptr.next;
        ptr.next = newHead;
        newHead = ptr;
        ptr = next;
        k--;
    }
    return newHead;
}
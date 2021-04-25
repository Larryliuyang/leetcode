var addTwoNumbers = function(l1, l2) {
    let dummy = new ListNode(-1);
    let head =  dummy;
    let carry = 0;
    while(l1 != null || l2 !=null){
        let l1c = l1 === null ? 0: l1.val;
        let l2c = l2 === null ? 0: l2.val;
        let sum = l1c + l2c + carry;
        head.next = new ListNode(sum % 10);
        carry = Math.floor(sum /10);
        if (l1 != null) l1 = l1.next;
        if (l2 != null) l2= l2.next;
        head =  head.next;
    }
    if (carry !=0) head.next = new ListNode(carry);
    return dummy.next;
};
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
 var addTwoNumbers = function(l1, l2) {
    let s1 =[]
    let s2 =[]
   while(l1 !=null) {
       s1.push(l1.val);
       l1 = l1.next;
   }
   
   while(l2 !=null) { 
       s2.push(l2.val);
       l2 = l2.next;
   }
   
   let sum = 0, carry = 0;
   let list = new ListNode(0);
   while (s1.length !=0 || s2.length !=0 ){
       sum = 0;
       if(s1.length !=0) sum += s1.pop();
       if(s1.length !=0) sum += s2.pop();
       sum += carry;
       list.val = sum % 10;
       carry = Math.floor(sum /10);
       let head = new ListNode(carry);
       head.next = list;
       list = head;
       
        
       
   }
  
   
   return list.val == 0 ? list.next : list;
};
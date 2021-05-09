var isHappy = function(n) {
    var getNext = (n) => {
        let res = 0;
        while (n > 0) {
            let d =  n % 10;
            n = Math.floor(n /10);
            res += d *d;
        }
        
        return res;
        
        
    }
    
    let seen = new Set();
    while(n != 1 && !seen.has(n)) {
        seen.add(n);
        n = getNext(n);
    }
    return n === 1;
};
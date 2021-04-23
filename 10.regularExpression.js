var isMatch = function(s, p) {
    if (p.length === 0) {
        return s.length === 0;
    }
    
    if (p.length > 1 && p[1] === '*') { // second char is '*'
        if (isMatch(s, p.slice(2))) {
            return true;
        }
        
        if (s.length > 0 && (s[0] === p[0]|| p[0] ==='.' ) ){
            return isMatch(s.slice(1),p);
        }
        return false;
        
    }else {  // second char is not '*'
        if (s.length > 0 && (s[0] === p[0]|| p[0] ==='.' )) {
            return isMatch(s.slice(1), p.slice(1));
        }
        return false;
    }
    
    
};
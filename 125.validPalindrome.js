var isPalindrome = function(str) {
  
       str = str.toLowerCase().replace(/[^a-z\d]/g, '');
  
  // Start pointers at beginning (i) and end (j).
  // Move inward until something doesn't match -OR-
  // the two pointers either meet or pass each other.
  for (let i = 0, j = str.length - 1; i < j; i++, j--) {
    if (str[i] !== str[j]) return false;
  }
  
  // If the loop completed with no equality issues,
  // the string is a valid palindrome.
  return true;

};

  var validPalindrome = function(s) {
    for (let i = 0, stop = s.length / 2; i < stop; i++) {
       let j = s.length - i - 1
       if (s[i] !== s[j]) {
           return isPalindrome(cut(s, i)) || isPalindrome(cut(s, j))
       }
   }
   return true
};



const cut = (s, i) => s.substr(0, i) + s.substr(i + 1);

const isPalindrome = (s) => s === s.split('').reverse().join('');

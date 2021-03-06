// 168. Excel Sheet Column Title
// https://leetcode.com/problems/excel-sheet-column-title/
var convertToTitle = function(n) {
     let res = [];
    while( n > 0) {
        n--;
        res.unshift(String.fromCharCode(65 + n % 26));
        n = parseInt(n/26);
    }
    
    return res.join('')
};
//65 A 97 a   48 0;
// String.fromCharCode    charcode -> Char
// s.charCodeAt    char -> charCode
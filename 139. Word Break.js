var wordBreak = function(s, wordDict) {
    let dp = new Array(s.length +1).fill(false)
    dp[0] = true;
    for (let  i =1; i <= s.length; i++) {
        for (let j =0; j <i; j++) {
            if (dp[j] && wordDict.includes(s.substring(j,i))) {
                dp[i] = true;
                break;
            }
            
        }
    }
    
    return dp[s.length]
};



//https://leetcode.com/problems/concatenated-words/discuss/348972/Java-Common-template-Word-Break-I-Word-Break-II-Concatenated-Words

//140 wordbreak 2
/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {string[]}
 */
 var wordBreak = function(s, wordDict) {
    const helper = (s, wordDict, memo) => {
        if (memo.hasKey(s)) return memo.get(s);
        let sentences = [];
        for (let word of wordDict) {
            if (word === s) {
                sentences.push(word);
            } else if (s.substring(0, word.length) === word) {
                for (let sentence of helper(s.substring(word.length), wordDict, memo)) {
                    sentences.push(word + " " + sentence);
                }
            }
        }
        
        memo.put(s, sentences);
        return sentences.
    }
    
    
    
    
    return helper(s, wordDict, new Map());
};


class Solution {
    
    public List<String> wordBreak(String s, List<String> wordDict) {
        return wordBreak(s, wordDict, new HashMap<>());
    }

    private List<String> wordBreak(String s, List<String> wordDict, Map<String, List<String>> memo) {
        
        if (memo.containsKey(s)) return memo.get(s);
        
        List<String> sentences = new ArrayList<>();
        
        for (String word : wordDict) {

            if (word.equals(s)) {
                
                sentences.add(word);
                
            } else if (s.startsWith(word)) {
                
                for (String sentence : wordBreak(s.substring(word.length()), wordDict, memo)) {

                    sentences.add(word.concat(" ").concat(sentence));   
                }
            }    
        }
        
        memo.put(s, sentences);
        
        return sentences;
    }
}
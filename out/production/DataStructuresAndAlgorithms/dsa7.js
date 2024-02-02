// 340. Longest Substring with At Most K Distinct Characters
// Medium
// Given a string s and an integer k, return the length of the longest 
// substring
//  of s that contains at most k distinct characters.

// Example 1:

// Input: s = "eceba", k = 2
// Output: 3
// Explanation: The substring is "ece" with length 3.
// Example 2:

// Input: s = "aa", k = 1
// Output: 2
// Explanation: The substring is "aa" with length 2.

var lengthOfLongestSubstringKDistinct = function(s, k) {
    const charCountMap = {}; let windowStart = 0; let distinctCharsLen = 0;
    let substringLen = -Infinity;
    for(let windowEnd = 0; windowEnd < s.length; windowEnd++) {
        if(!(s[windowEnd] in charCountMap)) {
            charCountMap[s[windowEnd]] = 1;
            distinctCharsLen++;
        } else charCountMap[s[windowEnd]]++;
        while(distinctCharsLen > k) {
            charCountMap[s[windowStart]]--;
            if(charCountMap[s[windowStart]] === 0) {
                delete charCountMap[s[windowStart]];
                distinctCharsLen--;
            } 
            windowStart++;
        }
        substringLen = Math.max(substringLen, (windowEnd - windowStart) + 1);
    }
    return substringLen;
};


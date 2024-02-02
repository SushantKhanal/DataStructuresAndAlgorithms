// 3. Longest Substring Without Repeating Characters
// Given a string s, find the length of the longest 
// substring
//  without repeating characters.

// Example 1:

// Input: s = "abcabcbb"
// Output: 3
// Explanation: The answer is "abc", with the length of 3.
// Example 2:

// Input: s = "bbbbb"
// Output: 1
// Explanation: The answer is "b", with the length of 1.
// Example 3:

// Input: s = "pwwkew"
// Output: 3
// Explanation: The answer is "wke", with the length of 3.
// Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.

var lengthOfLongestSubstring = function(s) { //without repeating characters
    let windowStart = 0;
    const charIdxMap = new Map();
    let longestSubstringLen = 0;
    for(let windowEnd = 0; windowEnd < s.length; windowEnd++) {
        const currChar = s[windowEnd];
        if(charIdxMap.has(currChar)) 
            windowStart = Math.max(windowStart, charIdxMap.get(currChar) + 1);
        charIdxMap.set(currChar, windowEnd);
        longestSubstringLen = Math.max(longestSubstringLen, (windowEnd - windowStart + 1));
    }
    return longestSubstringLen;
};
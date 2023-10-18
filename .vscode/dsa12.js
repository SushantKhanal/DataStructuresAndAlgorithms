// 567. Permutation in String
// Solved
// Medium
// Topics
// Companies
// Hint
// Given two strings s1 and s2, return true if s2 contains a permutation of s1, or false otherwise.

// In other words, return true if one of s1's permutations is the substring of s2.

// Example 1:

// Input: s1 = "ab", s2 = "eidbaooo"
// Output: true
// Explanation: s2 contains one permutation of s1 ("ba").
// Example 2:

// Input: s1 = "ab", s2 = "eidboaoo"
// Output: false
/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
 var checkInclusion = function(s1, s2) {
    const originalS1CharsMap = getCharsInString(s1);
    let s1CharsMap = {...originalS1CharsMap};
    const len = Object.values(originalS1CharsMap).length;
    let windowStart = 0;
    let charsMatched = 0;
    for(let windowEnd = 0; windowEnd < s2.length; windowEnd++) {
        const currChar = s2[windowEnd];
        if(currChar in s1CharsMap) {
            s1CharsMap[currChar]--;
            if(s1CharsMap[currChar] === 0) charsMatched++;
            if(charsMatched === len) return true;
            while(s1CharsMap[currChar] < 0) {
                const winStartChar = s2[windowStart];
                if(s1CharsMap[winStartChar] === 0) charsMatched--;
                s1CharsMap[winStartChar]++;
                windowStart++;
            }
        } else {
            s1CharsMap = {...originalS1CharsMap};
            charsMatched = 0;
            windowStart = windowEnd + 1;
        }
    }
    return false;
};

const getCharsInString = (str) => {
    const map = {}
    for(let i = 0; i < str.length; i++) {
        const char = str[i];
        if(!(char in map)) map[char] = 0;
        map[char]++;
    }
    return map;
}

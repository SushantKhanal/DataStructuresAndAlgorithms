//424. Longest Repeating Character Replacement

// You are given a string s and an integer k. You can choose any character of the string and change it to any other uppercase English character. You can perform this operation at most k times.

// Return the length of the longest substring containing the same letter you can get after performing the above operations.

//The Trick:
 //AABABBA
 //window condition (totalCharsInWindow - mostFrequentCharCount <= k)

 var characterReplacement = function(s, k) {
    let windowStart = 0; 
    let maxLen = 0;
    const charFreqWindowMap = {};
    let maxRepeatingCharCount = 0;
    for(let windowEnd = 0; windowEnd < s.length; windowEnd++) {
        const char = s[windowEnd];
        if(!(char in charFreqWindowMap)) charFreqWindowMap[char] = 0;
        charFreqWindowMap[char]++;
        // maxRepeatingCharCount = Math.max(...Object.values(charFreqWindowMap));
        maxRepeatingCharCount = Math.max(maxRepeatingCharCount, charFreqWindowMap[char]);
//if maxRepeatingCharCount stays the same or decreases our maxLen is not going to change 
// The maxLen increases only when maxRepeatingCharCount finds a new maximum.
//hence we do not need to update maxRepeatingCharCount in the following loop even when the value decreases, since we can be sure, it does not affect our final answer
        while((windowEnd - windowStart + 1) - maxRepeatingCharCount > k) {
            const winStartChar = s[windowStart];
            charFreqWindowMap[winStartChar]--;
            if(charFreqWindowMap[winStartChar] <= 0) delete charFreqWindowMap[winStartChar];
            windowStart++;
        }
        maxLen = Math.max(maxLen, windowEnd - windowStart + 1);
    }
    return maxLen;
};
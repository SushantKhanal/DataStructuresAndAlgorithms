//525. Contiguous Array
//Given a binary array nums, return the maximum length of a contiguous subarray with an equal number of 0 and 1.

//Example 1:

// Input: nums = [0,1]
// Output: 2
// Explanation: [0, 1] is the longest contiguous subarray with an equal number of 0 and 1.

var findMaxLength = function(nums) {
    let prefixSum = 0;
    const sumIdxMap = {}; let maxLen = 0;
    for(let i = 0; i < nums.length; i++) {
        const num = (nums[i] === 0) ? -1 : 1;
        prefixSum += num;
        if(prefixSum === 0) maxLen = Math.max(i + 1, maxLen);
        if(!(prefixSum in sumIdxMap)) sumIdxMap[prefixSum] = i;
        if((prefixSum in sumIdxMap))
            maxLen = Math.max(
                i - sumIdxMap[prefixSum], 
                maxLen
            );
    }
    //count of 0 and 1 is equal if,
    //case 1: prefixSum is 0 
    //case 2: there was already the same prefix sum 
    return maxLen;
};
//325. Maximum Size Subarray Sum Equals k
//Given an integer array nums and an integer k, return the maximum length of a 
// subarray
// that sums to k. If there is not one, return 0 instead.

// Example 1:

// Input: nums = [1,-1,5,-2,3], k = 3
// Output: 4
// Explanation: The subarray [1, -1, 5, -2] sums to 3 and is the longest.

var maxSubArrayLen = function(nums, k) {
    let maxLen = 0; let prefixSum = 0;
    let sumIdxMap = {};
    for(let i = 0; i < nums.length; i++) {
        prefixSum += nums[i];
        if(prefixSum === k) {
            const subArrayLen = i + 1;
            if(subArrayLen > maxLen) maxLen = subArrayLen;
        }
        if((prefixSum - k) in sumIdxMap) {
            const subArrayLen = i -  sumIdxMap[prefixSum - k];
            if(subArrayLen > maxLen) maxLen = subArrayLen;
        }
        if(!(prefixSum in sumIdxMap)) sumIdxMap[prefixSum] = i;
    }
    return maxLen;
};
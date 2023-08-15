//209. Minimum Size Subarray Sum

// Given an array of positive integers nums and a positive integer target, return the minimal length of a 
// subarray
//  whose sum is greater than or equal to target. If there is no such subarray, return 0 instead.

var minSubArrayLen = function(target, nums) {
    let windowStart = 0;
    let currSum = 0; let minLen = Infinity;
    for(let windowEnd = 0; windowEnd < nums.length; windowEnd++) {
        currSum += nums[windowEnd];
        while(currSum >= target) {
            minLen = Math.min(windowEnd - windowStart + 1, minLen);
            currSum -= nums[windowStart];
            windowStart++;
        }
    }
    return (minLen === Infinity) ? 0 : minLen;
};
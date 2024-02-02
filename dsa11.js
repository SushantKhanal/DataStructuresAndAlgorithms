// 1004. Max Consecutive Ones III
// Given a binary array nums and an integer k, return the maximum number of consecutive 1's in the array if you can flip at most k 0's.

// Example 1:

// Input: nums = [1,1,1,0,0,0,1,1,1,1,0], k = 2
// Output: 6
// Explanation: [1,1,1,0,0,1,1,1,1,1,1]
// Bolded numbers were flipped from 0 to 1. The longest subarray is underlined.
// Example 2:

// Input: nums = [0,0,1,1,0,0,1,1,1,0,1,1,0,0,0,1,1,1,1], k = 3
// Output: 10
// Explanation: [0,0,1,1,1,1,1,1,1,1,1,1,0,0,0,1,1,1,1]
// Bolded numbers were flipped from 0 to 1. The longest subarray is underlined.
 

// Constraints:

// 1 <= nums.length <= 105
// nums[i] is either 0 or 1.
// 0 <= k <= nums.length

var longestOnes = function(nums, k) {
    let windowStart = 0; let countOfZeroes = 0;
    let maxLen = 0;
    for(let windowEnd = 0; windowEnd < nums.length; windowEnd++) {
        if(nums[windowEnd] === 0) countOfZeroes++;
        while(countOfZeroes > k) {
            if(nums[windowStart] === 0) countOfZeroes--;
            windowStart++;
        }
        maxLen = Math.max(maxLen, (windowEnd - windowStart + 1));
    }
    return maxLen;
};
//2461. Maximum Sum of Distinct Subarrays With Length K
//You are given an integer array nums and an integer k. Find the maximum subarray sum of all the subarrays of nums that meet the following conditions:

// The length of the subarray is k, and
// All the elements of the subarray are distinct.
// Return the maximum subarray sum of all the subarrays that meet the conditions. If no subarray meets the conditions, return 0.

// A subarray is a contiguous non-empty sequence of elements within an array.

// Input: nums = [1,5,4,2,9,9,9], k = 3
// Output: 15

var maximumSubarraySum = function(nums, k) {
    let windowStart = 0;
    let currSum = 0; let maxSum = 0;
    const windowMap = {};
    let windowUniqueLen = 0;
    for(let windowEnd = 0; windowEnd < nums.length; windowEnd++) {
        const currNum = nums[windowEnd];
        currSum += currNum;
        if(!(currNum in windowMap)) {
            windowMap[currNum] = 1;
            windowUniqueLen++;
        }
        else windowMap[currNum]++;

        if(windowEnd >= k) {
            windowMap[nums[windowStart]]--;
            if(windowMap[nums[windowStart]] <= 0) {
                delete windowMap[nums[windowStart]];
                windowUniqueLen--;
            }
            currSum -= nums[windowStart];
            windowStart++;
        }

        if(windowUniqueLen === k) {
            maxSum = Math.max(maxSum, currSum); 
        }
    }
    return maxSum;
};


//560. Subarray Sum Equals K
// Given an array of integers nums and an integer k, return the total number of subarrays whose sum equals to k.
// A subarray is a contiguous non-empty sequence of elements within an array.

// Input: nums = [1,1,1], k = 2
// Output: 2

var subarraySum = function (nums, k) {
  let prefixSum = 0;
  let prefixSumCountMap = {};
  let countOfSubArrays = 0;
  for (let i = 0; i < nums.length; i++) {
    prefixSum += nums[i];
    if (prefixSum === k) countOfSubArrays++;
    if (prefixSum - k in prefixSumCountMap)
      countOfSubArrays += prefixSumCountMap[prefixSum - k];
    if (!(prefixSum in prefixSumCountMap)) prefixSumCountMap[prefixSum] = 1;
    else prefixSumCountMap[prefixSum]++;
  }
  return countOfSubArrays;
};

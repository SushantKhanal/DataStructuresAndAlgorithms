// 33. Search in Rotated Sorted Array
// There is an integer array nums sorted in ascending order (with distinct values).
// Prior to being passed to your function, nums is possibly rotated at an unknown 
// pivot index k (1 <= k < nums.length) such that the resulting array is [nums[k], 
// nums[k+1], ..., nums[n-1], nums[0], nums[1], ..., nums[k-1]] (0-indexed). 
// For example, [0,1,2,4,5,6,7] might be rotated at pivot index 3 and become 
// [4,5,6,7,0,1,2].
// Given the array nums after the possible rotation and an integer target, 
// return the index of target if it is in nums, or -1 if it is not in nums.
// You must write an algorithm with O(log n) runtime complexity.

//Soln:

class Solution {
    public int search(int[] nums, int target) {
        if(nums.length == 0) return -1;
        if(nums.length == 1) return (nums[0] == target) ? 0 : -1;
        int minIdx = getMinIdx(nums);
        if(minIdx < 0) return -1;
        int ans = searchHelper(nums, 0, minIdx - 1, target); // Search in the first half
        if(ans != -1) return ans; // If found in the first half, return
        ans = searchHelper(nums, minIdx, nums.length - 1, target); // Otherwise, search in the second half
        return ans; // Return -1 if not found, otherwise return the found index
    }
    
    public int searchHelper(int[] nums, int low, int high, int target) {
        while (low <= high) {
            int mid = low + (high - low) / 2;
            if (nums[mid] == target) {
                return mid; // Found target
            } else if (nums[mid] < target) {
                low = mid + 1;
            } else {
                high = mid - 1;
            }
        }
        return -1; // Target not found
    }
    
    public int getMinIdx(int[] nums) {
        int left = 0, right = nums.length - 1;
        while(left < right) {
            int mid = left + (right - left) / 2;
            if(nums[mid] > nums[right]) {
                left = mid + 1;
            } else {
                right = mid;
            }
        }
        return left; // This is the index of the smallest element
    }
}
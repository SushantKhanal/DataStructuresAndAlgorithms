//875. Koko Eating Bananas
// Koko loves to eat bananas. There are n piles of bananas, the ith pile has piles[i] bananas. The guards have gone and will come back in h hours.
// Koko can decide her bananas-per-hour eating speed of k. Each hour, she chooses some pile of bananas and eats k bananas from that pile. If the pile has less than k bananas, she eats all of them instead and will not eat any more bananas during this hour.
// Koko likes to eat slowly but still wants to finish eating all the bananas before the guards return.
// Return the minimum integer k such that she can eat all the bananas within h hours.

// Example 1:

// Input: piles = [3,6,7,11], h = 8
// Output: 4
// Example 2:

// Input: piles = [30,11,23,4,20], h = 5
// Output: 30
// Example 3:

// Input: piles = [30,11,23,4,20], h = 6
// Output: 23

//Solution:
//Approach: Trial and Error Binary Search

class Solution {
    public int minEatingSpeed(int[] piles, int h) {
        int low = 0;
        int high = Arrays.stream(piles).max().getAsInt();
        int ans = -1;
        while(low <= high) {
            int mid = (low + high) / 2;
            if(canKokoEatAllInTime(piles, h, mid)) {
                ans = mid;
                high = mid - 1;
            } else {
                low = mid + 1;
            }
        }
        return ans;
    }

    public boolean canKokoEatAllInTime(int[] piles, int h, int speed) {
        int timeTaken = 0;
        for(int pile : piles) {
            timeTaken += Math.ceil((double)pile/(double)speed);
            if(timeTaken > h) return false;
        }
        return (timeTaken <= h);
    }
}
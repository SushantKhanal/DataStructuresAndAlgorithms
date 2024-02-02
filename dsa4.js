//697. Degree of an Array

// Given a non-empty array of non-negative integers nums, the degree of this array is defined as the maximum frequency of any one of its elements.
// Your task is to find the smallest possible length of a (contiguous) subarray of nums, that has the same degree as nums.



//find the smallest possible length of a (contiguous) subarray of nums, that has the same degree as nums

var findShortestSubArray = function(nums) {
    const degree = getDegreeOfArray(nums);
    let prefixFrequency = {};
    let minLen = Infinity;
    for(let i = 0; i < nums.length; i++) {
        const num = nums[i];
        if(num in prefixFrequency) prefixFrequency[num].count++;
        else {
            prefixFrequency[num] = {
                count: 1, 
                startIdx: i
            }
        }
        if(prefixFrequency[num].count === degree) {
            const subArrayLen = i - (prefixFrequency[num].startIdx) + 1;
            minLen = Math.min(minLen, subArrayLen);
        }
    }
    return minLen;
};

const getDegreeOfArray = (nums) => {
    const map = {};
    for(const num of nums) {
        if(!(num in map)) map[num] = 1;
        else map[num]++;
    }
    return Math.max(...Object.values(map));
};


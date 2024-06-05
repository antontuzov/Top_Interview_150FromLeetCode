
//209. Minimum Size Subarray Sum
/*
Given an array of positive integers nums and a positive integer target,
 return the minimal length of a contiguous subarray [nums_l, nums_l+1, ..., nums_r-1, nums_r] 
of which the sum is greater than or equal to target. If there is no such subarray, return 0 instead.

Example 1:

Input: target = 7, nums = [2,3,1,2,4,3]
Output: 2

*/

var minSubArrayLen = function(target, nums) {
    let left = 0
    let right = 0
    let sum = 0
    let min = Infinity
    while(right < nums.length){
        sum += nums[right]
        while(sum >= target){
            min = Math.min(min, right - left + 1)
            sum -= nums[left]
            left++
        }
        right++
    }
    return min === Infinity ? 0 : min
}


//3. Longest Substring Without Repeating Characters

/*
Given a string, find the length of the longest substring without repeating characters.

Example 1:

Input: "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3.

Example 2:

Input: "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.

Example 3:

Input: "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3.
             Note that the answer must be a substring, "pwke" is a subsequence and not a substring.

*/

var lengthOfLongestSubstring = function(s) {
    let left = 0
    let right = 0
    let max = 0
    let map = new Map()
    while(right < s.length){
        if(map.has(s[right])){
            left = Math.max(left, map.get(s[right]) + 1)
        }
        map.set(s[right], right)
        max = Math.max(max, right - left + 1)
        right++
    }
    return max
}


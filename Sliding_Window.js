
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

//30. Substring with Concatenation of All Words

/*
Given a string s and a list of words words, where each word is the same length, 
find all starting indices of substring(s) in s that is a concatenation of each word in words exactly once.

Example 1:

Input:
s = "barfoothefoobarman",
words = ["foo","bar"]
Output: [0,9]
Explanation: Substrings starting at index 0 and 9 are "barfoo" and "foobar" respectively.
The output order does not matter.
*/

var findSubstring = function(s, words) {
    let left = 0
    let right = 0
    let count = words.length
    let len = words[0].length
    let map = new Map()
    for(let word of words){
        if(!map.has(word)){
            map.set(word, 0)
        }
        map.set(word, map.get(word) + 1)
    }
    let res = []
    while(right < s.length){
        if(map.has(s[right])){
            map.set(s[right], map.get(s[right]) - 1)
            if(map.get(s[right]) === 0){
                count--
            }
        }
        right++
        while(count === 0){
            if(map.has(s[left])){
                map.set(s[left], map.get(s[left]) + 1)
                if(map.get(s[left]) > 0){
                    count++
                }
            }
            if(right - left === words.length * len){
                res.push(left)
            }
            left++
        }
    }
    return res
    
}


//76. Minimum Window Substring

/*
Given a string S and a string T, find the minimum window in S which will contain all the characters in T in complexity O(n).

Example:

Input: S = "ADOBECODEBANC", T = "ABC"
Output: "BANC"
*/

var minWindow = function(s, t) {
    if (!s || !t) return "";
    let left = 0;
    let right = 0;
    let min = Infinity;
    let minLeft = 0;
    let map = {};
    let count = 0;
    for (let i = 0; i < t.length; i++) {
        if (!map[t[i]]) {
            map[t[i]] = 0;
        }
        map[t[i]]++;
    }
    while (right < s.length) {
        if (map[s[right]]) {
            map[s[right]]--;
            if (map[s[right]] >= 0) {
                count++;
            }
        }
        right++;
        while (count === t.length) {
            if (right - left < min) {
                min = right - left;
                minLeft = left;
            }
            if (map[s[left]]) {
                map[s[left]]++;
                if (map[s[left]] > 0) {
                    count--;
                }
            }
            left++;
        }
    }
    
}
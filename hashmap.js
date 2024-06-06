//383. Ransom Note

/*
Given two strings ransomNote and magazine, return true if ransomNote can be constructed 
by using the letters from magazine and false otherwise.


Example 1:


Input: ransomNote = "a", magazine = "b"
Output: false
Example 2:

Input: ransomNote = "aa", magazine = "ab"
Output: false
Example 3:

Input: ransomNote = "aa", magazine = "aab"
Output: true
*/



var canConstruct = function(ransomNote, magazine) {
    let obj = {}
    for(let i = 0; i < magazine.length; i++){
        if(obj[magazine[i]]){
            obj[magazine[i]]++
        }else{
            obj[magazine[i]] = 1
        }
    }
    for(let j = 0; j < ransomNote.length; j++){
        if(obj[ransomNote[j]] === undefined || obj[ransomNote[j]] === 0){
            return false
        }else{
            obj[ransomNote[j]]--
        }
    }
    return true
}

//205. Isomorphic Strings

/*
Given two strings s and t, determine if they are isomorphic.

Two strings s and t are isomorphic if the characters in s can be replaced to get t.

All occurrences of a character must be replaced with another character while preserving the order of the characters.
 No two characters may map to the same character but a character may map to itself.

Example 1:

Input: s = "egg", t = "add"
Output: true
Example 2:

Input: s = "foo", t = "bar"
Output: false
Example 3:

Input: s = "paper", t = "title"
Output: true
*/

var isIsomorphic = function(s, t) {
    for (let i = 0; i < s.length; i++) {
        if (s.indexOf(s[i]) !== t.indexOf(t[i])) {
            return false
        }

    }
    return true
   


}

//290. Word Pattern

/*
Given a pattern and a string str, find if str follows the same pattern.

Here follow means a full match, such that there is a bijection between a letter in pattern and a non-empty word in str.

Example 1:

Input: pattern = "abba", str = "dog cat cat dog"
Output: true
Example 2:

Input:pattern = "abba", str = "dog cat cat fish"
Output: false
Example 3:

Input: pattern = "aaaa", str = "dog cat cat dog"
Output: false
Example 4:

Input: pattern = "abba", str = "dog dog dog dog"
Output: false
*/

var wordPattern = function(pattern, str) {
    const words = str.split(' ')
    if (pattern.length !== words.length) {
        return false
    }
    const map = {}
    const set = new Set()
    for (let i = 0; i < pattern.length; i++) {
        const c = pattern[i]
        const w = words[i]
        if (map[c] && map[c] !== w) {
            return false
        }
        if (!map[c] && set.has(w)) {
            return false
        }
        map[c] = w
        set.add(w)
    }
    return true
    //  return words.every((w, i) => w === map[pattern[i]]);
    //  return words.every((w, i) => w === map[pattern[i]]);
    }

    //242. Valid Anagram

    /*
    Given two strings s and t, return true if t is an anagram of s, and false otherwise.

    An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase,
     typically using all the original letters exactly once.

    Example 1:

    Input: s = "anagram", t = "nagaram"
    Output: true
    Example 2:

    Input: s = "rat", t = "car"
    Output: false
    */


    var isAnagram = function(s, t) {
        if(s.length !== t.length){
            return false
        }
        let map = {}
        for(let i = 0; i < s.length; i++){
            if(map[s[i]]){
                map[s[i]]++
            }else{
                map[s[i]] = 1
            }
        }
        for(let j = 0; j < t.length; j++){
            if(map[t[j]]){
                map[t[j]]--
            }else{
                return false
            }
        }   
        return true
    }

    //49. Group Anagrams

    /*
    Given an array of strings strs, group anagrams together. 
    You can return the answer in any order.

    An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, 
    typically using all the original letters exactly once.

    Example 1:

    Input: strs = ["eat","tea","tan","ate","nat","bat"]
    Output: [["bat"],["nat","tan"],["ate","eat","tea"]]
    Example 2:

    Input: strs = [""]
    Output: [[""]]
    Example 3:

    Input: strs = ["a"]
    Output: [["a"]]
    */

    var groupAnagrams = function(strs) {
        let map = {}
        for(let i = 0; i < strs.length; i++){
            let sorted = strs[i].split('').sort().join('')
            if(map[sorted]){
                map[sorted].push(strs[i])
            }else{
                map[sorted] = [strs[i]]
            }
        }
        return Object.values(map)

        
    }


    //1. Two Sum

    /*

    Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

    You may assume that each input would have exactly one solution, and you may not use the same element twice.

    You can return the answer in any order.

    Example 1:

    Input: nums = [2,7,11,15], target = 9
    Output: [0,1]
    Output: Because nums[0] + nums[1] == 9, we return [0, 1].
    Example 2:

    Input: nums = [3,2,4], target = 6
    Output: [1,2]
    Example 3:

    Input: nums = [3,3], target = 6
    Output: [0,1]
    */

    var twoSum = function(nums, target) {
        for (let i = 0; i < nums.length; i++) {
            for (let j = i + 1; j < nums.length; j++) {
                if (nums[i] + nums[j] === target) {
                    return [i, j]
                }

            }

        }
  
    }

    //202. Happy Number

    /*
    Write an algorithm to determine if a number n is happy.

    A happy number is a number defined by the following process:

    Starting with any positive integer, replace the number by the sum of the squares of its digits.
    Repeat the process until the number equals 1 (where it will stay),

    or it loops endlessly in a cycle which does not include 1.
    Those numbers for which this process ends in 1 are happy.
    Return true if n is a happy number, and false if not.

    Example 1:

    Input: n = 19
    Output: true
    Explanation:
    12 + 92 = 82
    82 + 22 = 68
    62 + 82 = 100
    12 + 02 + 02 = 1
    */


    var isHappy = function(n) {
        let slow = n
        let fast = n
        do{
            slow = findSquareSum(slow)
            fast = findSquareSum(findSquareSum(fast))
        }while(slow !== fast)
        return fast === 1
    }

    var findSquareSum = function(n){
        let sum = 0
        while(n > 0){
            let digit = n % 10
            sum += digit * digit
            n = Math.floor(n / 10)
        }
        return sum
    }

//219. Contains Duplicate II

/*
Given an integer array nums and an integer k,
 return true if there are two distinct indices i and j in the array such that nums[i] == nums[j] and abs(i - j) <= k.

Example 1:

Input: nums = [1,2,3,1], k = 3
Output: true
Example 2:

Input: nums = [1,0,1,1], k = 1
Output: true
Example 3:

Input: nums = [1,2,3,1,2,3], k = 2
Output: false
*/

var containsNearbyDuplicate = function(nums, k) {
    let map = {}
    for(let i = 0; i < nums.length; i++){
        if(map[nums[i]] !== undefined && i - map[nums[i]] <= k){
            return true
        }else{
            map[nums[i]] = i
        }
    }
    return false
}


//128. Longest Consecutive Sequence

/*
Given an unsorted array of integers nums, return the length of the longest consecutive elements sequence.

You must write an algorithm that runs in O(n) time.

Example 1:

Input: nums = [100,4,200,1,3,2]
Output: 4
Explanation: The longest consecutive elements sequence is [1, 2, 3, 4]. Therefore its length is 4.
*/

var longestConsecutive = function(nums) {
    let set = new Set(nums)
    let longest = 0
    for(let i = 0; i < nums.length; i++){
        if(!set.has(nums[i] - 1)){
            let count = 0
            while(set.has(nums[i] + count)){
                count++
            }
            longest = Math.max(longest, count)
        }
    }
    return longest
}






  

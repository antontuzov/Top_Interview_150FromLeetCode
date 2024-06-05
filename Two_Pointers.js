
//125. Valid Palindrome

/*
Given a string, determine if it is a palindrome, considering only alphanumeric characters and ignoring cases.

Note: For the purpose of this problem, we define empty string as valid palindrome.

Example 1:

Input: "A man, a plan, a canal: Panama"
Output: true

Example 2:

Input: "race a car"
Output: false

*/


var isPalindrome = function(s) {
    s = s.replace(/[^A-Za-z0-9]/g,'').toLowerCase()
    let left = 0
    let right = s.length - 1
    while(left < right){
        if(s[left] !== s[right]){
            return false
        }
        left++
        right--
    }
    return true


}


//392. Is Subsequence

/*
Given a string s and a string t, check if s is subsequence of t.

You may assume that the

s is a subsequence of t
t is a
sorted string

Example 1:

Input: s = "abc", t = "ahbgdc"
Output: true

Example 2:

Input: s = "axc", t = "ahbgdc"
Output: false

*/


var isSubsequence = function(s, t) {
    let left = 0
    let right = 0
    while(left < s.length && right < t.length){
        if(s[left] === t[right]){
            left++
        }
        right++
    }
    return left === s.length
}


//167. Two Sum II - Input Array Is Sorted

/*
Given an array of integers numbers that is already sorted in non-decreasing order,
 find two numbers such that they add up to a specific target number.



Example 1:

Input: numbers = [2,7,11,15], target = 9
Output: [1,2]
Explanation: The sum of 2 and 7 is 9. Therefore index1 = 1, index2 = 2.
*/

var twoSum = function(numbers, target) {
    let left = 0
    let right = numbers.length - 1
    while(left < right){
        if(numbers[left] + numbers[right] < target){
            left++
        }else if(numbers[left] + numbers[right] > target){
            right--
        }else{
            return [left + 1, right + 1]
        }
    }
}

//11. Container With Most Water

/*

Given n non-negative integers a1, a2, ..., an , where each represents a point at coordinate
(i, ai). n vertical lines are drawn such that the two endpoints of line i is at (i, ai) and

(i, 0). Find two lines, which together with x-axis forms a container, such that the container
contains the most water.

Note: You may not slant the container and n is at least 2.

Example:

Input: [1,8,6,2,5,4,8,3,7]
Output: 49

*/


var maxArea = function(height) {
    let left = 0
    let right = height.length - 1
    let max = 0
    while(left < right){
        let area = Math.min(height[left], height[right]) * (right - left)
        max = Math.max(max, area)
        if(height[left] < height[right]){
            left++
        }else{
            right--
        }
    }
    return max
}

//15. 3Sum

/*

Given an array nums of n integers, are there elements a, b, c in nums such that a + b + c = 0?

Find all unique triplets in the array which gives the sum of zero.

Notice that the solution set must not contain duplicate triplets.

Example 1:

Input: nums = [-1,0,1,2,-1,-4]
Output: [[-1,-1,2],[-1,0,1]]
Explanation:
nums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0.
nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0.
nums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0.

*/


var threeSum = function(nums) {
    let res = []
    nums.sort((a, b) => a - b)
    for(let i = 0; i < nums.length - 2; i++){
        if(i > 0 && nums[i] === nums[i - 1]){
            continue
        }
        let left = i + 1
        let right = nums.length - 1
        while(left < right){
            if(nums[i] + nums[left] + nums[right] === 0){
                res.push([nums[i], nums[left], nums[right]])
                left++
                right--
                while(nums[left] === nums[left - 1] && left < right){
                    left++
                }
                while(nums[right] === nums[right + 1] && left < right){
                    right--
                }
            }else if(nums[i] + nums[left] + nums[right] > 0){
                right--
            }else{
                left++
            }
        }
    }
    return res
}


      

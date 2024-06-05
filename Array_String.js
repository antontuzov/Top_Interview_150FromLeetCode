
//88. Merge Sorted Array

/*
Given two sorted integer arrays nums1 and nums2, merge nums2 into nums1 as one sorted array.
Note:
The number of elements initialized in nums1 and nums2 are m and n respectively.


Example 1:  

Input:
nums1 = [1,2,3,0,0,0], m = 3
nums2 = [2,5,6],       n = 3

Output: [1,2,2,3,5,6]

Example 2:

Input:
nums1 = [1], m = 1
nums2 = [1],       n = 1    

Output: [1]

*/



var merge = function(nums1, m, nums2, n) {
    let i = m - 1
    let j = n - 1
    let k = m + n - 1
    while(i >= 0 && j >= 0){
        if(nums1[i] < nums2[j]){
            nums1[k--] = nums2[j--]
        }
        else{
            nums1[k--] = nums1[i--]
        }
    }
    while(j >= 0){
        nums1[k--] = nums2[j--]
    }
}

//27. Remove Element

/*
Given an array nums and a value val,
 remove all instances of that value in-place and return the new length.

Do not allocate extra space for another array, 
you must do this by modifying the input array in-place with O(1) extra memory.

The order of elements can be changed.
 It doesn't matter what you leave beyond the new length.


Example 1:

Input: nums = [3,2,2,3], val = 3
Output: 2, nums = [2,2]
Explanation: Your function should return length = 2, with the first two elements of nums being 2.
It doesn't matter what you leave beyond the returned length.

*/

var removeElement = function(nums, val) {
    let i = 0
    for(let j = 0; j < nums.length; j++){
        if(nums[j] !== val){
            nums[i] = nums[j]
            i++
        }
    }
    return i
}

//80. Remove Duplicates from Sorted Array II

/*
Given a sorted array nums, remove the duplicates in-place such that duplicates appeared at most twice and return the new length.

Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.


Example 1:

Input: nums = [1,1,1,2,2,3]
Output: 5, nums = [1,1,2,2,3]

*/

var removeDuplicates = function(nums) {

    if (nums.length <= 2) {
        return nums.length
    }

    let i = 2
    for (let j = 2; j < nums.length; j++) {
        if (nums[i - 2] !== nums[j]) {
            nums[i] = nums[j]
            i++
        }
    }
    return i
    
}

//169. Majority Element

/*
Given an array of size n, find the majority element. The majority element is the element that appears more than ⌊ n/2 ⌋ times.

You may assume that the array is non-empty and the majority element always exist in the array.



Example 1:

Input: [3,2,3]
Output: 3

Example 2:

Input: [2,2,1,1,1,2,2]
Output: 2

*/

var majorityElement = function(nums) {
    let count = 0
    let candidate
    for(let num of nums){
        if(count === 0){
            candidate = num
        }
        if(num === candidate){
            count++
        }
        else{
            count--
        }
    }
    return candidate
};

//189. Rotate Array

/*
Given an array, rotate the array to the right by k steps, where k is non-negative.

Example 1:

Input: [1,2,3,4,5,6,7] and k = 3
Output: [5,6,7,1,2,3,4]
Explanation:
rotate 1 steps to the right: [7,1,2,3,4,5,6]
rotate 2 steps to the right: [6,7,1,2,3,4,5]
rotate 3 steps to the right: [5,6,7,1,2,3,4]

*/

var rotate = function(nums, k) {
    k = k % nums.length
    let left = nums.slice(nums.length - k)
    let right = nums.slice(0, nums.length - k)
    nums.splice(0, nums.length, ...left, ...right)
    return nums
}

//121. Best Time to Buy and Sell Stock

/*
You are given an array prices where prices[i] is the price of a given stock on the ith day.

You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.


Example 1:

Input: prices = [7,1,5,3,6,4]
Output: 5
Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.

Example 2:

Input: prices = [7,6,4,3,1]
Output: 0
Explanation: In this case, no transactions are done.

*/

var maxProfit = function(prices) {
    let min = prices[0]
    let max = 0
    for(let i = 0; i < prices.length; i++){
        min = Math.min(min, prices[i])
        max = Math.max(max, prices[i] - min)
    }
    return max
}

//122. Best Time to Buy and Sell Stock II

/*

You are given an array prices where prices[i] is the price of a given stock on the ith day.


You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.


Example 1:

Input: prices = [7,1,5,3,6,4]
Output: 7
Explanation: Buy on day 2 (price = 1) and sell on day 3 (price = 5), profit = 5-1 = 4.
Then buy on day 4 (price = 3) and sell on day 5 (price = 6), profit = 6-3 = 3.

Example 2:

Input: prices = [1,2,3,4,5]
Output: 4
Explanation: Buy on day 1 (price = 1) and sell on day 5 (price = 5), profit = 5-1 = 4.
Note that you cannot buy on day 1, buy on day 2 and sell them later, as you are
doing this.

*/

var maxProfit = function(prices) {
    let profit = 0
    for(let i = 1; i < prices.length; i++){
        if(prices[i] > prices[i - 1]){
            profit += prices[i] - prices[i - 1]
        }
    }
    return profit
}

//55. Jump Game

/*
Given an array of non-negative integers, you are initially positioned at the first index of the array.

Each element in the array represents your maximum jump length at that position.

Determine if you are able to reach the last index.


Example 1:

Input: [2,3,1,1,4]
Output: true
Explanation: Jump 1 step from index 0 to 1, then 3 steps to the last index.

Example 2:

Input: [3,2,1,0,4]
Output: false
Explanation: You will always arrive at index 3 no matter what. Its maximum
             jump length is 0, which makes it impossible to reach the last index.

*/

var canJump = function(nums) {
    let max = 0
    for(let i = 0; i < nums.length; i++){
        if(i > max){
            return false
        }
        max = Math.max(max, i + nums[i])
    }
    return true
}

//45. Jump Game II

/*
Given an array of non-negative integers, you are initially positioned at the first index of the array.

Each element in the array represents your maximum jump length at that position.

Your goal is to reach the last index in the minimum number of jumps.

Example:

Input: [2,3,1,1,4]
Output: 2
Explanation: The minimum number of jumps to reach the last index is 2.
    Jump 1 step from index 0 to 1, then 3 steps to the last index.

*/

var jump = function(nums) {
    let jumps = 0
    let end = 0
    let max = 0
    for(let i = 0; i < nums.length - 1; i++){
        max = Math.max(max, i + nums[i])
        if(i === end){
            end = max
            jumps++
        }
    }
    return jumps
}

//274. H-Index

/*
Given an array of citations (each citation is a non-negative integer) of a researcher,
 write a function to compute the researcher's h-index.

According to the definition of h-index on Wikipedia: "A scientist has index h if h of
his/her N papers have at least h citations each, and the other N − h papers have no more than
h citations each."

Example:

Input: citations = [3,0,6,1,5]
Output: 3
Explanation: [3,0,6,1,5] means the researcher has 5 papers in total and each of them had
             received 3, 0, 6, 1, 5 citations respectively.


So, here's the definition of h-index: "A scientist has index h if h of his/her N papers
have at least h citations each, and the other N - h papers have no more than h citations
each."

*/

var hIndex = function(citations) {
    citations.sort((a, b) => b - a)
    for(let i = 0; i < citations.length; i++){
        if(citations[i] < i + 1){
            return i
        }
    }
    return citations.length
}

//380. Insert Delete GetRandom O(1)

/*
Design a data structure that supports all following operations in average O(1) time.

insert(val): Inserts an item val to the set if not already present.
remove(val): Removes an item val from the set if present.


getRandom: Returns a random element from current set of elements. Each element must have the
same probability of being returned.

Example:

// Init an empty set.
RandomizedSet randomSet = new RandomizedSet();

// Inserts 1 to the set. Returns true as 1 was inserted successfully.
randomSet.insert(1);

// Returns false as 2 does not exist in the set.
randomSet.remove(2);

// Inserts 2 to the set, returns true. Set now contains [1,2].
randomSet.insert(2);

// getRandom should return either 1 or 2 randomly.
randomSet.getRandom();

// Removes 1 from the set, returns true. Set now contains [2].
randomSet.remove(1);

// 2 was already in the set, so return false.
randomSet.insert(2);

// Since 2 is the only number in the set, getRandom always return 2.
randomSet.getRandom();
*/

var RandomizedSet = function() {
    this.map = {}
    this.arr = []
};



RandomizedSet.prototype.insert = function(val) {
    if(this.map[val] === undefined){
        this.map[val] = this.arr.length
        this.arr.push(val)
        return true
    }
    return false
};


RandomizedSet.prototype.remove = function(val) {
    if(this.map[val] === undefined){
        return false
    }
    let last = this.arr[this.arr.length - 1]
    this.arr[this.map[val]] = last
    this.map[last] = this.map[val]
    this.arr.pop()
    delete this.map[val]
    return true
};


RandomizedSet.prototype.getRandom = function() {
    return this.arr[Math.floor(Math.random() * this.arr.length)]
};

//238. Product of Array Except Self

/*

Given an array nums of n integers where n > 1,  return an array output such that output[i] is
equal to the product of all the elements of nums except nums[i].

Example:

Input:  [1,2,3,4]
Output: [24,12,8,6]

Constraint: It's guaranteed that the product of the elements of any prefix or suffix of the array
             (including the whole array) fits in a 32 bit integer.

Note: Please solve it without division and in O(n).

Follow up:
Could you solve it with constant space complexity? (The output array does not count as extra
space for the purpose of space complexity analysis.)

*/

var productExceptSelf = function(nums) {
    let result = []
    let product = 1
    for(let i = 0; i < nums.length; i++){
        result[i] = product
        product *= nums[i]
    }
    product = 1
    for(let i = nums.length - 1; i >= 0; i--){
        result[i] *= product
        product *= nums[i]
    }
    return result
};

//134. Gas Station

/*

There are N gas stations along a circular route, where the amount of gas at station i is gas[i].

You have a car with an unlimited gas tank and it costs cost[i] of gas to travel from station i

to its next station (i+1). You begin the journey with an empty tank at one of the gas stations.


Return the starting gas station's index if you can travel around the circuit once in the clockwise
direction, otherwise return -1.


Example 1:

Input: gas = [1,2,3,4,5], cost = [3,4,5,1,2]
Output: 3
Explanation:
Start at station 3 (index 3) and fill up with 4 unit of gas. Your tank = 0 + 4 = 4
Travel to station 4. Your tank = 4 - 1 + 5 = 8
Travel to station 0. Your tank = 8 - 2 + 1 = 7
Travel to station 1. Your tank = 7 - 3 + 2 = 6
Travel to station 2. Your tank = 6 - 4 + 3 = 5
Travel to station 3. The cost is 5. Your gas is just enough to travel around the circuit.
Therefore, return 3 as the starting index.

*/

var canCompleteCircuit = function(gas, cost) {
    let total = 0
    let current = 0
    let start = 0
    for(let i = 0; i < gas.length; i++){
        total += gas[i] - cost[i]
        current += gas[i] - cost[i]
        if(current < 0){
            current = 0
            start = i + 1
        }
    }
    if(total < 0){
        return -1
    }
    return start
};







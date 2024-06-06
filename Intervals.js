//228. Summary Ranges

/*
Given a sorted integer array without duplicates, return the summary of its ranges.

Example 1:

Input:  [0,1,2,4,5,7]
Output: ["0->2","4->5","7"]
Explanation: 0,1,2 form a continuous range; 4,5 form a continuous range
Example 2:

Input:  [0,2,3,4,6,8,9]
Output: ["0","2->4","6","8->9"]
Explanation: 0,2,3,4 form a continuous range; 6 form a continuous range;
    8,9 form a continuous range.

*/

var summaryRanges = function (nums) {
  let res = [];
  let start = 0;
  let end = 0;
  for (let i = 0; i < nums.length; i++) {
    if (i + 1 < nums.length && nums[i + 1] == nums[i] + 1) {
      end++;
    } else {
      if (start == end) {
        res.push(nums[start].toString());
      } else {
        res.push(nums[start] + "->" + nums[end]);
      }
      start = i + 1;
      end = i + 1;
    }
  }
  return res;
}
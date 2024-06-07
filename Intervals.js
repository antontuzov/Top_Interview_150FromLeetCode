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

//56. Merge Intervals

/*
Given a collection of intervals, merge all overlapping intervals.

Example 1:

Input: [[1,3],[2,6],[8,10],[15,18]]
Output: [[1,6],[8,10],[15,18]]
Explanation: Since intervals [1,3] and [2,6] overlaps, merge them into [1,6].
Example 2:

Input: [[1,4],[4,5]]
Output: [[1,5]]
Explanation: Intervals [1,4] and [4,5] are considered overlapping.

*/

var merge = function (intervals) {
  intervals.sort((a, b) => a[0] - b[0]);
  let res = [intervals[0]];
  for (let i = 1; i < intervals.length; i++) {
    if (intervals[i][0] <= res[res.length - 1][1]) {
      res[res.length - 1][1] = Math.max(intervals[i][1], res[res.length - 1][1]);
    } else {
      res.push(intervals[i]);
    }
  }
  return res;
}


//57. Insert Interval

/*
Given a set of non-overlapping intervals, insert a new interval into the intervals (merge if necessary).

You may assume that the intervals were initially sorted according to their start times.

Example 1:

Input: intervals = [[1,3],[6,9]], newInterval = [2,5]
Output: [[1,5],[6,9]]
Example 2:  

Input: intervals = [[1,2],[3,5],[6,7],[8,10],[12,16]], newInterval = [4,8]
Output: [[1,2],[3,10],[12,16]]
Explanation: Because the new interval [4,8] overlaps with [3,5],[6,7],[8,10].

*/

var insert = function (intervals, newInterval) {
  let res = [];
  let start = 0;
  let end = 0;
  for (let i = 0; i < intervals.length; i++) {
    if (intervals[i][1] < newInterval[0]) {
      res.push(intervals[i]);
    } else if (intervals[i][0] > newInterval[1]) {
      res.push(newInterval);
      newInterval = intervals[i];
    } else {
      newInterval = [
        Math.min(intervals[i][0], newInterval[0]),
        Math.max(intervals[i][1], newInterval[1]),
      ];
    }
  }
  res.push(newInterval);
  return res;
}

//452. Minimum Number of Arrows to Burst Balloons


/*
Input: points = [[10,16],[2,8],[1,6],[7,12]]
Output: 2
Explanation: One way is to shoot one arrow for example at x = 6
then at x = 11. 
Another way is to shoot two arrows at x = 10 and x = 16.
*/

var findMinArrowShots = function (points) {
  points.sort((a, b) => a[1] - b[1]);
  let res = 1;
  let end = points[0][1];
  for (let i = 1; i < points.length; i++) {
    if (points[i][0] > end) {
      res++;
      end = points[i][1];
    }
  }
  return res;
}





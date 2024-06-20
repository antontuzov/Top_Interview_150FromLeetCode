
//199. Binary Tree Right Side View


/*
Given the root of a binary tree, imagine yourself standing on the right side of it,
return the values of the nodes you can see ordered from top to bottom.

Example 1:



*/

var rightSideView = function(root) {
    if (!root) return [];
    let res = [];
    pre(root,0);
    return res;

    function pre(node,h) {
        if (!node) return;
        res[h] = node.val;
        pre(node.left, h+1);
        pre(node.right, h+1);
    }
    
};
    
//637. Average of Levels in Binary Tree

/*
Given the root of a binary tree, return the average value of the nodes on each level in the form of an array.

Example 1:

Input: root = [3,9,20,null,null,15,7]
Output: [3.00000,14.50000,11.00000]
Explanation:
The average value of nodes on level 0 is 3, on level 1 is 14.5, and on level 2 is 11.
Hence return [3, 14.5, 11]. 

*/

var averageOfLevels = function(root) {
   let queue = [root]
   let res = []
   while (queue.length) {
       let size = queue.length
       let sum = 0
       for (let i = 0; i < size; i++) {
           let node = queue.shift()
           sum += node.val
           if (node.left) queue.push(node.left)
           if (node.right) queue.push(node.right)
       }
       res.push(sum / size)
   }
   return res
  

};

//102. Binary Tree Level Order Traversal

/*
Given the root of a binary tree, return the level order traversal of its nodes' values. (i.e., from left to right, level by level).

Example 1:

Input: root = [3,9,20,null,null,15,7]
Output: [[3],[9,20],[15,7]]

*/

var levelOrder = function(root) {
    if (!root) return []
    let queue = [root]
    let res = []
    while (queue.length) {
        let size = queue.length
        let level = []
        for (let i = 0; i < size; i++) {
            let node = queue.shift()
            level.push(node.val)
            if (node.left) queue.push(node.left)
            if (node.right) queue.push(node.right)
        }
        res.push(level)
    }
    return res
};

//103. Binary Tree Zigzag Level Order Traversal

/*


Example 1:

Input: root = [3,9,20,null,null,15,7]
Output: [[3],[20,9],[15,7]]

*/


var zigzagLevelOrder = function(root) {
    if (!root) return []
    let queue = [root]
    let res = []
    let leftToRight = true
    while (queue.length) {
        let size = queue.length
        let level = []
        for (let i = 0; i < size; i++) {
            let node = queue.shift()
            level.push(node.val)
            if (node.left) queue.push(node.left)
            if (node.right) queue.push(node.right)
        }
        if (!leftToRight) level.reverse()
        leftToRight = !leftToRight
        res.push(level)
    }
    return res
};






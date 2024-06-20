

//530. Minimum Absolute Difference in BST

/*
Given a binary search tree with non-negative values, find the minimum absolute difference between values of any two nodes.

Example:

Input:
        1
     / \
    0   48
Output:
1
Explanation:
The minimum absolute difference is 1, which is the difference between 48 and 49.
Note: There is a binary search tree with two nodes and the values are in the range 0 <= val <= 100

*/

var minDiffInBST = function(root) {

    const arr = dfs(root)
    let min = Infinity
    for (let i = 0; i < arr.length - 1; i++) {
        min = Math.min(min, arr[i + 1] - arr[i])
    }
    return min

    function dfs(root) {
        if (!root) return []
        const left = dfs(root.left)
        const right = dfs(root.right)
        return [...left, root.val, ...right]
    }

}


//230. Kth Smallest Element in a BST

/*
Given a binary search tree, write a function kthSmallest to find the kth smallest element in it.

Example 1:

Input: root = [3,1,4,null,2], k = 1
   3
  / \
 1   4
  \
   2
Output: 1
Example 2:

Input: root = [5,3,6,2,4,null,null,1], k = 3
       5
      / \
     3   6
    / \
   2   4
  /
 1
Output: 3
Follow up:

What if the BST is modified (insert/delete operations) often and you need to find the kth smallest frequently?
How would you optimize the kthSmallest routine?
*/

var kthSmallest = function(root, k) {
    let count = 0
    let stack = []
    let node = root
    while (stack.length || node) {
        while (node) {
            stack.push(node)
            node = node.left
        }
        node = stack.pop()
        count++
        if (count === k) return node.val
        node = node.right
    }
}


//98. Validate Binary Search Tree

/*
Given the root of a binary tree, determine if it is a valid binary search tree (BST).   

A valid BST is defined as follows:

The left subtree of a node contains only nodes with keys less than the node's key.
The right subtree of a node contains only nodes with keys greater than the node's key.
Both the left and right subtrees must also be binary search trees.

Example 1:

Input: root = [2,1,3]
Output: true
Example 2:

Input: root = [5,1,4,null,null,3,6]
Output: false
Explanation: The root node's value is 5 but its right child's value is 4.
*/

var isValidBST = function(root) {

    if (!root) return true
    const stack = []
    const inorder = []
    let node = root
    while (stack.length || node) {
        while (node) {
            stack.push(node)
            node = node.left
        }
        node = stack.pop()
        inorder.push(node.val)
        node = node.right
    }
    for (let i = 1; i < inorder.length; i++) {
        if (inorder[i - 1] >= inorder[i]) return false
    }
    return true

}


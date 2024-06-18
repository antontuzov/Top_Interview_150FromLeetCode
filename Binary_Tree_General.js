

//104. Maximum Depth of Binary Tree

/*
Given the root of a binary tree, return its maximum depth.

A binary tree's maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.


Example 1:

Input: root = [3,9,20,null,null,15,7]
Output: 3

*/

var maxDepth = function (root) {
    if (!root) return 0
    return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1
}

//100. Same Tree


/*
Given the roots of two binary trees p and q, write a function to check if they are the same or not.

Two binary trees are considered the same if they are structurally identical, and the nodes have the same value.

Example 1:

Input: p = [1,2,3], q = [1,2,3]
Output: true

*/

var isSameTree = function (p, q) {
    if (!p && !q) return true
    if (!p || !q) return false
    if (p.val !== q.val) return false
    return isSameTree(p.left, q.left) && isSameTree(p.right, q.right)
}


//226. Invert Binary Tree


/*
Given the root of a binary tree, invert the tree, and return its root.


Example 1:

Input: root = [4,2,7,1,3,6,9]
Output: [4,7,2,9,6,3,1]



*/


var invertTree = function (root) {
    if (!root) return root
    let left = invertTree(root.left)
    let right = invertTree(root.right)
    root.left = right
    root.right = left
    return root
}




//101. Symmetric Tree


/*
Given the root of a binary tree, check whether it is a mirror of itself (i.e., symmetric around its center).

Example 1:

Input: root = [1,2,2,3,4,4,3]
Output: true


Example 2:

Input: root = [1,2,2,null,3,null,3]
Output: false

*/

var isSymmetric = function (root) {
    if (!root) return true
    return isSymmetricTree(root.left, root.right)
}

var isSymmetricTree = function (left, right) {
    if (!left && !right) return true
    if (!left || !right) return false
    if (left.val !== right.val) return false
    return isSymmetricTree(left.left, right.right) && isSymmetricTree(left.right, right.left)
}


//105. Construct Binary Tree from Preorder and Inorder Traversal


/*

Example 1:

Input: preorder = [3,9,20,15,7], inorder = [9,3,15,20,7]
Output: [3,9,20,null,null,15,7]

*/

var buildTree = function (preorder, inorder) {
    if (!preorder.length) return null
    let val = preorder.shift()
    let root = new TreeNode(val)
    let mid = inorder.indexOf(val)
    root.left = buildTree(preorder.slice(0, mid), inorder.slice(0, mid))
    root.right = buildTree(preorder.slice(mid), inorder.slice(mid + 1))
    return root


}

//106. Construct Binary Tree from Inorder and Postorder Traversal

/*


Example 1:

Input: inorder = [9,3,15,20,7], postorder = [9,15,7,20,3]
Output: [3,9,20,null,null,15,7]

*/

var buildTree = function (inorder, postorder) {
    let hash = {}
    for (let i = 0; i < inorder.length; i++) {
        hash[inorder[i]] = i
    }
    let build = function (inorder, start, end) {
        if (start > end) return null
        let val = postorder.pop()
        let mid = hash[val]
        let root = new TreeNode(val)
        root.right = build(inorder, mid + 1, end)
        root.left = build(inorder, start, mid - 1)
        return root
    }
    return build(inorder, 0, inorder.length - 1)
    
}

//117. Populating Next Right Pointers in Each Node II

/*
Given a binary tree

struct Node {
  int val;
  Node *left;
  Node *right;
  Node *next;
}
Populate each next pointer to point to its next right node. If there is no next right node, the next pointer should be set to NULL.

Initially, all next pointers are set to NULL.


Example 1:

Input: root = [1,2,3,4,5,null,7]
Output: [1,#,2,3,#,4,5,7,#]
Explanation: Given the above binary tree (Figure A), your function should populate each next pointer
to point to its next right node, just like in Figure B.

*/

var connect = function (root) {
    if (!root) return root
    let queue = [root]
    while (queue.length) {
        let size = queue.length
        while (size--) {
            let node = queue.shift()
            if (size) node.next = queue[0]
            if (node.left) queue.push(node.left)
            if (node.right) queue.push(node.right)
        }
    }
    return root
}

//114. Flatten Binary Tree to Linked List

/*
Given the root of a binary tree, flatten the tree into a "linked list":


Example 1:

Input: root = [1,2,5,3,4,null,6]
Output: [1,null,2,null,3,null,4,null,5,null,6]

*/

var flatten = function (root) {


    if (!root) return root
    let stack = [root]
    while (stack.length) {
        let node = stack.pop()
        if (node.right) stack.push(node.right)
        if (node.left) stack.push(node.left)
        if (stack.length) node.right = stack[stack.length - 1]
        node.left = null
    }
    return root

}

//112. Path Sum

/*
Given the root of a binary tree and an integer targetSum,
return true if the tree has a root-to-leaf path such that adding up all the values along the path equals targetSum.


Example 1:

Input: root = [5,4,8,11,null,13,4,7,2,null,null,5,1], targetSum = 22
Output: true

*/

var hasPathSum = function (root, targetSum) {
    if (!root) return false
    if (!root.left && !root.right) return targetSum === root.val
    return hasPathSum(root.left, targetSum - root.val) || hasPathSum(root.right, targetSum - root.val)
}



//129. Sum Root to Leaf Numbers

/*
Given the root of a binary tree containing digits from 0 to 9 only, each root-to-leaf path could represent a number.

An example is the root-to-leaf path 1 -> 2 -> 3 which represents the number 123.

Return the total sum of all root-to-leaf numbers. Test cases are generated so that the answer will fit in a 32-bit integer.


Example 1:

Input: root = [1,2,3]
Output: 25
Explanation:
The root-to-leaf path 1->2 represents the number 12.
The root-to-leaf path 1->3 represents the number 13.
Therefore, sum = 12 + 13 = 25.
*/

var sumNumbers = function (root) {
    if (!root) return 0
    let sum = 0
    let stack = [[root, 0]]
    while (stack.length) {
        let [node, num] = stack.pop()
        num = num * 10 + node.val
        if (!node.left && !node.right) sum += num
        if (node.left) stack.push([node.left, num])
        if (node.right) stack.push([node.right, num])
    }
    return sum
}

//124. Binary Tree Maximum Path Sum

/*
Given a non-empty binary tree, find the maximum path sum.

For this problem, a path is defined as any sequence of nodes from some starting node to any node
in the tree along the parent-child connections. The path must contain at least one node and does not need to
go through the root.


Example 1:

Input: root = [1,2,3]
Output: 6
Explanation: The optimal path is 2 -> 1 -> 3 with a path sum of 2 + 1 + 3 = 6.

*/

var maxPathSum = function (root) {

   let max = -Infinity
    const dfs = (node) => {
        if (!node) return 0
        let left = Math.max(dfs(node.left), 0)
        let right = Math.max(dfs(node.right), 0)
        max = Math.max(max, left + right + node.val)
        return node.val + Math.max(left, right)
    }
    dfs(root)
    return max

}

//173. Binary Search Tree Iterator

/*
Implement an iterator over a binary search tree (BST). Your iterator will be initialized with the root node of a BST.

Calling next() will return the next smallest number in the BST.

Example 1:

Input
["BSTIterator", "next", "next", "hasNext", "next", "hasNext", "next", "hasNext", "next", "next"]
[[[7, 3, 15, null, null, 9, 20]], [], [], [], [], [], [], [], [], []]
Output
[null, 3, 7, true, 9, true, 15, true, 20, 20]

Explanation
BSTIterator bSTIterator = new BSTIterator([7, 3, 15, null, null, 9, 20]);
bSTIterator.next();    // return 3  
bSTIterator.next();    // return 7


bSTIterator.hasNext(); // return True
bSTIterator.next();    // return 9
bSTIterator.hasNext(); // return True
bSTIterator.next();    // return 15
bSTIterator.hasNext(); // return True
bSTIterator.next();    // return 20
bSTIterator.hasNext(); // return False


Note:

- next() and hasNext() should run in average O(1) time and uses O(h) memory, where h is the height of the tree.
- You may assume that next() call will always be valid, that is, there will be at least a next smallest number in the BST.


*/

var BSTIterator = function (root) {
    this.stack = []
    this.leftMost = (node) => {
        while (node) {
            this.stack.push(node)
            node = node.left
        }
    }
    this.leftMost(root)
};


BSTIterator.prototype.next = function () {
    let node = this.stack.pop()
    if (node.right) this.leftMost(node.right)
    return node.val
};


BSTIterator.prototype.hasNext = function () {
    return this.stack.length
};





//222. Count Complete Tree Nodes

/*
Given the root of a complete binary tree, return the number of the nodes in the tree.

According to Wikipedia, every valid binary tree is a complete binary tree
(i.e., every level, except possibly the last, is completely filled,
 and all nodes in the last level are as far left as possible.
 It can have between 1 and 2h nodes inclusive at the last level h.

Example 1:

Input: root = [1,2,3,4,5,6]
Output: 6

*/

var countNodes = function (root) {
    if (!root) return 0
    let left = countNodes(root.left)
    let right = countNodes(root.right)
    return 1 + left + right
}

//236. Lowest Common Ancestor of a Binary Tree

/*
Given a binary tree, find the lowest common ancestor (LCA) of two given nodes in the tree.

According to the definition of LCA on Wikipedia: "The lowest common ancestor is defined between
two nodes p and q as the lowest node in T that has both p and q as descendants (where we allow a node to be a descendant of itself)."

Example 1:

Input: root = [3,5,1,6,2,0,8,null,null,7,4], p = 5, q = 1
Output: 3
Explanation: The LCA of nodes 5 and 1 is 3.

*/

var lowestCommonAncestor = function (root, p, q) {

    if (p.val < root.val && q.val < root.val) return lowestCommonAncestor(root.left, p, q)

    return root
}











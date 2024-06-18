
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
    



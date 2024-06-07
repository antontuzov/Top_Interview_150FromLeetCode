//20. Valid Parentheses

/*
Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Every close bracket has a corresponding open bracket of the same type.

Example 1:

Input: s = "()"
Output: true
Example 2:

Input: s = "()[]{}"
Output: true
Example 3:

Input: s = "(]"
Output: false
*/


var isValid = function (s) {
    let stack = [];
    let map = {
        ')': '(',
        '}': '{',
        ']': '['
    }

    for (let i = 0; i < s.length; i++) {
        if (map[s[i]] === undefined) {
            stack.push(s[i])
        } else if (stack.pop() !== map[s[i]]) {
            return false
        }
    }
    return stack.length === 0
}


//71. Simplify Path

/* 

Given a string path, which is an absolute path (starting with a slash '/')
 to a file or directory in a Unix-style file system, convert it to the simplified canonical path.

In a Unix-style file system, a period '.' refers to the current directory.
 A double period '..' refers to the directory up a level.

For more information, see: Absolute path vs relative path in Linux/Unix

Note that the returned canonical path must always begin with a slash '/', even if the path 
itself does not begin with /.

Example 1:

Input: path = "/home/"
Output: "/home"
Explanation: Note that there is no trailing slash after the last directory name.

Example 2:  
Input: path = "/../"
Output: "/"
Explanation: Going one level up from the root directory is a no-op. Therefore,
 the result is the same as the input path.

Example 3:

Input: path = "/home//foo/"
Output: "/home/foo"
Explanation: In the canonical path, multiple consecutive slashes are replaced by a single one.
 Therefore, the input path is "/home//foo/" and the canonical path is "/home/foo".

*/



var simplifyPath = function (path) {
    let stack = []
    let pathArr = path.split('/')
    for (let i = 0; i < pathArr.length; i++) {
        if (pathArr[i] === '..') {
            stack.pop()
        } else if (pathArr[i] !== '' && pathArr[i] !== '.') {
            stack.push(pathArr[i])
        }
    }
    return '/' + stack.join('/')
}

//155. Min Stack

/*
Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.

push(x) -- Push element x onto stack.
pop() -- Removes the element on top of the stack.
top() -- Get the top element.
getMin() -- Retrieve the minimum element in the stack.


Example 1:

Input
["MinStack","push","push","push","getMin","pop","top","getMin"]
[[],[-2],[0],[-3],[],[],[],[]]

Output
[null,null,null,null,-3,null,0,-2]

Explanation
MinStack minStack = new MinStack();
minStack.push(-2);
minStack.push(0);
minStack.push(-3);
minStack.getMin(); // return -3
minStack.pop();
minStack.top();    // return 0
minStack.getMin(); // return -2

*/

var MinStack = function () {
    this.stack = []
    this.min = Infinity
};

MinStack.prototype.push = function (val) {
    if (val <= this.min) {
        this.stack.push(this.min)
        this.min = val
    }
    this.stack.push(val)
};

MinStack.prototype.pop = function () {
    if (this.stack.pop() === this.min) {
        this.min = this.stack.pop()
    }
};

MinStack.prototype.top = function () {
    return this.stack[this.stack.length - 1]
};

MinStack.prototype.getMin = function () {
    return this.min
};

//150. Evaluate Reverse Polish Notation

/*
Evaluate the value of an arithmetic expression in Reverse Polish Notation.

Valid operators are +, -, *, and /. Each operand may be an integer or another expression.

Note that division between two integers should truncate toward zero.

It is guaranteed that the given RPN expression is always valid.
 That means the expression would always evaluate to a result and there won't be any division by zero operation.

Example 1:

Input: tokens = ["2","1","+","3","*"]
Output: 9
Explanation: ((2 + 1) * 3) = 9


*/

var evalRPN = function (tokens) {

    let stack = []

    let ops = {
        '+': (a, b) => a + b,
        '-': (a, b) => a - b,
        '*': (a, b) => a * b,
        '/': (a, b) => Math.trunc(a / b)
    }

    for (let i = 0; i < tokens.length; i++) {
        if (tokens[i] in ops) {
            let a = stack.pop()
            let b = stack.pop()
            stack.push(ops[tokens[i]](b, a))
        } else {
            stack.push(+tokens[i])
        }
    }

    return stack.pop()

  
}

//224. Basic Calculator

/*

Implement a basic calculator to evaluate a simple expression string.

The expression string may contain open ( and closing parentheses ),
 the plus + or minus sign -, non-negative integers and empty spaces .

Example 1:

Input: "1 + 1"
Output: 2
Example 2:

Input: " 2-1 + 2 "
Output: 3
Example 3:

Input: "(1+(4+5+2)-3)+(6+8)"
Output: 23
Note:
You may assume that the given expression is always valid.
Do not use the eval built-in library function.

*/

var calculate = function (s) {
    let num = 0
    let sign = 1
    let stack = []

    for (let i = 0; i < s.length; i++) {
        if (s[i] === ' ') continue
        if (s[i] === '+') {
            sign = 1
        } else if (s[i] === '-') {
            sign = -1
        } else if (s[i] === '(') {
            stack.push(num)
            stack.push(sign)
            num = 0
            sign = 1
        } else if (s[i] === ')') {
            num = num * stack.pop() + stack.pop()
        } else {
            num += sign * (s[i] - '0')
        }
    }
    return num

}

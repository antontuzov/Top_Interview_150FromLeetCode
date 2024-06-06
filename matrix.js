//36. Valid Sudoku

/*
Determine if a 9x9 Sudoku board is valid. Only the filled cells need to be validated according to the following rules:

Each row must contain the digits 1-9 without repetition.
Each column must contain the digits 1-9 without repetition.
Each of the 9 3x3 sub-boxes of the grid must contain the digits 1-9 without repetition.

A partially filled sudoku which is valid.

The Sudoku board could be partially filled, where empty cells are filled with the character '.'.

Example 1:

Input:
[
    ["5","3",".",".","7",".",".",".","."],
    ["6",".",".","1","9","5",".",".","."],
    [".","9","8",".",".",".",".","6","."],
    ["8",".",".",".","6",".",".",".","3"],
    ["4",".",".","8",".","3",".",".","1"],
    ["7",".",".",".","2",".",".",".","6"],
    [".","6",".",".",".",".","2","8","."],
    [".",".",".","4","1","9",".",".","5"],
    [".",".",".",".","8",".",".","7","9"]
]
Output: true
*/

var isValidSudoku = function(board) {

    function check(board, i, j, num){
        for(let k = 0; k < 9; k++){
            if(board[i][k] === num || board[k][j] === num){
                return false
            }
        }
        let r = Math.floor(i / 3) * 3
        let c = Math.floor(j / 3) * 3
        for(let k = r; k < r + 3; k++){
            for(let l = c; l < c + 3; l++){
                if(board[k][l] === num){
                    return false
                }
            }
        }
        return true
    }
    for(let i = 0; i < 9; i++){
        for(let j = 0; j < 9; j++){
            if(board[i][j] !== '.'){
                if(!check(board, i, j, board[i][j])){
                    return false
                }
            }
        }
    }
    return true

};


//54. Spiral Matrix

/*
Given a matrix of m x n elements (m rows, n columns), return all elements of the matrix in spiral order.

Example 1:

Input:
[
 [ 1, 2, 3 ],
 [ 4, 5, 6 ],
 [ 7, 8, 9 ]
]
Output: [1,2,3,6,9,8,7,4,5]
Example 2:

Input:
[
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9,10,11,12]
]
Output: [1,2,3,4,8,12,11,10,9,5,6,7]
*/

var spiralOrder = function(matrix) {

    let res = []
    let top = 0
    let bottom = matrix.length - 1
    let left = 0
    let right = matrix[0].length - 1
    let dir = 0
    while(top <= bottom && left <= right){
        if(dir === 0){
            for(let i = left; i <= right; i++){
                res.push(matrix[top][i])
            }
            top++
        }
        else if(dir === 1){
            for(let i = top; i <= bottom; i++){
                res.push(matrix[i][right])
            }
            right--
        }
        else if(dir === 2){
            for(let i = right; i >= left; i--){
                res.push(matrix[bottom][i])
            }
            bottom--
        }
        else if(dir === 3){
            for(let i = bottom; i >= top; i--){
                res.push(matrix[i][left])
            }
            left++
        }
        dir = (dir + 1) % 4
    }

    return res




}

//48. Rotate Image

/*
You are given an n x n 2D matrix representing an image, rotate the image by 90 degrees (clockwise).

You have to rotate the image in-place, which means you have to modify the input 2D matrix directly.
DO NOT allocate another 2D matrix and do the rotation.

Example 1:

Input: matrix = [[1,2,3],[4,5,6],[7,8,9]]
Output: [[7,4,1],[8,5,2],[9,6,3]]
Example 2:

Input: matrix = [[5,1,9,11],[2,4,8,10],[13,3,6,7],[15,14,12,16]]
Output: [[15,13,2,5],[14,3,4,1],[12,6,8,9],[16,7,10,11]]
*/

var rotate = function(matrix) {
    for(let i = 0; i < matrix.length; i++){
        for(let j = i; j < matrix[0].length; j++){
            let temp = matrix[i][j]
            matrix[i][j] = matrix[j][i]
            matrix[j][i] = temp
        }

    }

    for(let i = 0; i < matrix.length; i++){
        matrix[i].reverse()
    }

    return matrix
};

//73. Set Matrix Zeroes

/*
Given an m x n integer matrix matrix, if an element is 0, set its entire row and column to 0's.

You must do it in place.

Example 1:

Input: matrix = [[1,1,1],[1,0,1],[1,1,1]]
Output: [[1,0,1],[0,0,0],[1,0,1]]
Example 2:

Input: matrix = [[0,1,2,0],[3,4,5,2],[1,3,1,5]]
Output: [[0,0,0,0],[0,4,5,0],[0,3,1,0]]
*/

var setZeroes = function(matrix) {
    let rows = new Set()
    let cols = new Set()
    for(let i = 0; i < matrix.length; i++){
        for(let j = 0; j < matrix[0].length; j++){
            if(matrix[i][j] === 0){
                rows.add(i)
                cols.add(j)
            }
        }
    }

    for(let i = 0; i < matrix.length; i++){
        for(let j = 0; j < matrix[0].length; j++){
            if(rows.has(i) || cols.has(j)){
                matrix[i][j] = 0
            }
        }
    }

    return matrix
};

//289. Game of Life

/*
According to the Wikipedia's article: "The Game of Life, also known simply as Life,
 is a cellular automaton devised by the British mathematician John Horton Conway in 1970."

example:

Input: board = [[0,1,0],[0,0,1],[1,1,1],[0,0,0]]
Output: [[0,0,0],[1,0,1],[0,1,1],[0,1,0]]


*/

var gameOfLife = function(board) {
    let rows = board.length
    let cols = board[0].length
    let temp = []
    for(let i = 0; i < rows; i++){
        temp.push([])
        for(let j = 0; j < cols; j++){
            temp[i].push(0)
        }
    }

    for(let i = 0; i < rows; i++){
        for(let j = 0; j < cols; j++){
            let live = 0
            if(i > 0 && j > 0 && board[i-1][j-1] === 1) live++
            if(i > 0 && board[i-1][j] === 1) live++
            if(i > 0 && j < cols - 1 && board[i-1][j+1] === 1) live++
            if(j > 0 && board[i][j-1] === 1) live++
            if(j < cols - 1 && board[i][j+1] === 1) live++
            if(i < rows - 1 && j > 0 && board[i+1][j-1] === 1) live++
            if(i < rows - 1 && board[i+1][j] === 1) live++
            if(i < rows - 1 && j < cols - 1 && board[i+1][j+1] === 1) live++
            if(board[i][j] === 1 && (live < 2 || live > 3)) temp[i][j] = 0
            if(board[i][j] === 0 && live === 3) temp[i][j] = 1
        }
    }

    for(let i = 0; i < rows; i++){
        for(let j = 0; j < cols; j++){
            board[i][j] = temp[i][j]
        }
    }

    return board

};


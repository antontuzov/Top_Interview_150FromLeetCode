

//200. Number of Islands

/*
Given an m x n 2D binary grid grid which represents a map of '1's (land) and '0's (water), return the number of islands.

An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. 
You may assume all four edges of the grid are all surrounded by water.

Example 1:

Input: grid = [
    ["1","1","1","1","0"],
    ["1","1","0","1","0"],
    ["1","1","0","0","0"],
    ["0","0","0","0","0"]
]
Output: 1
Example 2:

Input: grid = [
    ["1","1","0","0","0"],
    ["1","1","0","0","0"],
    ["0","0","1","0","0"],
    ["0","0","0","1","1"]
]
Output: 3
*/

var numIslands = function(grid) {
    let count = 0
    for(let i = 0; i < grid.length; i++){
        for(let j = 0; j < grid[0].length; j++){
            if(grid[i][j] === '1'){
                count++
                dfs(grid, i, j)
            }
        }
    }
    return count
};
var dfs = function(grid, i, j){
    if(i < 0 || j < 0 || i >= grid.length || j >= grid[0].length || grid[i][j] === '0'){
        return
    }
    grid[i][j] = '0'
    dfs(grid, i + 1, j)
    dfs(grid, i - 1, j)
    dfs(grid, i, j + 1)
    dfs(grid, i, j - 1)
}

//130. Surrounded Regions

/*
Given a 2D board containing 'X' and 'O' (the letter O), capture all regions surrounded by 'X'.

A region is captured by flipping all 'O's into 'X's in that surrounded region.

Example 1:

X X X X
X O O X
X X O X
X O X X
After running your function, the board should be:

X X X X
X X X X
X X X X
X O X X
Explanation:



Example 2:

X X X X
X O O X
X X O X
X O X X
After running your function, the board should be:

X X X X
X X X X
X X X X
X O X X
Explanation:


*/

var solve = function(board) {

    for(let i = 0; i < board.length; i++){
        if(board[i][0] === 'O'){
            dfs(board, i, 0)
        }
        if(board[i][board[0].length - 1] === 'O'){
            dfs(board, i, board[0].length - 1)
        }
    }

    for(let j = 0; j < board[0].length; j++){
        if(board[0][j] === 'O'){
            dfs(board, 0, j)
        }
        if(board[board.length - 1][j] === 'O'){
            dfs(board, board.length - 1, j)
        }
    }

    for(let i = 0; i < board.length; i++){
        for(let j = 0; j < board[0].length; j++){
            if(board[i][j] === 'O'){
                board[i][j] = 'X'
            }
            if(board[i][j] === 'A'){
                board[i][j] = 'O'
            }
        }
    }
    
    return board


    
};

var dfs = function(board, i, j){
    if(i < 0 || j < 0 || i >= board.length || j >= board[0].length || board[i][j] !== 'O'){
        return
    }
    board[i][j] = 'A'
    dfs(board, i + 1, j)
    dfs(board, i - 1, j)
    dfs(board, i, j + 1)
    dfs(board, i, j - 1)
}

//133. Clone Graph

/*
Given a reference of a node in a connected undirected graph.

Return a deep copy (clone) of the graph.

Each node in the graph contains a value (int) and a list (List[Node]) of its neighbors.

class Node {
    public int val;
    public List<Node> neighbors;
}


Test case format:

For simplicity sake, each node's value is the same as the node's index

Your Node object will be instantiated and called as such:

Node node = new Node();
node.val = val;
node.neighbors = neighbors;
*/


var cloneGraph = function(node) {
    var map = new Map();
    return clone(node);

    function clone(node) {
        if (!node) return null;
        if (map.has(node)) return map.get(node);
        var cloneNode = new Node(node.val);
        map.set(node, cloneNode);
        for (var neighbor of node.neighbors) {
            cloneNode.neighbors.push(clone(neighbor));
        }
        return cloneNode;
    }

};

//399. Evaluate Division

/*
You are given an array of variable pairs equations and an array of real numbers values, where equations[i] is
a string representing the equation, and values[i] is the value of the string.

Return the answers to all the equations provided in the array equations, where answer[i] is
the value of the XOR of all the elements of equations[i].

Example 1:
Input: equations = [["a","b"],["b","c"]], values = [2.0,3.0], queries = [["a","c"],["b","a"],["a","e"],["a","a"],["x","x"]]


Output: [6.00000,0.50000,-1.00000,1.00000,-1.00000]

Explanation:
Given: a / b = 2.0, b / c = 3.0
queries are: a / c = ?, b / a = ?, a / e = ?, a / a = ?, x / x = ?
return: [6.0, 0.5, -1.0, 1.0, -1.0 ]

*/

var calcEquation = function(equations, values, queries) {  
    
    let map = new Map();
    for(let i = 0; i < equations.length; i++){
        if(!map.has(equations[i][0])){
            map.set(equations[i][0], new Map())
        }
        if(!map.has(equations[i][1])){
            map.set(equations[i][1], new Map())
        }
        map.get(equations[i][0]).set(equations[i][1], values[i])
        map.get(equations[i][1]).set(equations[i][0], 1/values[i])
    }
    
    let res = []
    
    for(let i = 0; i < queries.length; i++){
        let [a, b] = queries[i] 
        if(!map.has(a) || !map.has(b)){
            res.push(-1.0)
            continue
        }
        if(map.get(a).has(b)){
            res.push(map.get(a).get(b))
        }else if(map.get(b).has(a)){
            res.push(1/map.get(b).get(a))
        }else{
            res.push(-1.0)
        }
    }
    
    return res

}

//207. Course Schedule

/*
There are a total of n courses you have to take, labeled from 0 to n - 1.

Some courses may have prerequisites, for example to take course 0 you have to first take course 1, which is expressed as a pair: [0,1]

Given the total number of courses and a list of prerequisite pairs, is it possible for you to finish all courses?

Example 1:

Input: 2, [[1,0]] 
Output: true
Explanation: There are a total of 2 courses to take. 
             To take course 1 you should have finished course 0. So it is possible.
Example 2:

Input: 2, [[1,0],[0,1]]
Output: false
Explanation: There are a total of 2 courses to take. 
             To take course 1 you should have finished course 0, and to take course 0 you should
             also have finished course 1. So it is impossible.
*/

var canFinish = function(numCourses, prerequisites) {

    let map = new Map();
    let inDegree = new Map();
    for(let i = 0; i < numCourses; i++){
        map.set(i, new Set())
        inDegree.set(i, 0)
    }
    
    for(let i = 0; i < prerequisites.length; i++){
        let [a, b] = prerequisites[i]
        map.get(a).add(b)
        inDegree.set(b, inDegree.get(b) + 1)
    }
    
    let queue = []
    for(let i = 0; i < numCourses; i++){
        if(inDegree.get(i) === 0){
            queue.push(i)
        }
    }
    
    let count = 0
    while(queue.length){
        let size = queue.length
        for(let i = 0; i < size; i++){
            let node = queue.shift()
            count++
            for(let neighbor of map.get(node)){
                inDegree.set(neighbor, inDegree.get(neighbor) - 1)
                if(inDegree.get(neighbor) === 0){
                    queue.push(neighbor)
                }
            }
        }
    }
    

}

//1584. Min Cost to Connect All Points

/*
Input: points = [[0,0],[2,2],[3,10],[5,2],[7,0]]
Output: 20
Explanation:

We can connect the points as shown above to get a minimum cost of 20.
Notice that there is a tie between (0, 0) and (5, 2). 
Since there are two points at (5, 2), (0, 0) is considered as the tie.
*/

var minCostConnectPoints = function(points) {

    const order = (a, b) => a - b
    let minHeap = new MinPriorityQueue({ priority: order })

    let n = points.length
    let cost = 0
    let uf = new UnionFind(n)
    for(let i = 0; i < n; i++){
        let [x1, y1] = points[i]
        for(let j = i + 1; j < n; j++){
            let [x2, y2] = points[j]
            let dist = Math.abs(x1 - x2) + Math.abs(y1 - y2)
            minHeap.enqueue([dist, i, j])
        }
    }

    while(!minHeap.isEmpty()){
        let [dist, i, j] = minHeap.dequeue().element
        if(uf.connected(i, j)){
            continue
        }else{
            uf.union(i, j)
            cost += dist
        }
    }
    
    return cost


}






//25. Reverse Nodes in k-Group

/*
Given a linked list, reverse the nodes of a linked list k at a time and return its modified list.


k is a positive integer and is less than or equal to the length of the linked list. If the number of nodes is not a multiple of k then left-out nodes in the end should remain as it is.

Example:

Given this linked list: 1->2->3->4->5

For k = 2, you should return: 2->1->4->3->5

For k = 3, you should return: 3->2->1->4->5

Note:

Only constant extra memory is allowed.
You may not alter the values in the list's nodes, only nodes itself may be changed.

*/

var reverseKGroup = function (head, k) {

    let dummy = new ListNode(0)
    dummy.next = head
    let prev = dummy
    while (true) {
        let tail = prev
        for (let i = 0; i < k; i++) {
            tail = tail.next
            if (!tail) return dummy.next
        }
        let next = tail.next
        [head, tail] = reverse(head, tail)
        prev.next = head
        tail.next = next
        prev = tail
    }

    function reverse(head, tail) {
        let prev = tail.next
        let p = head
        while (head !== tail) {
            let next = head.next
            head.next = prev
            prev = head
            head = next
        }
        return [prev, p]
    }

}



//141. Linked List Cycle

/*

Given head, the head of a linked list, determine if the linked list has a cycle in it.

There is a cycle in a linked list if there is some node in the list that can be reached again by continuously following the next pointer.

Internally, pos is used to denote the index of the node that tail's next pointer is connected to (0-indexed). Note that pos is not passed as a parameter.


Example 1:

Input: head = [3,2,0,-4], pos = 1
Output: true
Explanation: There is a cycle in the linked list, where the tail connects to the 1st node (0-indexed).

*/

var hasCycle = function (head) {
    let fast = head
    let slow = head
    while (fast && fast.next) {
        fast = fast.next.next
        slow = slow.next
        if (fast === slow) return true
    }
    return false
}


//2. Add Two Numbers


/*
You are given two non-empty linked lists representing two non-negative integers.
The digits are stored in reverse order and each of their nodes contain a single digit.
Add the two numbers and return it as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.

Example:

Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
Output: 7 -> 0 -> 8
Explanation: 342 + 465 = 807.


*/

var addTwoNumbers = function (l1, l2) {
    let dummy = new ListNode(0)
    let cur = dummy
    let carry = 0
    while (l1 || l2 || carry) {
        let sum = carry
        if (l1) {
            sum += l1.val
            l1 = l1.next
        }
        if (l2) {
            sum += l2.val
            l2 = l2.next
        }
        carry = Math.floor(sum / 10)
        cur.next = new ListNode(sum % 10)
        cur = cur.next
    }
    return dummy.next
}


//21. Merge Two Sorted Lists 

/*
Merge two sorted linked lists and return it as a new list.
 The new list should be made by splicing together the nodes of the first two lists.

Example:

Input: 1->2->4, 1->3->4
Output: 1->1->2->3->4->4
*/


var mergeTwoLists = function (l1, l2) {
    let dummy = new ListNode(0)
    let cur = dummy
    while (l1 && l2) {
        if (l1.val < l2.val) {
            cur.next = l1
            l1 = l1.next
        } else {
            cur.next = l2
            l2 = l2.next
        }
        cur = cur.next
    }
    cur.next = l1 || l2
    return dummy.next
}

//138. Copy List with Random Pointer

/*
A linked list is given such that each node contains an additional random pointer
which could point to any node in the list or null.

Return a deep copy of the list.

Example 1:

Input:

{"$id":"1","next":{"$id":"2","next":null,"random":{"$ref":"2"},"val":2},"random":{"$ref":"2"},"val":1}


Explanation:

We have two nodes [1, 2] with random pointers to nodes [2, 2] and [2, 2].
The copy should have pointers to the nodes [1, 1] and [2, 2].



*/

var copyRandomList = function (head) {
    if (!head) return null
    let cur = head
    while (cur) {
        let copy = new Node(cur.val)
        copy.next = cur.next
        cur.next = copy
        cur = copy.next
    }
    cur = head
    while (cur) {
        if (cur.random) cur.next.random = cur.random.next
        cur = cur.next.next
    }
    let dummy = new Node(0)
    let cur1 = head
    let cur2 = dummy
    while (cur1) {
        cur2.next = cur1.next
        cur1.next = cur1.next.next
        cur1 = cur1.next
        cur2 = cur2.next
    }
    return dummy.next
}

//92. Reverse Linked List II

/*
Reverse a linked list from position m to n. Do it in one-pass.

Note: 1 ≤ m ≤ n ≤ length of list.

Example:

Input: 1->2->3->4->5->NULL, m = 2, n = 4
Output: 1->4->3->2->5->NULL
*/


var reverseBetween = function (head, m, n) {
    let dummy = new ListNode(0)
    dummy.next = head
    let pre = dummy
    for (let i = 0; i < m - 1; i++) pre = pre.next
    let cur = pre.next
    for (let i = 0; i < n - m; i++) {
        let tmp = cur.next
        cur.next = tmp.next
        tmp.next = pre.next
        pre.next = tmp
    }
    return dummy.next
}

//25. Reverse Nodes in k-Group

/*
Given a linked list, reverse the nodes of a linked list k at a time and return its modified list.

k is a positive integer and is less than or equal to the length of the linked list.
 If the number of nodes is not a multiple of k then left-out nodes in the end should remain as it is.

Example:

Given this linked list: 1->2->3->4->5

For k = 2, you should return: 2->1->4->3->5

For k = 3, you should return: 3->2->1->4->5

Note:

Only constant extra memory is allowed.
You may not alter the values in the list's nodes, only nodes itself may be changed.



*/

 var reverseKGroup = function(head, k) {

    var dummy = new ListNode(0)
    dummy.next = head
    var pre = dummy
    while (head) {
        var tail = head
        for (let i = 0; i < k; i++) {
            tail = tail.next
            if (!tail) {
                return dummy.next
            }
        }
        var next = tail.next
        [head, tail] = reverse(head, tail)
        pre.next = head
        tail.next = next
        pre = tail
        head = tail.next
    }
    return dummy.next

    function reverse(head, tail) {
        var prev = tail.next
        var p = head
        while (head !== tail) {
            var next = head.next
            head.next = prev
            prev = head
            head = next
        }
        return [prev, p]
    }


   
}

//19. Remove Nth Node From End of List

/*
Given a linked list, remove the n-th node from the end of list and return its head.

Example:
Given linked list: 1->2->3->4->5, and n = 2.
After removing the second node from the end, the linked list becomes 1->2->3->5.

*/

var removeNthFromEnd = function(head, n) {
    let dummy = new ListNode(0)
    dummy.next = head
    let fast = head
    let slow = dummy
    for (let i = 0; i < n; i++) fast = fast.next
    while (fast) {
        fast = fast.next
        slow = slow.next
    }
    slow.next = slow.next.next
    return dummy.next
}


//82. Remove Duplicates from Sorted List II

/*
Given a sorted linked list, delete all nodes that have duplicate numbers,
 leaving only distinct numbers from the original list.

Example 1:

Input: 1->2->3->3->4->4->5
Output: 1->2->5
Example 2:

Input: 1->1->1->2->3
Output: 2->3
*/

var deleteDuplicates = function(head) {
    let dummy = new ListNode(0)
    dummy.next = head
    let pre = dummy
    while (head) {
        while (head.next && head.val === head.next.val) head = head.next
        if (pre.next === head) pre = pre.next
        else pre.next = head.next
        head = head.next
    }


    return dummy.next

}

//61. Rotate List

/*
Given the head of a linked list, rotate the list to the right by k places.

Example 1:
Input: head = [1,2,3,4,5], k = 2
Output: [4,5,1,2,3]

*/


var rotateRight = function(head, k) {
    if (!head) return null
    let len = 1
    let tail = head
    while (tail.next) {
        tail = tail.next
        len++
    }
    k = k % len
    if (k === 0) return head
    let newTail = head
    for (let i = 0; i < len - k - 1; i++) newTail = newTail.next
    let newHead = newTail.next
    newTail.next = null
    tail.next = head
    return newHead
}

//86. Partition List

/*
Given a linked list and a value x, partition it such that all nodes less than x
come before nodes greater than or equal to x.

You should preserve the original relative order of the nodes in each of the two partitions.

Example:

Input: head = 1->4->3->2->5->2, x = 3
Output: 1->2->2->4->3->5
*/


var partition = function(head, x) {
    let dummy1 = new ListNode(0)
    let dummy2 = new ListNode(0)
    let cur1 = dummy1
    let cur2 = dummy2
    while (head) {
        if (head.val < x) {
            cur1.next = head
            cur1 = cur1.next
        } else {
            cur2.next = head
            cur2 = cur2.next
        }
        head = head.next
    }
    cur1.next = dummy2.next
    cur2.next = null
    return dummy1.next
}


//146. LRU Cache


/*
Design and implement a data structure for Least Recently Used (LRU) cache. It should support the following operations: get and put.

get(key) - Get the value (will always be positive) of the key if the key exists in the cache, otherwise return -1.
put(key, value) - Set or insert the value if the key is not already present. When the cache reached its capacity, it should invalidate the least recently used item before inserting a new item.


Follow up:
Could you do both operations in O(1) time complexity?


Example:    

Input

["LRUCache", "put", "put", "get", "put", "get", "put", "get", "get", "get"]

[[2], [1, 1], [2, 2], [1], [3, 3], [2], [4, 4], [1], [3], [4]]


Output

[null, null, null, 1, null, -1, null, -1, 3, 4]


*/

var LRUCache = function(capacity) {

    this.capacity = capacity
    this.map = new Map()
    this.head = new Node(0, 0)
    this.tail = new Node(0, 0)
    this.head.next = this.tail
    this.tail.pre = this.head


    this.addToHead = function(node) {
        node.next = this.head.next
        node.pre = this.head
        this.head.next.pre = node
        this.head.next = node
    }
   


}


LRUCache.prototype.get = function(key) {
    if (this.map.has(key)) {
        let node = this.map.get(key)
        this.moveToHead(node)
        return node.val
    }
    return -1
}

LRUCache.prototype.put = function(key, value) {
    if (this.map.has(key)) {
        let node = this.map.get(key)
        node.val = value
        this.moveToHead(node)
    } else {
        let node = new Node(key, value)
        this.map.set(key, node)
        this.addToHead(node)
        if (this.map.size > this.capacity) {
            let node = this.removeTail()
            this.map.delete(node.key)
        }
    }
}





























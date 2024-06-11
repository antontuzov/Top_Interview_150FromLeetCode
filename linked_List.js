
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














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
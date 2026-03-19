/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    // Step 1: Create dummy node
    let dummy = { val: 0, next: head };
    
    let slow = dummy;
    let fast = dummy;

    // Step 2: Move fast n steps ahead
    for (let i = 0; i < n; i++) {
        fast = fast.next;
    }

    // Step 3: Move both pointers
    while (fast.next !== null) {
        slow = slow.next;
        fast = fast.next;
    }

    // Step 4: Delete nth node
    slow.next = slow.next.next;

    // Step 5: Return new head
    return dummy.next;
};
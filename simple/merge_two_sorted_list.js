

function ListNode(val, next) {
    this.val = val;
    this.next = next;

}



/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */


const mergeTwoLists = function(l1, l2) {
    let node1 = l1;
    let node2 = l2;
    while (node1) {
        if (node1.val > node2) {
            const temp = node2.next;
            node2.next = node1;

        } else {

        }

        while (l2.next) {

        }
    }


    if (l1.val < l2.val) {

    } else {
        const temp = l2.next;
        l2.next = l1;

    }

};

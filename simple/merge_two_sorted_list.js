

function ListNode(val, next) {
    this.val = val;
    this.next = next;

}


const getNodefirst = () => {
	const endValue = 19;
	let temp = null;
	let i = endValue;
	while (i > 0) {
		temp = new ListNode(i, temp);
		i -= 2;
	}
	return temp;
};

const nodeFromList = (list, index) => {
	let next = null;
	const isFirst = typeof index !== 'number';
	const isLast = list.length === index + 1;
	const nextIndex = isFirst ? index + 1 : 1;

	const currentIndex = isFirst ? 0 : index;

	let n;
	if (isLast) {
		n = new ListNode(list[index], null);
	} else {
		next = nodeFromList(list, nextIndex);
		n = new ListNode(list[currentIndex], next);
	}
	return n;
};


const printNodeList = (startNode) => {
	let str = '';
	let nod = startNode;
	while (nod && nod.val) {
		str += nod.val+'->';
		nod = nod.next;
	}
	console.log(str);
};

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

const startN = nodeFromList([9, 8, 7, 12, 0, 22, 19, 82, 122]);
printNodeList(startN);

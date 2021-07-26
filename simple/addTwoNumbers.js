/*
 * @Author: your name
 * @Date: 2021-07-25 17:02:45
 * @LastEditTime: 2021-07-26 22:31:38
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /leetcode/simple/addTwoNumbers.js
 */

/**
 * Definition for singly-linked list.
 *
 */

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
  // return this;
}

function printListNode(ln) {
  let node = ln;
  const list1 = [];

  while (node) {
    list1.push(node.val);
    node = node.next;
  }
  // console.log(list1.join(","));
  console.log(list1);
}

function createListNode(num) {
  const str = String(num);
  const length = str.length;
  let node;
  for (let i = 0; i < length; i += 1) {
    const val = Number(str[i]);
    node = new ListNode(val, node);
  }
  return node;
}

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
function addTwoNumbers(l1, l2) {
  let temp = 0;
  let node = new ListNode(0);
  let node1 = l1;
  let node2 = l2;
  let lastNode;
  let first = node;
  while (node1 || node2 || temp) {
    let val = null;
    if (node1 && node2) {
      val = node1.val + node2.val + temp;
      node1 = node1.next;
      node2 = node2.next;
    } else if (node1) {
      val = node1.val + temp;
      node1 = node1.next;
    } else if (node2) {
      val = node2.val + temp;
      node2 = node2.next;
    } else if (temp) {
      val = temp;
    }
    if (val !== null) {
      if (val >= 10) {
        temp = 1;
        val = val - 10;
      } else {
        temp = 0;
      }
      console.log("val = ", val);
      // list.unshift(val);
      node.next = new ListNode(val);
      node = node.next;
    }
  }
  return first.next;
}

const test = () => {
  const lnA = createListNode(9999999);
  const lnB = createListNode(9999);

  printListNode(lnA);
  printListNode(lnB);

  printListNode(addTwoNumbers(lnA, lnB));
};

test();

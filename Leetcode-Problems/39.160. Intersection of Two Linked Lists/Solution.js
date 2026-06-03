// 1st approach - using two pointers and calculating the length of both the linked lists and then moving the pointer of the longer linked list ahead by the difference in length and then moving both the pointers of the linked lists one step at a time until they point to the same node and then returning that node as the answer
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function (headA, headB) {
  let currA = headA;
  let currB = headB;

  let n = 0;
  let m = 0;

  while (currA) {
    ++n;
    currA = currA.next;
  }
  while (currB) {
    ++m;
    currB = currB.next;
  }
  let diff = Math.abs(m - n);
  if (n > m) {
    let temp = headA;
    headA = headB;
    headB = temp;
  }

  for (let i = 0; i < diff; i++) {
    headB = headB.next;
  }

  currA = headA;
  currB = headB;

  while (currA != currB) {
    currA = currA.next;
    currB = currB.next;
  }
  return currA;
};

// TC - O(n + m) for traversing both the linked lists to calculate their lengths and then traversing the longer linked list to move the pointer ahead by the difference in length and then traversing both the linked lists one step at a time until they point to the same node
// SC - O(1) for using constant space to store the pointers and variables

// 2nd approach - using two pointers and moving both the pointers of the linked lists one step at a time until they point to the same node and if they point to null then returning null as the answer
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function (headA, headB) {
  let pA = headA;
  let pB = headB;
  while (pA != pB) {
    pA = pA ? pA.next : headB;
    pB = pB ? pB.next : headA;
  }
  return pA;
};
// TC - O(n + m) for traversing both the linked lists one step at a time until they point to the same node and if they point to null then returning null as the answer
// SC - O(1) for using constant space to store the pointers and variables

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {
  // eslint-disable-next-line no-undef
  const tempHead = new ListNode(-Infinity);
  let previous = tempHead;
  while (list1 && list2) {
    if (list1.val <= list2.val) {
      previous.next = list1;
      previous = list1;
      list1 = list1.next;
    } else {
      previous.next = list2;
      previous = list2;
      list2 = list2.next;
    }
  }
  if (!list1) previous.next = list2;
  if (!list2) previous.next = list1;
  return tempHead.next;
};
mergeTwoLists([1, 2, 4], [1, 3, 4]);

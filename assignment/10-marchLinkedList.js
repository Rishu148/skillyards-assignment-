class ListNode {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }
  
  let h = new ListNode(8);
  let i = new ListNode(10);
  h.next = i;
  
  let a = new ListNode(3);
  let b = new ListNode(6);
  let c = new ListNode(9);
  a.next = b;
  b.next = c;
  c.next = h;
  
  let d = new ListNode(4);
  let e = new ListNode(7);
  d.next = e;
  e.next = h;
  
  let pA = a, pB = d;
  
  while (pA !== pB) {
    pA = (pA === null) ? d : pA.next;
    pB = (pB === null) ? a : pB.next;
  }
  
  console.log(pA ? pA.value : -1); // Output: 8 (common node)
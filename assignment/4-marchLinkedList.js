// Problem 1: Merge Two Sorted Lists 
// Description 
// You are given two singly linked lists that are sorted in ascending order. Your task is to 
// merge these two lists into one sorted list. The final list should also be sorted. 
// Example 
// Input: 
// List 1: 1 -> 3 -> 5 
// List 2: 2 -> 4 -> 6 
// Output: 
// Merged List: 1 -> 2 -> 3 -> 4 -> 5 -> 6 



class ListNode {
    constructor(val = 0, next = null) {                                        
        this.val = val;
        this.next = next;
    }
}

function mergeTwoLists(l1, l2) {
    let dummy = new ListNode();
    let current = dummy;
    
    while (l1 !== null && l2 !== null) {
        if (l1.val < l2.val) {
            current.next = l1;
            l1 = l1.next;
        } else {
            current.next = l2;
            l2 = l2.next;
        }
        current = current.next;
    }
    
    if (l1 !== null) {
        current.next = l1;
    } else {
        current.next = l2;
    }
    
    return dummy.next;
}

function printList(node) {
    let result = [];
    while (node !== null) {
        result.push(node.val);
        node = node.next;
    }
    console.log(result.join(' -> '));
}

let l1 = new ListNode(1, new ListNode(3, new ListNode(5)));
let l2 = new ListNode(2, new ListNode(4, new ListNode(6)));

let mergedList = mergeTwoLists(l1, l2);
printList(mergedList);







// Problem 2: Remove Nth Node From End of List 
// Description 
// Given a singly linked list, remove the nth node from the end of the list and return its 
// head. 
// This problem will help you practice two-pointer techniques, as you need to locate and 
// remove the node efficiently in a single pass. 
// Example 
// Input: 
// List: 1 -> 2 -> 3 -> 4 -> 5 
// n = 2 
// Output: 
// Result List: 1 -> 2 -> 3 -> 5



// class ListNode {
//     constructor(val = 0, next = null) {                                        
//         this.val = val;
//         this.next = next;
//     }
// }

// let a = new ListNode(1);
// let b = new ListNode(2);
// let c = new ListNode(3);
// let d = new ListNode(4);
// let e = new ListNode(5);    

// a.next = b;
// b.next = c;
// c.next = d;
// d.next = e; 

// let head = a;
// let current = head;     


// function removeNthFromEnd(head, n) {
//     let dummy = new ListNode();
//     dummy.next = head;
//     let first = dummy;
//     let second = dummy;
    
//     for (let i = 1; i <= n + 1; i++) {
//         first = first.next;
//     }
    
//     while (first !== null) {
//         first = first.next;
//         second = second.next;
//     }
    
//     second.next = second.next.next;
    
//     return dummy.next;
// }

// function printList(node) {
//     let result = [];
//     while (node !== null) {
//         result.push(node.val);
//         node = node.next;
//     }
//     console.log(result);
// }

// let n = 3;
// let result = removeNthFromEnd(head, n);
// printList(result);


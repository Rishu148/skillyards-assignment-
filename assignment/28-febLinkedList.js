// 1 Insert Node at the Beginning 
// Title: Inserting a Node at the Start of the Linked List 
// Description: 
// Write a function to insert a new node at the very beginning of a singly linked list. The 
// new node should become the head of the list.




// class Node {
//     constructor(data){
//         this.data = data
//         this.next = null
//     }
// }

// let a = new Node(1)
// let b = new Node(2)
// let c = new Node(3)
// let d = new Node(4)

// a.next = b
// b.next = c
// c.next = d

// let head = a
// let current = head

// function insertAtBeginning(data){
//     let newNode = new Node(data)
//     newNode.next = current
//     current = newNode
// }
// insertAtBeginning(0)


// while(current!=null){
//     console.log(current.data)
//     current = current.next
// }









// 2 Insert Node at the End 
// Title: Inserting a Node at the End of the Linked List 
// Description: 
// Write a function to insert a new node at the end of a singly linked list. If the list is 
// empty, the new node should become the head.



// class Node {
//     constructor(data){
//         this.data = data
//         this.next = null
//     }
// }

// let a = new Node(1)
// let b = new Node(2)
// let c = new Node(3)
// let d = new Node(4)

// a.next = b  
// b.next = c
// c.next = d


// let head = a 
// let current = head

// let newNode = new Node(9)



// while (current.next !== null) { 
//     console.log(current.data);
//     current = current.next; 
//     } 

// current.next = newNode


// while(current!=null){
//     console.log(current.data)
//     current = current.next
// }










// Insert Node at nth Position 
// Title: Inserting a Node at Specific Position 
// Description: 
// Write a function to insert a new node at the nth position in a singly linked list. Handle 
// cases where: 
// ● The list is empty. 
// ● n is the first position. 
// ● n is beyond the length of the list (optional - show an error message if needed).





// class Node {
//     constructor(data){
//         this.data = data
//         this.next = null
//     }
// }

// let a = new Node(1)
// let b = new Node(2)
// let c = new Node(3)
// let d = new Node(4)

// a.next = b      
// b.next = c
// c.next = d

// let prompt = require("prompt-sync")();
// let n = prompt("Enter the position: ");

// let head = a
// let current = head


// let newNode = new Node(5)


// while (current != null && current.data != n) { 
//     console.log(current.data);
//     current = current.next; 
//     }

// newNode.next = current
// current = newNode

// while(current!=null){
//     console.log(current.data)
//     current = current.next
// }










// 4 Delete Node from Beginning 
// Title: Deleting the First Node from Linked List 
// Description: 
// Write a function to delete the first node of a singly linked list. After deletion, update the 
// head pointer to the next node. 



// class node {
//     constructor(data){
//         this.data= data
//         this.next=null
//     }
// }

// let a = new node(1)
// let b = new node(2)
// let c = new node(3)
// let d = new node(4)
// let e = new node(5)

// a.next = b
// b.next = c
// c.next = d
// d.next = e

// let head = a 
// let current = head

// current = current.next
 

// while(current!=null){
//     console.log(current.data);
//     current = current.next
    
// }






// 5 Delete Node from End 
// Title: Deleting the Last Node from Linked List 
// Description: 
// Write a function to delete the last node of a singly linked list. Make sure to handle the 
// case when there is only one node. 


// class node {
//     constructor(data){
//         this.data= data
//         this.next=null
//     }
// }

// let a = new node(1)
// let b = new node(2)
// let c = new node(3)
// let d = new node(4)
// let e = new node(5)

// a.next = b
// b.next = c
// c.next = d
// d.next = e

// let head = a
// let current = head


// function deleteLastNode(head) {
//     if (head.next == null) {
//       return null;
//     }
  
//     let current = head;
//     while (current.next.next != null) {
//       current = current.next;
//     } 
  
//     current.next = null;
//     return head;
//   }
  
  
//  deleteLastNode(head);
  
//   while (head != null) {
//     console.log(head.data);
//     head = head.next;
//   } 







// 6 Delete Node at nth Position 
// Title: Deleting Node at Specific Position 
// Description: 
// Write a function to delete the node at the nth position in a singly linked list. Handle 
// cases where: 
// ● n is the first position. 
// ● n is beyond the length of the list (optional - show an error message if needed).





// class node{
//     constructor(data){
//         this.data = data
//         this.next = null
//     }
// }

// let a = new node(1)
// let b = new node(2)
// let c = new node(3)
// let d = new node(4)
// let e = new node(5)

// a.next = b
// b.next = c
// c.next = d
// d.next = e


// let prompt = require("prompt-sync")();
// let n = prompt("Enter the position: ");

// let head = a
// let current = head

// while (current != null && current.data != n) { 
//     console.log(current.data);
//     current = current.next; 
//     }

// current = current.next

// while(current!=null){
//     console.log(current.data)
//     current = current.next
// }










// 7 Display All Nodes 
// Title: Displaying All Nodes in Linked List 
// Description: 
// Write a function to traverse and print all nodes present in the singly linked list. Display 
// the values in order.




// class node {
//     constructor(data){
//         this.data = data;
//         this.next = null;
//     }
// }

// let a = new node(1)
// let b = new node(2)
// let c = new node(3)
// let d = new node(4)
// let e = new node(5)


// a.next = b
// b.next = c
// c.next = d
// d.next = e

// let head = a
// let current = head 


// while(current!=null){
//     console.log(current.data);
//     current = current.next 
// }






// 8 Search for a Node by Value 
// Title: Searching for a Value in Linked List 
// Description: 
// Write a function to search for a given value in a singly linked list. If the value is found, 
// return its position (1-based). If the value is not present, print a not found message. 



// class node {
//     constructor(data){
//         this.data = data;
//         this.next = null;
//     }
// }

// let a = new node(2)
// let b = new node(5)
// let c = new node(3)
// let d = new node(4)
// let e = new node(1)


// a.next = b
// b.next = c
// c.next = d
// d.next = e

// let head = a
// let current = head



// let prompt = require("prompt-sync")();
// let n = prompt("Enter the value: ");



// while(current!=null){
//     if (current.data == n){
//         console.log("Found")

//         break
//     }
//     current = current.next
// }

// if (current == null){
//     console.log("Not Found")

// }


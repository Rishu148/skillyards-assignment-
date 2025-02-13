// Questions 
// -------------------------------------1. Merging Arrays with Spread Operator------------------------------------------- 
// Description: 
// Write a function that takes two arrays as arguments and merges them into a single array 
// using the spread operator. 

// Example Input: 
// mergeArrays([1, 2, 3], [4, 5, 6]); 
// Expected Output: 
// [1, 2, 3, 4, 5, 6]


// let arr =[1, 2, 3]
// let arr1 =[4, 5, 6]
// let arr2 =[...arr,...arr1]
// console.log(arr2)








// ---------------------------------------2. Copying and Modifying an Object--------------------------------------------
// Description: 
// Given an object, use the spread operator to create a copy and modify one of its 
// properties without changing the original object. 
// Example Input 
// const person = { name: "Alice", age: 25 }; 
// Modify the age property to 30 in a new object. 




// let arr = {name:"alice",age:25}
// let arr1 = {...arr,age:30}
// console.log(arr1)





//-------------------------------------3. Using Rest Operator in Functions--------------------------------------------
// Description: 
// Create a function that takes multiple numbers as arguments and returns their sum using the rest operator. 
// Example Input: 
// sum(5, 10, 15, 20); 
// Expected Output: 
// 50


// function sum(...nums){
//     return nums.reduce((accumulator, currentValue)=>accumulator + currentValue,0)
// }
// console.log(sum(5,10,15,20))




//--------------------------------- 4. Extracting Values with Rest Operator---------------------------------------------
// Description: 
// Using array destructuring and the rest operator, extract the first two elements of an array 
// into separate variables and store the remaining elements in another variable. 
// Example Input: 
// const numbers = [1, 2, 3, 4, 5, 6]; 
// Expected Output: 
// first = 1, second = 2, rest = [3, 4, 5, 6] 


// let arr = [1,2,3,4,5,6]
// let [first,second,...rest] = arr
// console.log(`first = ${first}, second = ${second}, rest = ${rest}`)




// ------------------------------5. Combining Objects with Spread Operator---------------------------------------------- 
// Description: 
// Write a function that merges two objects into one using the spread operator. 
// Example Input: 
// const obj1 = { a: 1, b: 2 };
// const obj2 = { c: 3, d: 4 };   
// Expected Output: 
// { a: 1, b: 2, c: 3, d: 4 }




// function merge(obj1,obj2){
//     return {...obj1,...obj2}
// }
// console.log(merge({a:1,b:2},{c:3,d:4}))









// -----------------------------------6. Removing a Property from an Object--------------------------------------------------
// Description: 
// Use the spread operator and object destructuring to remove a specific property from an 
// object. 
// Example Input  
// const user = { id: 101, name: "John", role: "Admin" } 
// Remove the role property and store the remaining properties in a new object. 


// let {role,...a} = {id:101,name:"John",role:"Admin"}
// console.log(a)  








// ----------------------------------7. Finding the Maximum Value using Spread Operator---------------------------------------
// Description: 
// Use the spread operator to find the maximum value in an array using the Math.max() 
// function. 
// Example Input: 
// const numbers = [45, 78, 12, 89, 23]; 
// Expected Output: 
// 89


// let arr = [45, 78, 12, 89, 23];
// console.log(Math.max(...arr))






// -----------------------------------8. Function with Default and Rest Parameters--------------------------------------------- 
// Description: 
// Write a function where the first parameter is mandatory, and the rest of the parameters 
// are optional using the rest operator. 
// Example Input: 
// function greet(firstName, ...messages) {  
// Implementation  
// } 
// greet("Alice", "Hello", "Good Morning", "How are you?"); 
// Expected Output: 
// "Alice: Hello, Good Morning, How are you?"



// function greet(firstName,...messages){
//     return `${firstName}: ${messages.join(", ")}`
// }
// console.log(greet("Alice","Hello","Good Morning","How are you?"))










// ------------------------------------9. Swapping Variables with Spread Operator---------------------------------------------- 
// Description: 
// Given two variables, swap their values using the spread operator ...[]. 
// Example Input 
// let x = "apple", y = "banana"; 
// Expected Output: 
// x = "banana", y = "apple" 


// let x = "apple", y = "banana";
// let a = [...x]
// let b = [...y]
// x = b.join("")
// y = a.join("")
// console.log(x,y)











//-----------------------------------10. Flattening a Nested Array------------------------------------------------------- 
// Description: 
// Write a function that takes a nested array and flattens it into a single array using the 
// spread operator. 
// Example Input 
// const nestedArr = [1, [2, 3], [4, 5, [6, 7]]]; 
// Expected Output: 
// [1, 2, 3, 4, 5, 6, 7]


// let arr =[1, [2, 3], [4, 5, [6, 7]]]
// let arr1 = arr.flat(2)
// console.log(arr1);








 
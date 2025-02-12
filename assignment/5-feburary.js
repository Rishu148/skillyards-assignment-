// Assignment Questions

// --------------------------------1. map() Method - Transforming Arrays--------------------------

// The map() method is used to create a new array by applying a function to each element of an existing array. It does not modify the original array.



// Questions:

//------------------------Write a function that takes an array of numbers and returns a new array with each number squared using map().

// Example:
// Input: [1, 2, 3, 4, 5]
// Output: [1, 4, 9, 16, 25]

// let arr = [1, 2, 3, 4, 5];
// let arr1 = arr.map((num) => num * num);
// console.log(arr1);




// ------------------------Given an array of strings, use map() to return a new array where each string is converted to uppercase.

// Example:
// Input: ["hello", "world"]
// Output: ["HELLO", "WORLD"]

// let arr2 = ["hello", "world"];
// let arr3 = arr2.map((str) => str.toUpperCase());
// console.log(arr3);





// -------------------Given an array of objects with properties {name, age}, use map() to return an array containing only the names.

// Example:
// Input: [{name: "Alice", age: 25}, {name: "Bob", age: 30}]
// Output: ["Alice", "Bob"]

// let arr4 = [{name: "Alice", age: 25}, {name: "Bob", age: 30}];
// let arr5 = arr4.map((obj) => obj.name);
// console.log(arr5);




// ------------------Convert an array of temperatures in Celsius to Fahrenheit using map().

// Example:
// Input: [0, 10, 20, 30, 40]
// Output: [32, 50, 68, 86, 104]

// let arr6 = [0, 10, 20, 30, 40];
// let arr7 = arr6.map((temp) => (temp * 9/5) + 32);
// console.log(arr7);




// ----------------- Use map() to transform an array of prices by applying a 10% discount to each price

// Example:
// Input: [10, 20, 30, 40, 50]
// Output: [9, 18, 27, 36, 45]

// let arr8 = [10, 20, 30, 40, 50];
// let arr9 = arr8.map((price) => price - (price * 10/100));
// console.log(arr9);












// 2. -----------------------------filter() Method - Selecting Specific Elements------------------------------------

// The filter() method creates a new array containing only elements that pass a specific condition. It does not modify the original array.

// Questions:

//--------------------Write a function that filters out all even numbers from an array of numbers using filter().

// Example:
// Input: [1, 2, 3, 4, 5]
// Output: [2,4]

// let arr10 = [1, 2, 3, 4, 5];
// let arr11 = arr10.filter((num) => num % 2 == 0);
// console.log(arr11);




//------------------------Given an array of students with {name, score}, filter out students who scored below 50.

// Example:
// Input: [{name: "John", score: 90}, {name: "Jane", score: 75}, {name: "Bob", score: 30}]
// Output: [{name: "bob", score: 30}]

// let arr12 = [{ name: "John", score: 90 }, { name: "Jane", score: 75 }, { name: "Bob", score: 30 }];
// let arr13 = arr12.filter((student) => student.score <= 50);
// console.log(arr13);



//----------------------Use filter( ) to return only the strings from an array containing both numbers and strings.

// Example:
// Input: ["apple", 2, "banana", 4, "orange", 6]
// Output: ["apple", "banana", "orange"]

// let arr14 = ["apple", 2, "banana", 4, "orange", 6];
// let arr15 = arr14.filter((element)=> typeof element === "string");
// console.log(arr15);



// ----------------------Given an array of words, fitter out words that are shorter than 5 characters.

// Example:
// Input: ["hello", "world", "apple", "banana", "orange"]
// Output: ["hell"]


// let arr16 = ["hell", "world", "apple", "banana", "orange"];
// let arr17 = arr16.filter((word) => word.length < 5);
// console.log(arr17);




//----------------------Filter an array of products to return only those that are in stock ({name, price, instock} where instock is true)

// Example:
// Input: [{name: "apple", price: 10, instock: true}, {name: "banana", price: 5, instock: false}, {name: "orange", price: 15, instock: true}]
// Output: [{name: "apple", price: 10, instock: true}, {name: "orange", price: 15, instock: true}]


// let arr18 = [{ name: "apple", price: 10, instock: true }, { name: "banana", price: 5, instock: false }, { name: "orange", price: 15, instock: true }];
// let arr19 = arr18.filter((product)=>product.instock===true);
// console.log(arr19);













//------------------------------------ 3. reduce() Method • Aggregating Data------------------------------------

// Tho reduce( ) method processes an array and returns a single accumulated value, such as a sum or an average.

// Questions:

// -------------------------Write a function that calculates the sum of all numbers in an array using reduce().

// Example:
// Input: [1, 2, 3, 4, 5]
// Output: 15

// let arr20 = [1, 2, 3, 4, 5];
// function sumOfArray(arr){
//     return arr.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
// }
// console.log(sumOfArray(arr20));





//----------------------Given an array of prices, use reduce( ) to calculate the total cost of all products.

// exapmple:
// Input: [10, 20, 30, 40, 50]
// Output: 150

// let arr21 = [10, 20, 30, 40, 50];
// let arr22 = arr21.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
// console.log(arr22);




//--------------------------Find the maximum number in an array using reduce( ).

// Example:
// Input: [1, 2, 3, 4, 5, 7, 4]
// Output: 7

// let arr23 = [1, 2, 3, 4, 5, 7, 4];
// let arr24 = arr23.reduce((accumulator, currentValue) => Math.max(accumulator, currentValue), 0);
// console.log(arr24);




//-------------------------Given an array Of students {name, age}, use reduce() to find the average age Ot the students.

// Example:
// Input: [{name: "John", age: 20}, {name: "Jane", age: 25}, {name: "Doe", age: 30}]
// Output: 25

// let arr25 = [{ name: "John", age: 20 }, { name: "Jane", age: 25 }, { name: "Doe", age: 30 }];
// let arr26 = arr25.reduce((accumulator, currentValue) => accumulator + currentValue.age, 0);
// let arr27 = arr26 / arr25.length;
// console.log(arr27);




//--------------------------Use reduce( ) to count the occurrences of each word in an array of strings

// Example:
// Input: ["apple", "banana", "apple", "orange", "banana"]
// Output: {apple: 2, banana: 2, orange: 1}


// let arr28 = ["apple", "banana", "apple", "orange", "banana"];
// let arr29 = arr28.reduce((accumulator, currentValue)=>{
//     accumulator[currentValue]=(accumulator[currentValue]||0)+1;
//     return accumulator;
// },{})
// console.log(arr29);





// ---------------------------------------- 4. forEach() Method - Iterating Over Arrays ---------------------------------------

// The forEach( ) method executes a function once for each array element but does not retum a new array. It is mainly used for performing actions like logging or modifying elements in place.

// Questions:
// ----------------------------Write a function that prints each element of an array using forEach( ).
// Example:
// Input: [1, 2, 3, 4, 5]
// Output: 1 2 3 4 5

// let arr30 = [1, 2, 3, 4, 5];
// let arr31 = [];
// arr30.forEach((element) => {
//     arr31.push(element);
// });
// console.log(arr31);




// -----------------------------Use forEach() to iterato over an array of objects and log each object's name property.

// Example:
// Input: [{name: "John", age: 20}, {name: "Jane", age: 25}, {name: "Doe", age: 30}]
// Output: John Jane Doe

// let arr32 = [{ name: "John", age: 20 }, { name: "Jane", age: 25 }, { name: "Doe", age: 30 }];
// let arr33 = [];
// arr32.forEach((element) => {
//     arr33.push(element.name);
// });
// console.log(arr33);





//-------------------------- Given an array of numbers, use forEach( ) to modify the original array by multiplying each number by 2.

// Example:
// Input: [1, 2, 3, 4, 5]
// Output: [2, 4, 6, 8, 10]

// let arr34 = [1, 2, 3, 4, 5];
// let arr35 = [];
// arr34.forEach((elements)=>{
//     arr35.push(elements*2)
// })
// console.log(arr35);



//------------------------- Create a function that logs "Even" for even numbers and "Odd" for odd numbers in an array using forEach( ).

// Example:
// Input: [1, 2, 3, 4, 5]
// Output: odd even odd even odd

// let arr36 = [1, 2, 3, 4, 5];
// let arr37 = [];
// arr36.forEach((elements)=>{
//     if(elements%2==0){
//         arr37.push("Even");
//     }
//     else{
//         arr37.push("Odd");
//     }
// })
// console.log(arr37);




//--------------------------Use forEach() to sum up all numbers in an array without using reduce().

// Example:
// Input: [1, 2, 3, 4, 5]
// Output: 15

// let arr38 =[1, 2, 3, 4, 5];
// let arr39 = 0;
// arr38.forEach((elements)=>{
//     arr39 += elements;
// })
// console.log(arr39);




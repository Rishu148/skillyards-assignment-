// 1. Exercises on filter() Method 


// Q1: Filtering Even Numbers 


// Description: Write a function that filters out even numbers from an array of integers. 
// Example: 
// filterEvenNumbers([1, 2, 3, 4, 5, 6]); // Output: [2, 4, 6]


// let arr = [1, 2, 3, 4, 5, 6]
// let arr1 = arr.filter((num) => num % 2 == 0)
// console.log(arr1);





// Q2: Removing Negative Numbers 
// Description: Write a function that removes all negative numbers from 
// an array using filter(). 
// Example: 
// removeNegativeNumbers([-3, 4, -1, 6, -7, 9]); // Output: [4, 6, 9]


// let arr2 =[-3, 4, -1, 6, -7, 9]
// let arr3 = arr2.filter ((num)=>num>1)
// console.log(arr3)




// Q3: Finding Strings with Length Greater than 5 
// Description: Given an array of strings, return a new array containing 
// only the strings that have more than 5 characters. 
// Example: 
// filterLongStrings(["apple", "banana", "cat", "strawberry"]); // Output: 
// ["banana", "strawberry"]


// let arr4 =["apple", "banana", "cat", "strawberry"]
// let arr5 = arr4.filter((str)=> str.length>5)
// console.log(arr5);





// Q4: Filtering Prime Numbers 
// Description: Implement a function that returns only the prime 
// numbers from an array of numbers using filter(). 
// Example: 
// filterPrimes([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]); // Output: [2, 3, 5, 7]


// let arr6 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// let arr7 = arr6.filter ((num) => {
//     if (num < 2) {
//         return false
//     }
//     for (let i = 2; i <= Math.sqrt(num); i++) {
//         if (num % i === 0) {
//             return false
//         }
//     }
//     return true
// })
// console.log(arr7);





// Q5: Finding Adults from an Object List 
// Description: Given an array of objects with name and age, filter out 
// objects where the age is below 18. 
// Example: 
// filterAdults([{name: "Alice", age: 17}, {name: "Bob", age: 20}]); // 
// Output: [{name: "Bob", age: 20}]


// let arr8 =[{name: "Alice", age: 17}, {name: "Bob", age: 20}]; 
// let arr9 = arr8.filter((obj)=>obj.age<18)
// console.log(arr9);








// 2. Exercises on map() Method 
// Q1: Doubling Array Values 
// Description: Write a function that takes an array of numbers and 
// returns a new array with each number doubled. 
// Example: 
// doubleValues([1, 2, 3]); // Output: [2, 4, 6]

// let arr10 =[1,2,3]
// let arr11 =arr10.map((num)=> num*2)
// console.log(arr11)




// Q2: Converting Temperatures from Celsius to Fahrenheit 
// Description: Convert an array of temperatures in Celsius to 
// Fahrenheit using map(). 
// Formula: F = (C × 9/5) + 32 
// Example: 
// convertToFahrenheit([0, 25, 100]); // Output: [32, 77, 212]

// let arr12 = [0, 25, 100]
// let arr13 = arr12.map((num)=>(num*9/5)+32)
// console.log(arr13)




// Q3: Extracting Names from an Array of Objects 
// Description: Given an array of objects containing name and age, 
// return an array containing only the names. 
// Example: 
// extractNames([{name: "Alice", age: 25}, {name: "Bob", age: 30}]); // 
// Output: ["Alice", "Bob"] 


// let arr14 = [{name: "Alice", age: 25}, {name: "Bob", age: 30}]
// let arr15 = arr14.map((obj)=>obj.name)
// console.log(arr15);




// Q4: Capitalizing First Letter of Strings 
// Description: Write a function that capitalizes the first letter of each 
// string in an array. 
// Example: 
// capitalizeWords(["hello", "world"]); // Output: ["Hello", "World"]


// let arr16 = ["hello", "world"]
// let arr17 = arr16.map((num)=>num.charAt(0).toUpperCase()+num.slice(1))
// console.log(arr17);




// Q5: Calculating Square of Numbers 
// Description: Given an array of numbers, return a new array 
// containing the square of each number using map(). 
// Example: 
// squareNumbers([2, 3, 4]); // Output: [4, 9, 16]

// let arr18 = [2, 3, 4]
// let arr19 = arr18.map((num)=>num*num)
// console.log(arr19);









// 3. Exercises on forEach() Method 
// Q1: Logging Elements to Console 
// Description: Write a function that takes an array of strings and logs 
// each element to the console using forEach(). 
// Example: 
// logElements(["apple", "banana", "cherry"]); 
// Output: 
// apple 
// banana 
// cherry



// let arr20 = ["apple", "banana", "cherry"]
// let arr21 = arr20.forEach((fruits)=>console.log(fruits))






// Q2: Finding the Sum of an Array 
// Description: Use forEach() to calculate and return the sum of all 
// numbers in an array. 
// Example: 
// sumArray([1, 2, 3, 4]); // Output: 10


// let arr22 = [1, 2, 3, 4]
// let arr23 = 0
// let arr24 = arr22.forEach((num)=>arr23+=num)
// console.log(arr23);






// Q3: Counting the Number of Even Numbers 
// Description: Use forEach() to count how many even numbers are 
// present in a given array. 
// Example: 
// countEvenNumbers([1, 2, 3, 4, 6]); // Output: 3

// let arr25 = [1, 2, 3, 4, 5, 6]
// let arr26 =[]
// let arr27 = arr25.forEach((num)=>{
//         if (num%2!=0)  {
//          arr26++
//     }
// })
// console.log(arr26);






// Q4: Modifying an Object Array 
// Description: Given an array of objects with a price property, use 
// forEach() to apply a 10% discount to each price. 
// Example: 
// discountPrices([{item: "apple", price: 100}, {item: "banana", price: 
// 50}]); 
// Output: [{item: "apple", price: 90}, {item: "banana", price: 45}]


// let arr28 = [{item: "apple", price: 100}, {item: "banana", price: 50}] 
// let arr29 = arr28.forEach((obj)=>{
//     obj.price = obj.price*0.9
// })
// console.log(arr28); 
 




// Q5: Appending "!" to Each String in an Array 
// Description: Write a function that appends an exclamation mark (!) to 
// every string in an array using forEach(). 
// Example: 
// appendExclamation(["hello", "world"]); // Output: ["hello!", "world!"]



// const appendExclamation = (arr) => {
//     arr.forEach((str) => {
//         str = str + "!"
//     })
//     return arr
// }
// console.log(appendExclamation(["hello", "world"]));
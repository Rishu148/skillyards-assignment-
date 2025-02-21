// Question 1: Find the Nth Largest Number in a Nested 
// Array 
// Write a function findNthLargest that takes a nested array (an array containing 
// sub-arrays of numbers) and an integer n. The function should return the nth largest 
// unique number from all sub-arrays combined. 
// Example 
// const arr = [[3, 5, 1], [12, 7, 9], [14, 10, 4]]; 
// console.log(findNthLargest(arr, 3)); // Output: 10 
// Hint: 
// ● Flatten the nested array into a single array. 
// ● Remove duplicates and sort it in descending order. 
// ● Return the nth largest element. 


// function findNthLargest(arr,n){
// let arr1 = arr.flat()
// let arr2 = [...new Set(arr1)]
// let arr3 = arr2.sort((a,b)=>b-a)
// return arr3[n-1]
// }
// console.log(findNthLargest([[3, 5, 1], [12, 7, 9], [14, 10, 4]],3));




// ------------------------------------------------------------------------



// Question 2: Find the Missing Number 
// Write a function findMissingNumber that takes an array containing n distinct numbers 
// from 1 to n+1, but one number is missing. The function should return the missing 
// number. 
// Example 
// const arr = [1, 2, 4, 5, 6]; 
// console.log(findMissingNumber(arr)); // Output: 3 
// Hint: 
// ● Use the sum formula for the first n numbers: sum = (n * (n + 1)) / 2 
// ● Subtract the sum of the given numbers from the expected sum.


// let arr = [1, 2, 4, 5, 6];

// function findMissingNumber(arr){
//     let n = arr.length + 1
//     let sum = (n * (n + 1)) / 2
//     let sum1 = 0
//     for (let i=0; i<arr.length; i++){
//         sum1 += arr[i]
//     }
//     return sum - sum1
// }
// console.log(findMissingNumber(arr));

// ------------------------------------------------------------------------------------------



// question 3: Write a function concatenateArrays that takes two arrays and returns a new array 
// that combines both arrays without using .concat(). 
// Example: 
// const arr1 = [1, 2, 3]; 
// const arr2 = [4, 5, 6]; 
// console.log(concatenateArrays(arr1, arr2)); // Output: [1, 2, 3, 
// 4, 5, 6] 
// Hint: 
// ● Use the spread operator (...) or loop through one array and push elements into 
// the other.


// function concatenateArrays(arr1,arr2){
//     let arr3 = [...arr1,...arr2]
//     return arr3
// }
// console.log(concatenateArrays([1, 2, 3],[4, 5, 6]));






// -----------------------------------------------------------------------------------------


// question 4: Write a function findFirstRepeatedWord that takes a string and returns the first 
// word that appears more than once. Ignore punctuation and consider words 
// case-insensitively. 
// Example: 
// const str = "JavaScript is great and JavaScript is fun!"; 
// console.log(findFirstRepeatedWord(str)); // Output: "JavaScript" 
// Hint: 
// ● Convert the string into an array of words. 
// ● Use a Set to track words as you iterate. 



 
// const fristReaptedWord=(str1)=>{
//     let newArray=str1.split(" ")
//     let obj={}
//     for(let i=0;i<newArray.length;i++){
//       if(obj[newArray[i]]) {
//         obj[newArray[i]]++
//       }else{
//         obj[newArray[i]]=1
//       }
//     }
//     for(let key in obj){
//       if(obj[key]>1){
//         return key
//       }
//     }
// }
    
// let str1 = "JavaScript is great and JavaScript is fun!"
// console.log(fristReaptedWord(str1))











// ---------------------------------------------------------------------------------------------




// Question 5: Two Sum (Find Two Numbers that Add 
//     Up to Target) 
//     Write a function twoSum that takes an array and a target number. It should return the 
//     indices of the two numbers that add up to the target. 
//     Example: 
//     const arr = [2, 7, 11, 15]; 
//     const target = 9; 
//     console.log(twoSum(arr, target)); // Output: [0, 1] 
//     Hint: 
//     ● Use a hash map (object) to store the indices of visited numbers for quick 
//     lookup. 
//     ● Iterate through the array and check if target - currentNumber exists in the 
//     hash map.


// function twoSum(arr,target){
//     let obj = {}
//     for (let i = 0; i < arr.length; i++) {
//         let num = arr[i]
//         let diff = target - num
//         if (obj[diff] !== undefined) {
//             return [obj[diff],i]
//         }
//         obj[num] = i
//     }
//     return []
// }
// console.log(twoSum([2, 7, 11, 15],9))












// find first and last Word in a string

let str = "i am software developer"
let arr = str.split(" ")
let firstWord = arr[0]
let lastWord = arr[arr.length-1]
console.log(firstWord);

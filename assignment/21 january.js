// Question 1: Write a program that accepts a student's score and determines the grade based on the following conditions:

// If the score is greater than or equal to 90, the grade is "A".
// If the score is between 80 and 89, the grade is "B".
// If the score is between 70 and 79, the grade is "C".
// If the score is below 70:
// If the score is greater than or equal to 50, the grade is "D".
// Otherwise, the grade is "F".
// Example Input:
// Enter the score: 65
// Example Output:
// Grade: D


// let prompt = require("prompt-sync")();

// let score = prompt("Enter the score: ");
// if (score >= 90){
//     console.log("Grade: A");
// }
// else if (score >= 80 && score <= 89){
//     console.log("Grade: B");
// }
// else if (score >= 70 && score <= 79){
//     console.log("Grade: C");
// }
// else if (score >= 50 && score <= 69){
//     console.log("Grade: D");
// }
// else{
//     console.log("Grade: F");
// }





// Question 2: Triangle Type Detector
// Write a program to determine the type of triangle based on the lengths of its three sides (a, b, c):

// If all three sides are equal, it is an Equilateral triangle.
// If exactly two sides are equal:
// Check if the third side is larger than 0; if yes, it is an Isosceles triangle.
// Otherwise, print "Invalid".
// If all sides are different, it is a Scalene triangle.
// Print "Invalid" if any side is non-positive.
// Example Input:
// a = 5, b = 5, c = 7
// Example Output:
// Isosceles triangle

// let prompt = require("prompt-sync")();

// let a = prompt("Enter the value of a: ");
// let b = prompt("Enter the value of b: ");
// let c = prompt("Enter the value of c: ");

// if (a == b && b == c){
//     console.log("Equilateral triangle");
// }
// else if (a == b || b == c || c == a){
//     if (a > 0 && b > 0 && c > 0){
//         console.log("Isosceles triangle");
//     }
//     else{
//         console.log("Invalid");
//     }
// }
// else if (a != b && b != c && c != a){
//     if (a > 0 && b > 0 && c > 0){
//         console.log("Scalene triangle");
//     }
//     else{
//         console.log("Invalid");
//     }
// }





// Question 3: Check for Even or Odd in Nested Ranges
// Write a program to determine whether a number is even or odd, with additional nested checks:

// If the number is even:
// Check if it is greater than 50.
// If yes, print "Even and Large".
// Otherwise, print "Even and Small".
// If the number is odd:
// Check if it is less than 30.
// If yes, print "Odd and Small".
// Otherwise, print "Odd and Large".
// Example Input:
// Enter a number: 67

// Example Output:
// Odd and Large



// let prompt = require("prompt-sync")();

// let num = prompt("Enter a number: ");
// if (num % 2 == 0){
//     if (num > 50){
//         console.log("Even and Large");
//     }
//     else{
//         console.log("Even and Small");
//     }
// }
// else{
//     if (num < 30){
//         console.log("Odd and Small");
//     }
//     else{
//         console.log("Odd and Large");
//     }
// }   







// Question 1: Write a program to print the first 10 multiples of 5 using a for loop.

 

// O/P-

// 5  
// 10  
// 15  
// 20  
// 25  
// 30  
// 35  
// 40  
// 45  
// 50  

 

// for (let i=5; i<=50; i+=5){
//     console.log(i);
// }




// Question 2: Sum of First N Natural Numbers
// Write a program that calculates the sum of the first N natural numbers using a for loop. The value of N should be provided by the user.

// Example Input:
// Enter a number: 6
// Example Output:
// The sum is: 21

// let prompt = require("prompt-sync")();

// let num = prompt("Enter a number: ");
// let sum = 0;
// for (let i=1; i<=num; i++){
//     sum += i;
// }
// console.log("The sum is: " + sum);







// Question 3: Create a Number Pyramid (Nested for loop)
// Write a program to create the following pyramid pattern using a nested for loop, where the number of rows is input by the user:

// Example Input:
// Enter number of rows: 4

// Example Output:

// 1  
// 1 2  
// 1 2 3  
// 1 2 3 4  



// let prompt = require("prompt-sync")();

// let num = prompt("Enter number of rows: ");
// for (let i=1; i<=num; i++){
//     let str = "";
//     for (let j=1; j<=i; j++){
//         str += j + " ";
//     }
//     console.log(str);
// }
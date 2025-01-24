// -------While Loop Questions -------
// 1. Print numbers from 1 to 10
// Write a while loop to print all numbers from 1 to 10.

// let i = 0
// while (i <= 10) {
//     console.log(i);
//     i++
// }





// 2. Sum of even numbers up to 20
// Write a while loop to calculate the sum of all even numbers between 1 and 20.

// let i = 0;
// let sum = 0;
// while (i <= 20) {
//     if (i % 2 == 0)
//         sum += i;
//     i++;
// }
//    console.log(sum)




// 3. Reverse a number
// Write a while loop to reverse a given number.
// Example: Input: 12345 → Output: 54321


// let i = 5;
// while (i >= 1) {
//     console.log(i);
//     i--;
// }



// 4. Check if a number is a palindrome
// Write a while loop to check if a number is a palindrome. with out math library.
// Example: Input: 121 → Output: Palindrome

// let num = 121;
// let rev = 0;
// let temp = num;
// while (num > 0) {
//     let rem = num % 10;
//     rev = rev * 10 + rem;
//     num = Math.floor(num / 10);
// }
// if (temp === rev) {
//     console.log("Palindrome");
// }
// else {
//     console.log("Not a Palindrome");
// }
    
    


// 5. Factorial using while loop
// Write a while loop to find the factorial of a number.
// Example: Input: 5 → Output: 120 (because 5! = 5 * 4 * 3 * 2 * 1)


// let num = 5  

// let factorial = 1;
// let i = 1;
// while (i <= num) {
//     factorial *= i;
//     i++;
// }
// console.log(factorial);










// 1. Basic Calculator
// Create a program that takes two numbers and an operator (+, -, *, /) as input and performs the appropriate operation using a switch case.
// Example: Input: 5, 3, "+" → Output: 8


// let num1 = 5;
// let num2 = 3;
// let operator = "+";

// switch (operator) {
//     case "+":
//         console.log(num1 + num2);
//         break;
//     case "-":
//         console.log(num1 - num2);
//         break;
//     case "*":
//         console.log(num1 * num2);
//         break;
//     case "/":
//         console.log(num1 / num2);
//         break;
//     default:
//         console.log("Invalid operator");
//         break;
// }





// 2. Day of the week
// Write a program to display the day of the week based on a number input using a switch case.
// Example: Input: 1 → Output: Monday
// (1 → Monday, 2 → Tuesday, ..., 7 → Sunday)


// let day = 7;

// switch (day) {
//     case 1:
//         console.log("Monday");
//         break;
//     case 2:
//         console.log("Tuesday");
//         break;
//     case 3:
//         console.log("Wednesday");
//         break;
//     case 4:
//         console.log("Thursday");
//         break;
//     case 5:
//         console.log("Friday");
//         break;
//     case 6:
//         console.log("Saturday");
//         break;
//     case 7:
//         console.log("Sunday");
//         break;
//     default:
//         console.log("Invalid day");
//         break;
// }




// 3. Check vowel or consonant
// Write a program to check whether a given character is a vowel (a, e, i, o, u) or a consonant using a switch case.
// Example: Input: e → Output: Vowel


// let character = "e";
// switch (character) {
//     case "a":
//     case "e":
//     case "i":
//     case "o":
//     case "u":
//         console.log("Vowel");
//         break;
//     default:
//         console.log("Consonant");
//         break;
// }




// 4. Grade system
// Write a program that takes a grade (A, B, C, D, F) as input and displays a message about the grade using a switch case.
// Example: Input: A → Output: Excellent


// let grade = "A";
// switch (grade) {
//     case "A":
//         console.log("Excellent");
//         break;
//     case "B":
//         console.log("Good");
//         break;
//     case "C":
//         console.log("Average");
//         break;
//     case "D":    
//         console.log("Below Average");
//         break;
//     case "F":
//         console.log("Fail");
//         break;
//     default:
//         console.log("Invalid grade");
//         break;
// }




// 5. Menu-driven program
// Write a switch case program to create a simple menu:

// Add two numbers
// Subtract two numbers
// Multiply two numbers
// Exit
// Example Menu:

// 1. Add two numbers
// 2. Subtract two numbers
// 3. Multiply two numbers
// 4. Exit


// let choice = 3;
// let num1 = 5;
// let num2 = 3;

// switch (choice) {
//     case 1:
//         console.log(num1 + num2);
//         break;
//     case 2:
//         console.log(num1 - num2);
//         break;
//     case 3:
//         console.log(num1 * num2);
//         break;
//     case 4:
//         console.log("Exit");
//         break;
//     default:
//         console.log("Invalid choice");
//         break;
// }

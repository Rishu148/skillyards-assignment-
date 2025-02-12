
// 1. Right-Angled Triangle
// Print a right-angled triangle of *.

// Example Output:

// *
// **
// ***
// ****
// *****


prompt = require("prompt-sync")();

let a = prompt("Enter the value of a: ");

for (let i=1; i<=a; i++){
    let str = "";
    for (let j=1;j<=i;j++){
        str +="*";
    }
    console.log(str);
}






// 2. Inverted Right-Angled Triangle
// Print an inverted right-angled triangle of *.

// Example Output:

// *****
// ****
// ***
// **
// *


// prompt = require("prompt-sync")();

// let a = prompt("Enter the value of a: ");

// for (let i=1; i<=a; i++){
//     let str = "";
//     for (let j=a;j>=i;j--){
//         str +="*";
//     }
//     console.log(str);
// }





// 3. Pyramid Pattern
// Print a pyramid pattern with *.

// Example Output:

//     *
//    ***
//   *****
//  *******
// *********


// prompt = require("prompt-sync")();       
// let a = prompt("Enter the value of a: ");

// for (let i=1; i<=a; i++){
//     let str = "";
//     for (let j=a;j>=i;j--){
//         str +=" ";
//     }    
//     for (let k=1; k<=2*i-1; k++){
//         str +="*";
//     }
//     console.log(str);
// }






// 4. Number Triangle
// Print a triangle of numbers.

// Example Output:

// 1
// 12
// 123
// 1234
// 12345


// prompt = require("prompt-sync")();

// let a = prompt("Enter the value of a: ");

// for (let i=1; i<=a; i++){
//     let str = "";
//     for (let j=1;j<=i;j++){
//         str += j +" ";
//     }
//     console.log(str);
// }





// 5. Reverse Number Triangle
// Print a reverse triangle of numbers.

// Example Output:

// 54321
// 5432
// 543
// 54
// 5


// prompt = require("prompt-sync")();

// let a = prompt("Enter the value of a: ");

// for (let i=1; i<=a; i++){
//     let str = "";
//     for (let j=a;j>=i;j--){
//         str += j +" ";
//     }
//     console.log(str);
// }






// 6. Diamond Pattern
// Print a diamond pattern with *.

// Example Output:

//     *
//    ***
//   *****
//  *******
// *********
//  *******
//   *****
//    ***
//     *


// let prompt = require("prompt-sync")();

// let a = prompt("Enter the value of a: ");

// for (let i=1; i<=a; i++){
//     let str = "";
//     for (let j=a;j>=i;j--){        
//         str +=" ";
//     }    
//     for (let k=1; k<=2*i-1; k++){
//         str +="*";
//     }
//     console.log(str);
// }

// for (let i=a-1; i>=1; i--){
//     let str = "";
//     for (let j=a;j>=i;j--){        
//         str +=" ";
//     }    
//     for (let k=1; k<=2*i-1; k++){
//         str +="*";
//     }
//     console.log(str);
// }
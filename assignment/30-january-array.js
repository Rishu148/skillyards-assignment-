// 1)Reverse the array.

// let arr = [1, 2, 3, 4, 5];
// let arr1 = [];
// for (let i = arr.length - 1; i >= 0; i--) {
//     arr1.push(arr[i]);
// }
// console.log(arr1);



// 2)Maximum and Minimum in an array.

// let arr = [1, 2, 3, 4, 5];
// let max = arr[0];
// let min = arr[0];
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > max) {
//         max = arr[i];
//     }
//     if (arr[i] < min) {
//         min = arr[i];
//     }
//     }
//     console.log( "Maximum number in the array is " + max);
//     console.log( "Minimum number in the array is " + min);




// 3)find Kth Max and Min in an array.

// let arr = [1, 2, 3, 4, 5,6,7,8,9,10,12,11,13,15,14];
// let k = 2;
// let max = arr[0];
// let min = arr[0];

// arr.sort(function(a, b){return a - b});

// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > max) {
//         max = arr[i];
//     }
//     if (arr[i] < min) { 
//         min = arr[i];
//     }
//     }
//     console.log( "Maximum number in the array is " + max);    
//     console.log( "Minimum number in the array is " + min);
//     console.log( "Kth Maximum number in the array is " + arr[arr.length - k]);




// 4)Move all negative elements to one side of the array. move negative values left side

// let arr = [1, -2, 3, -4, 5, -6, 7, -8, 9];

// let left = 0;

// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] < 0) {
//         [arr[left], arr[i]] = [arr[i], arr[left]];
//         left++;
//     } 
// }

// console.log(arr);



// 5)Count Inversion.

//  let arr = [1, 3, 5, 2, 4];
//  let inversion = 0;
//  for (let i = 0; i < arr.length; i++) {
//      for (let j = i + 1; j < arr.length; j++) {
//              if (arr[i] > arr[j]) {
//                  inversion++;
//              }
//          }
//      }
//      console.log(inversion);
 

 
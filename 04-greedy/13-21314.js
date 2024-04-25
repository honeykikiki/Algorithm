const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

let input = fs.readFileSync(filePath).toString().trim().split("\n");

let arr1 = input[0].split("K");
let arr2 = input[0].split("M");
console.log(arr1);
console.log(arr2);

console.log();

let max = [];
let min = [];

// for (let i = 0; i < array.length; i++) {
//   const element = array[i]; cvcv
// }

// let start = 0;
// if (arr.includes("K")) {
//   for (let i = 0; i < arr.length; i++) {
//     const item = arr[i];
//     if (item == "K") {
//       for (let j = start; j <= i; j++) {
//         if (j == start) {
//           max[j] = 5;
//         } else {
//           max[j] = 0;
//         }

//         if (j == i) {
//           min[j] = 5;
//         } else if (j == start) {
//         } else {
//           min[j] = 0;
//         }
//       }
//       start = i + 1;
//     } else {
//       min.push(1);
//       max.push(1);
//     }
//   }
// } else {
//   max = Array(arr.length).fill(1);
//   min = Array(arr.length).fill(0);
//   min[0] = 1;
// }

// console.log(max.join(""));
// console.log(min.join(""));

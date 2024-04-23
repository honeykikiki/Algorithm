const fs = require("fs");

const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

let n = Number(input[0]);
// let arr = input[1].split(" ").map((item, idx) => [Number(item), idx]);
let arr = input[1].split(" ").map(Number);

let stack = [];
let result = [];

for (let i = 0; i < n; i++) {
  while (stack.length > 0 && arr[stack[stack.length - 1]] <= arr[i]) {
    stack.pop();
  }

  if (stack.length === 0) {
    result.push(0);
  } else {
    result.push(stack[stack.length - 1] + 1);
  }

  stack.push(i);
  console.log(stack, result);
}

console.log(...result);

// let stack = [];
// let result = Array(n - 1).fill(0);

// for (let i = n - 1; i >= 0; i--) {
//   if (arr[i] < arr[i - 1]) {
//     // 앞에 값이 나보다 큰 탑인경우
//     let cnt = i + 1;
//     for (const x in stack) {
//       if (x < arr[i - 1]) {
//         result[cnt] = i;
//         cnt++;
//       }
//     }

//     result[i] = i;
//   } else {
//     stack.push(i);
//   }
// }

// console.log(stack);
// console.log(...result);

const fs = require("fs");

const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

let testCase = Number(input[0]);

let dp = [];
dp[0] = 0;
dp[1] = 1;
dp[2] = 2;
dp[3] = 4;

for (let i = 4; i <= 10; i++) {
  dp[i] = dp[i - 3] + dp[i - 2] + dp[i - 1];
}

let line = 1;
while (testCase--) {
  let n = +input[line];

  console.log(dp[n]);
  line++;
}

// let arr = [];
// let d = [];

// for (let i = 0; i < n; i++) {
//   arr.push(input[i + 1].split(" ").map(Number));
//   d.push(Array(3).fill(1000000));
// }

// d[0][0] = arr[0][0];
// d[0][1] = arr[0][1];
// d[0][2] = arr[0][2];

// for (let i = 1; i < n; i++) {
//   for (let j = 0; j < 3; j++) {
//     for (let k = 0; k < 3; k++) {
//       if (k != j) {
//         d[i][j] = Math.min(d[i][j], arr[i][j] + d[i - 1][k]);
//       }
//     }
//   }
// }

// console.log(Math.min(d[n - 1][0], d[n - 1][1], d[n - 1][2]));

// 3
// 26 40 83
// 49 60 57
// 13 89 99

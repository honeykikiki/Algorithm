const fs = require("fs");

const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

let n = Number(input[0]);
let m = Number(input[1]);

let dp = [];
dp[0] = 1;
dp[1] = 1;

for (let i = 2; i < 50; i++) {
  dp[i] = dp[i - 1] + dp[i - 2];
}

let arr = [];
for (let i = 1; i <= m; i++) arr.push(Number(input[i + 1]));
let range = [];
let start = 1;
// console.log(arr);
for (let i = 0; i < m; i++) {
  let end = arr[i];
  range.push(end - start);
  start = arr[i] + 1;
}
range.push(n + 1 - start);

let result = 1;
for (const x of range) {
  result *= dp[x];
}

console.log(result);

const fs = require("fs");

const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

let n = Number(input[0]);
let dp = [];
for (let i = 1; i <= n; i++) dp.push(Number(input[i]));

for (let i = 1; i < n; i++) {
  dp[i] = Math.max(dp[i], dp[i] * dp[i - 1]);
}
console.log(dp);
console.log(Math.max(...dp).toFixed(3));

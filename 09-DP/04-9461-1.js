const fs = require("fs");

const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

let n = Number(input[0]);

let dp = [];
dp[0] = 1;
dp[1] = 1;
dp[2] = 1;

for (let i = 3; i <= 100; i++) {
  dp[i] = dp[i - 2] + dp[i - 3];
}

for (let i = 1; i <= n; i++) {
  let index = Number(input[i]);
  console.log(dp[index - 1]);
}

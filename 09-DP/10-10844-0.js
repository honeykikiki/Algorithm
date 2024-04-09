const fs = require("fs");

const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

let n = Number(input[0]);

let dp = Array.from(Array(n + 1), () => Array(10).fill(0));

dp[1][0] = 0;
for (let i = 1; i <= 9; i++) dp[1][i] = 1;

for (let i = 2; i <= n; i++) {
  for (let j = 0; j <= 9; j++) {
    dp[i][j] = 0;
    // 0인 경우
    if (j > 0) dp[i][j] += dp[i - 1][j - 1];
    if (j < 9) dp[i][j] += dp[i - 1][j + 1];
    // 9인 경우

    dp[i][j] %= 1e9;
  }
}

// console.log(dp.join("\n"));

let result = 0;
for (const x of dp[n]) {
  result += x;
  result %= 1e9;
}

console.log(result);

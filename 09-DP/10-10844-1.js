const fs = require("fs");

const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

let n = Number(input[0]);

let dp = [];
for (let i = 0; i <= n; i++) dp.push(Array(10).fill(0));

dp[1][0] = 0;
for (let i = 1; i <= 9; i++) {
  dp[1][i] = 1;
}

for (let i = 2; i <= n; i++) {
  for (let j = 0; j <= 9; j++) {
    dp[i][j] = 0;
    // 0 ~ 9 사이인 경우
    // 나보다 낮은 값의 좌우를 확인하여 더하기
    if (j > 0) dp[i][j] += dp[i - 1][j - 1];
    if (j < 9) dp[i][j] += dp[i - 1][j + 1];
    dp[i][j] %= 1e9;
  }
}

let result = 0;
for (const x of dp[n]) {
  result += x;
  result %= 1e9;
}
console.log(result);

const fs = require("fs");

const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

let n = Number(input[0]);
let dp = [];
for (let i = 1; i <= n; i++) {
  dp.push(input[i].split(" ").map(Number));
}

for (let i = 1; i < n; i++) {
  for (let j = 0; j <= i; j++) {
    let value = 0;

    // 맨 왼쪽은 위에 값 그대로 가져와서 더하기
    if (j == 0) value = dp[i - 1][j] + dp[i][j];
    // 맨 오른쪽 값은 위에 왼쪽 값 + 나 자신
    else if (j == i) value = dp[i - 1][j - 1] + dp[i][j];
    // 나머지는 왼쪽 오른쪽 더하고 최대 값 확인
    else value = Math.max(dp[i - 1][j - 1] + dp[i][j], dp[i - 1][j] + dp[i][j]);
    dp[i][j] = value;
  }
}

console.log(Math.max(...dp[n - 1]));

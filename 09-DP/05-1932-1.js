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
    let upLeft = 0;
    let up = 0;
    // 왼쪽 위에서 내려온값
    if (j != 0) upLeft = dp[i - 1][j - 1];

    // 바로 위에값
    if (j != i) up = dp[i - 1][j];

    dp[i][j] = dp[i][j] + Math.max(upLeft, up);
  }
}

console.log(Math.max(...dp[n - 1]));

// 5
// 7
// 3 8
// 8 1 0
// 2 7 4 4
// 4 5 2 6 5

const fs = require("fs");

const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

let n = Number(input[0]);
let arr = [];
for (let i = 1; i <= n; i++) {
  arr.push(input[i].split(" ").map(Number));
}

let d = [];
for (let i = 0; i <= n; i++) d[i] = [];

d[0][0] = arr[0][0];
d[1][0] = arr[1][0] + d[0][0];
d[1][1] = arr[1][1] + d[0][0];
for (let i = 1; i < n; i++) {
  for (let j = 0; j <= i; j++) {
    if (j == 0) {
      d[i][j] = d[i - 1][j] + arr[i][j];
    } else if (j == arr[i].length - 1) {
      d[i][j] = d[i - 1][j - 1] + arr[i][j];
    } else {
      d[i][j] = Math.max(d[i - 1][j - 1], d[i - 1][j]) + arr[i][j];
    }
  }
}

console.log(Math.max(...d[n - 1]));

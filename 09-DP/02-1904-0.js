const fs = require("fs");

const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

let n = Number(input[0]);

let d = [];
d[0] = 1;
d[1] = 2;

for (let i = 2; i <= n; i++) {
  d[i] = (d[i - 1] + d[i - 2]) % 15746;
}

console.log(d[n - 1]);

// 4

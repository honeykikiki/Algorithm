const fs = require("fs");

const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

let n = Number(input[0]);
let d = [];
for (let i = 1; i <= n; i++) {
  d.push(Number(input[i]));
}

for (let i = 1; i < n; i++) {
  d[i] = Math.max(d[i], d[i] * d[i - 1]);
}

// console.log(d);
console.log(Math.max(...d).toFixed(3));

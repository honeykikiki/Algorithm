const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

let input = fs.readFileSync(filePath).toString().trim().split("\n");

let n = Number(input[0]);
let arr = [];
for (let i = 1; i <= n; i++) arr.push(Number(input[i]));
arr.sort((a, b) => b - a);

let result = 0;
for (let i = 0; i < n; i++) {
  if ((i + 1) % 3 === 0) continue;
  result += arr[i];
}

console.log(result);

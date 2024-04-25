const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

let input = fs.readFileSync(filePath).toString().trim().split("\n");

let n = Number(input[0]);
let arr = [];
for (let i = 1; i <= n; i++) arr.push(Number(input[i]));

let max = 0;
arr.sort((a, b) => b - a); // 오름차순으로 정렬
for (let i = 0; i < n; i++) {
  max = Math.max(max, arr[i] * (i + 1));
}

console.log(max);

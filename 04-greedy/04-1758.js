const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

let input = fs.readFileSync(filePath).toString().trim().split("\n");

let n = Number(input[0]);
let arr = [];
for (let i = 1; i <= n; i++) arr.push(Number(input[i]));

let result = 0;
arr.sort((a, b) => b - a);
for (let i = 0; i < n; i++) {
  let 주려는돈 = arr[i];
  result += 주려는돈 - i > 0 ? 주려는돈 - i : 0;
}

console.log(result);

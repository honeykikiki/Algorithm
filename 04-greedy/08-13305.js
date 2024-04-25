const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

let input = fs.readFileSync(filePath).toString().trim().split("\n");

let n = Number(input[0]);
let 도로 = input[1].split(" ").map(Number);
let 기름가격 = input[2].split(" ").map(Number);
let min = 10e9;

let result = 0;
for (let i = 0; i < n - 1; i++) {
  min = Math.min(min, 기름가격[i]);
  result += min * 도로[i];
}

console.log(String(result));

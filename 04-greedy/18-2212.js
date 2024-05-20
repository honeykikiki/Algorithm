const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

let input = fs.readFileSync(filePath).toString().trim().split("\n");

let n = Number(input[0]);
let k = Number(input[1]);
let arr = input[2]
  .split(" ")
  .map(Number)
  .sort((a, b) => a - b);
let distance = [];
for (let i = 0; i < n - 1; i++) {
  distance.push(Math.abs(arr[i + 1] - arr[i]));
}

distance.sort((a, b) => b - a);
let answer = 0;
for (let i = k - 1; i < n - 1; i++) {
  answer += distance[i];
}

console.log(answer);

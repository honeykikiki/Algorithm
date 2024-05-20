const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

let input = fs.readFileSync(filePath).toString().trim().split("\n");

let [n, k] = input[0].split(" ").map(Number);
let arr = input[1].split(" ").map(Number);
let distance = [];
for (let i = 0; i < n - 1; i++) {
  distance.push(arr[i + 1] - arr[i]);
}

distance.sort((a, b) => a - b);

let answer = 0;

for (let i = 0; i < distance.length - (k - 1); i++) {
  answer += distance[i];
}

console.log(answer);

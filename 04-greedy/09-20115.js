const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

let input = fs.readFileSync(filePath).toString().trim().split("\n");

let n = Number(input[0]);

let arr = input[1].split(" ").map(Number);

arr.sort((a, b) => b - a);
let result = arr[0];

for (let i = 1; i < n; i++) {
  if (result > arr[i]) {
    result = result + arr[i] / 2;
  } else {
    result = result / 2 + arr[i];
  }
}

console.log(result);

const fs = require("fs");

const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

let n = Number(input[0]);
let arr = input[1].split(" ").map(Number);

console.log(arr);

let result = [];

result.push(arr[0]);
let idx = arr[0];
while (result != arr) {
  let item = arr[idx];
  // result.push()
}

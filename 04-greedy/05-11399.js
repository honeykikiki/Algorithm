const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

let input = fs.readFileSync(filePath).toString().trim().split("\n");

let n = Number(input[0]);
let arr = input[1].split(" ").map(Number);

arr.sort((a, b) => a - b);
let d = [];
d.push(arr[0]);
arr.reduce((a, b) => {
  d.push(a + b);
  return a + b;
});

console.log(d.reduce((a, b) => a + b));

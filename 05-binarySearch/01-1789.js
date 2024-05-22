const { log } = require("console");
const fs = require("fs");

const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

let n = Number(input[0]);

let sum = 0;
let answer = 0;
for (let i = 0; sum <= n; i++) {
  sum += i;

  answer = i;
}

console.log(answer - 1);

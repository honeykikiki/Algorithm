const { log } = require("console");
const fs = require("fs");

const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

let n = Number(input[0]);
let arr = input[1].split(" ").map(Number);
let m = Number(input[2]);

let start = 0;
let end = Math.max(...arr);

let answer = 0;

while (start <= end) {
  let mid = parseInt((start + end) / 2);

  let total = 0;
  for (const x of arr) {
    total += Math.min(x, mid);
  }

  if (total <= m) {
    answer = mid;
    start = mid + 1;
  } else {
    end = mid - 1;
  }
}

console.log(answer);

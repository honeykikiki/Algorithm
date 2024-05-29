const fs = require("fs");

const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

let [n] = input[0].split(" ").map(Number);
let arr = input[1]
  .split(" ")
  .map(Number)
  .sort((a, b) => a - b);

let start = 0;
let end = n - 1;
let sum = 0;
let ans = Infinity;
let ansPair = new Array(2).fill(0);

while (start < end) {
  sum = arr[start] + arr[end];
  if (Math.abs(sum) < ans) {
    ans = Math.abs(sum);
    ansPair[0] = arr[start];
    ansPair[1] = arr[end];
  }

  if (sum === 0) {
    break;
  } else if (sum > 0) {
    end--;
  } else if (sum < 0) {
    start++;
  }
}

console.log(ansPair.join(" "));

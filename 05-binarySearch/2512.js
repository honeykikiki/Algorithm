const { resolveObjectURL } = require("buffer");
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

solution(input);

function solution(input) {
  let [n, arr, m] = input;
  n = +n;
  arr = arr.split(" ").map(Number);
  m = +m;

  let start = 0;
  let end = arr.reduce((a, b) => Math.max(a, b));

  let result = 0;

  while (start <= end) {
    let mid = parseInt((start + end) / 2);
    let total = 0;
    for (const x of arr) {
      total += Math.min(mid, x);
    }

    if (total <= m) {
      result = mid;
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }

  console.log(result);
}

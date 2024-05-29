const fs = require("fs");

const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

let [n, m, l] = input[0].split(" ").map(Number);
let arr = [];

if (n > 0) {
  arr.push(...input[1].split(" ").map(Number));
}

arr.push(0);
arr.push(l);
arr.sort((a, b) => a - b);

let start = 1;
let end = l;
let rst;

while (start <= end) {
  const mid = parseInt((start + end) / 2);
  let cnt = 0;

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] - arr[i - 1] > mid) {
      cnt += parseInt((arr[i] - arr[i - 1] - 1) / mid);
    }
  }

  if (cnt > m) {
    start = mid + 1;
  } else {
    end = mid - 1;
    rst = mid;
  }
}

console.log(rst);

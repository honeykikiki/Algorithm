const fs = require("fs");

const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

let [n, target] = input[0].split(" ").map(Number);
let arr = [];

for (let i = 1; i <= n; i++) {
  arr.push(+input[i]);
}

arr.sort((a, b) => a - b);

let start = 1;
let end = arr[arr.length - 1];

while (start <= end) {
  let mid = parseInt((start + end) / 2);

  let cnt = 1;
  let prev = arr[0];

  for (const cur of arr) {
    if (cur - prev < mid) continue;
    prev = cur;
    cnt++;
  }

  if (cnt < target) {
    end = mid - 1;
  } else {
    start = mid + 1;
  }
}

console.log(end);

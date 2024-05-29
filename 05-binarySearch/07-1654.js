const fs = require("fs");

const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

let [n, target] = input[0].split(" ").map(Number);
let arr = [];

for (let i = 1; i <= n; i++) {
  arr.push(Number(input[i]));
}

let start = 0;
let end = Math.max(...arr);
let result = 0;

while (start <= end) {
  let mid = parseInt((start + end) / 2);

  let total = 0;
  for (const item of arr) {
    // 자른 전선 숫자 구하기
    total += parseInt(item / mid);
  }

  if (total < target) {
    // 왼쪽으로
    end = mid - 1;
  } else {
    // 오른쪽으로
    start = mid + 1;
    result = mid;
  }
}

console.log(result);

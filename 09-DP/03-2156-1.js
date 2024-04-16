const fs = require("fs");

const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

let n = Number(input[0]);
let arr = [];
for (let i = 1; i <= n; i++) {
  arr.push(Number(input[i]));
}

// 6, 10, 13, 9, 8, 1
let d = [];
d[0] = arr[0];
d[1] = arr[0] + arr[1];
d[2] = Math.max(arr[0] + arr[1], arr[0] + arr[2], arr[1] + arr[2]);

for (let i = 3; i < n; i++) {
  // 이전 값을 넣어준다
  d[i] = d[i - 1];
  // 현재 위치에 포도주를 마시는 경우, 내 앞을 제외한 이전 포도주값
  d[i] = Math.max(d[i], d[i - 2] + arr[i]);
  // 현제 위치에 포도주와 이전 포도주를 마시는 경우
  d[i] = Math.max(d[i], arr[i] + arr[i - 1] + d[i - 3]);
}

console.log(d[n - 1]);

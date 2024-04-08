const fs = require("fs");

const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

let n = Number(input[0]);
let m = Number(input[1]);
let d = Array(50).fill(0);
d[0] = 1;
d[1] = 1;
d[2] = 2;

function dp(x) {
  if (d[x] != 0) {
    return d[x];
  }

  d[x] = dp(x - 1) + dp(x - 2);
  return d[x];
}

let arr = [];
let start = 0;
let end = 0;
for (let i = 2; i < m + 2; i++) {
  end = Number(input[i]);
  arr.push(end - 1 - start);
  start = end;
}
arr.push(n - start);
// console.log(arr);

let res = 1;
for (const x of arr) res *= dp(x);
console.log(res);

// 9
// 3
// 2
// 4
// 7

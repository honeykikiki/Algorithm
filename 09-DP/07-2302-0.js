const fs = require("fs");

const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

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

let [n, ...arr] = input;
n = Number(n);
let vip = []; // vip 목록
arr = arr.map(Number);
let cnt = 0;
for (let i = 1; i <= 9; i++) {
  cnt++;

  if (arr.includes(i)) {
    vip.push(cnt);
    cnt = 0;
    continue;
  }
}

let result = 1;
for (const x of vip) {
  result *= dp(x);
}

// console.log(vip);
console.log(result);

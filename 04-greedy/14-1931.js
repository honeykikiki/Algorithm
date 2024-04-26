const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

let input = fs.readFileSync(filePath).toString().trim().split("\n");

let n = Number(input[0]);
let arr = [];

for (let i = 1; i <= n; i++) {
  arr.push(input[i].split(" ").map(Number));
}

arr.sort((a, b) => {
  if (a[1] !== b[1]) return a[1] - b[1];
  else return a[0] - b[0];
});

let cnt = 0;
let current = 0;
for (let i = 0; i < n; i++) {
  const [start, end] = arr[i];
  if (current <= start) {
    current = end;
    cnt++;
  }
}

console.log(cnt);

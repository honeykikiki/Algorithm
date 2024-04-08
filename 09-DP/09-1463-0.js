const fs = require("fs");

const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

let n = Number(input[0]);
let d = Array(n + 1).fill(0);

for (let x = 2; x <= n; x++) {
  d[x] = d[x - 1];
  if (x % 2 == 0) {
    d[x] = Math.min(d[x], d[parseInt(x / 2)]);
  }
  if (x % 3 == 0) {
    d[x] = Math.min(d[x], d[parseInt(x / 3)]);
  }

  d[x]++;
}

console.log(d);
console.log(d[n]);

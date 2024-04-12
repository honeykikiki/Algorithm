const fs = require("fs");

const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

let t = Number(input[0]);
let d = [];
d[0] = 0;
d[1] = 1;
d[2] = 1;
for (let i = 2; i <= 40; i++) {
  d[i] = d[i - 1] + d[i - 2];
}

for (let i = 1; i <= t; i++) {
  const n = Number(input[i]);

  if (n == 0) console.log(1, 0);
  else if (n == 1) console.log(0, 1);
  else console.log(d[n - 1], d[n]);
}

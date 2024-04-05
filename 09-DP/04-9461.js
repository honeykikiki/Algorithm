const fs = require("fs");

const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

let testCase = Number(input[0]);
let line = 1;

let d = [];
d[0] = 1;
d[1] = 1;
d[2] = 1;

for (let i = 3; i < 100; i++) {
  d[i] = d[i - 2] + d[i - 3];
}

while (testCase--) {
  console.log(d[Number(input[line]) - 1]);
  line++;
}

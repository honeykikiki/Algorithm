const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

let ts = Number(input[0]);
let dp = [];

for (let n = 1; n <= 44; n++) {
  dp.push((n * (n + 1)) / 2);
}
let result = 0;
let line = 1;
while (ts) {
  let k = +input[line];
  result = 0;

  for (let one = 0; one < dp.length; one++) {
    for (let two = 0; two < dp.length; two++) {
      for (let three = 0; three < dp.length; three++) {
        if (dp[one] + dp[two] + dp[three] === k) {
          result = 1;
          break;
        }
      }
    }
  }

  console.log(result);
  ts--;
  line++;
}

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

let input = fs.readFileSync(filePath).toString().trim().split("\n");

let n = Number(input[0]);
let cnt = 0;
while (n > 0) {
  if (n % 5 == 0) {
    n -= 5;
  } else if (n % 2 == 0) {
    n -= 2;
  } else {
    n -= 2;
  }

  cnt++;
}

if (n == 0) console.log(cnt);
else console.log(-1);

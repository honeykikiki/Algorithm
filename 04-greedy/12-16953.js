const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

let input = fs.readFileSync(filePath).toString().trim().split("\n");

let [a, b] = input[0].split(" ").map(Number);

let cnt = 1;
while (a <= b) {
  if (a == b) {
    break;
  }

  if (b % 2 == 0) b = parseInt(b / 2);
  else if (b % 10 === 1) b = parseInt(b / 10);
  else break;

  cnt++;
}

if (a == b) console.log(cnt);
else console.log(-1);

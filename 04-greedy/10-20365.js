const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

let input = fs.readFileSync(filePath).toString().trim().split("\n");

let n = Number(input[0]);
let arr = input[1].split("");

let cnt = 0;
let flag = true;
if (arr[n - 1] === "B") {
  for (let i = 0; i < n; i++) {
    if (arr[i] === "R" && flag) {
      cnt++;
      flag = false;
    } else if (arr[i] === "B") {
      flag = true;
    }
  }
} else {
  for (let i = 0; i < n; i++) {
    if (arr[i] === "B" && flag) {
      cnt++;
      flag = false;
    } else if (arr[i] === "R") {
      flag = true;
    }
  }
}

console.log(cnt + 1);

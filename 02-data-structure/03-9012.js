const fs = require("fs");

const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

let n = Number(input[0]);
let arr = [];
for (let i = 1; i <= n; i++) {
  arr.push(input[i].split(""));
}

let result = "";
for (let i = 0; i < n; i++) {
  // let left = 0;
  // let right = 0;
  let cnt = 0;
  let isVPS = true;
  for (let j = 0; j < arr[i].length; j++) {
    const item = arr[i][j];
    if (item == "(" && cnt >= 0) {
      cnt++;
    } else if (item == ")" && cnt > 0) {
      cnt--;
    } else {
      isVPS = false;
    }
  }

  result += isVPS && cnt == 0 ? "YES" : "NO";
  result += "\n";
}

console.log(result);

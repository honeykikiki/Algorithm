const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

let input = fs.readFileSync(filePath).toString().trim().split("\n");

const n = Number(input[0]);
let arr = [];
for (let i = 1; i <= n; i++) {
  let [x, y] = input[i].split(" ").map(Number);
  arr.push([x, y]);
}

arr.sort((a, b) => a[0] - b[0]);

let peopleCount = arr.reduce((acc, cur) => acc + cur[1], 0);

let sum = 0;

let bFlag = false;
for (let i = 0; i < n; i++) {
  const [x, y] = arr[i];
  sum += y;
  if (peopleCount / 2 <= sum) {
    console.log(x);
    bFlag = true;
    break;
  }
}

if (!bFlag) console.log(arr[arr.length - 1][0]);

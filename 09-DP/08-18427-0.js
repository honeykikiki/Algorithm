const fs = require("fs");

const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

let [n, m, h] = input[0].split(" ").map(Number);
let arr = [];
for (let i = 1; i <= n; i++) {
  let items = input[i].split(" ").map(Number);
  arr.push(items);
}

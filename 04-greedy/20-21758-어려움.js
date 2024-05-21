const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

let input = fs.readFileSync(filePath).toString().trim().split("\n");

const n = +input.shift();
const arr = input.shift().split(" ").map(Number);
const sum = new Array(n + 1).fill(0);
let ans = 0;

arr.unshift(0);

for (let i = 1; i <= n; i++) {
  sum[i] = arr[i] + sum[i - 1];
}
console.log(arr);
console.log(sum);

for (let i = 2; i < n; i++) {
  ans = Math.max(ans, sum[n] - arr[n] - arr[i] + sum[i - 1]);
  console.log(sum[n], "-", arr[n], "-", arr[i], "+", sum[i - 1]);
}
console.log("--------------------------------");

for (let i = 2; i < n; i++) {
  ans = Math.max(ans, sum[n] - arr[1] - arr[i] + sum[n] - sum[i]);
  console.log(sum[n], "-", arr[1], "-", arr[i], "+", sum[n], "-", sum[i]);
}
console.log("--------------------------------");

for (let i = 2; i < n; i++) {
  ans = Math.max(ans, sum[i] - arr[1] + sum[n] - sum[i - 1] - arr[n]);
  console.log(sum[i], "-", arr[1], "+", sum[n], "-", sum[i - 1], "-", arr[n]);
}
console.log("--------------------------------");

console.log(ans);

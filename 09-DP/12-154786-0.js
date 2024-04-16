const fs = require("fs");

const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

let n = Number(input[0]);
let arr = [];
for (let i = 1; i <= n; i++) {
  const [t, p] = input[i].split(" ").map(Number);
  arr.push([t, p]);
}

let dp = Array(n + 1).fill(0);
let max = 0;

for (let i = 0; i < n; i++) {
  max = Math.max(max, dp[i]);

  const [day, price] = arr[i];
  if (i + day <= n) dp[i + day] = Math.max(dp[i + day], max + price);
}

// console.log(dp);
console.log(Math.max(...dp));

// let day = 0;
// let price = 0;
// let result = 0;

// for (let i = 0; i < n; i++) {
//   day = i;
//   price = 0;
//   while (day < n) {
//     // console.log(day);
//     let [t, p] = arr[day];
//     if (day + t > n) {
//       // 일정을 초과하는 경우 멈춤
//       break;
//     }

//     day += t;
//     price += p;
//     // console.log(day, price, i);
//     console.log(day, price);
//   }

//   result = Math.max(result, price);
//   console.log("----------------------", price);
// }

// console.log(result);

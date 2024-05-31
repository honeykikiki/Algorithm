const fs = require("fs");

const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

let n = Number(input[0]);
let arr = input[1].split(" ").map(Number);
arr.reverse();

let dp = Array(n).fill(1);

for (let i = 0; i < n; i++) {
  for (let j = 0; j < i; j++) {
    if (arr[i] > arr[j]) {
      dp[i] = Math.max(dp[i], dp[j] + 1);
      // console.log(arr[i], arr[j], dp);
    }
  }
  // console.log("-------------");
}

// console.log(n - Math.max(...dp));
console.log(n - lengthOfLIS(arr));

function lengthOfLIS(nums) {
  let sub = [];
  for (let x of nums) {
    if (sub.length === 0 || sub[sub.length - 1] < x) {
      sub.push(x);
    } else {
      let idx = sub.findIndex((el) => el >= x);
      // console.log(idx, x);
      sub[idx] = x;
    }
    // console.log(sub);
  }

  return sub.length;
}

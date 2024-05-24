const fs = require("fs");

const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

let [n, target] = input[0].split(" ").map(Number);
let arr = input[1].split(" ").map(Number);

let left = 0;
let right = Math.max(...arr);
let result = 0;

while (left <= right) {
  let mid = parseInt((left + right) / 2);

  let total = 0;
  for (const x of arr) if (x > mid) total += x - mid;

  // 지금 나무보다, 필요한 나무가 큰 경우
  if (total < target) {
    // 왼쪽으로
    right = mid - 1;
  } else {
    // 오른쪽으로
    result = mid;
    left = mid + 1;
  }
}

console.log(result);

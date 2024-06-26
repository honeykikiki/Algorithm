const fs = require("fs");

const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

let [n, target] = input[0].split(" ").map(Number);
let arr = input[1].split(" ").map(Number);

let start = 0;
let end = Math.max(...arr);
let result = 0;

while (start <= end) {
  let mid = parseInt((start + end) / 2);

  let total = 0;
  for (const x of arr) if (x > mid) total += x - mid;

  // 지금 나무보다, 필요한 나무가 큰 경우
  if (total < target) {
    // 왼쪽으로
    end = mid - 1;
  } else {
    // 오른쪽으로
    result = mid;
    start = mid + 1;
  }
}

console.log(result);

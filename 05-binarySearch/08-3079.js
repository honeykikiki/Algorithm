const fs = require("fs");

const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

let [n, target] = input[0].split(" ").map(Number);
let arr = [];
for (let i = 1; i <= n; i++) arr.push(+input[i]);

// 개선된 이진 탐색 범위 설정
let start = 1;
let end = 1000000000 * target;

while (start <= end) {
  let mid = Math.floor((start + end) / 2);

  let count = 0;
  for (const time of arr) {
    count += Math.floor(mid / time);
    // 최적화: 필요 이상의 계산을 피하기 위해
    if (count >= target) break;
  }

  if (count >= target) {
    // 타겟보다 많은 경우
    end = mid - 1;
  } else {
    // 타겟보다 적은 경우
    start = mid + 1;
  }
}

console.log(start);

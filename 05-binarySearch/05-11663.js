const fs = require("fs");

const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

let [n, m] = input[0].split(" ").map(Number);
let pointList = input[1]
  .split(" ")
  .map(Number)
  .sort((a, b) => a - b);

let result = "";
for (let i = 2; i < m + 2; i++) {
  let [left, right] = input[i].split(" ").map(Number);
  let value = countByRange(pointList, left, right);

  result += value + "\n";
}

console.log(result);

function countByRange(arr, leftValue, rightValue) {
  let left = lowerBound(arr, leftValue, 0, arr.length);
  let right = upperBound(arr, rightValue, 0, arr.length);

  return right - left;
}

// 나랑 같거나 나보다 큰 수 전까지 번호
function lowerBound(arr, target, start, end) {
  while (start < end) {
    let mid = parseInt((start + end) / 2);

    // 타겟 보다 찾은 값이 큰 경우
    if (arr[mid] >= target) end = mid;
    else start = mid + 1;
  }

  return end;
}

// 나랑 같거나 작은 수 번호 찾기
function upperBound(arr, target, start, end) {
  while (start < end) {
    let mid = parseInt((start + end) / 2);

    // 타겟 보다 찾은 값이 큰 경우
    if (arr[mid] > target) end = mid;
    else start = mid + 1;
  }

  return end;
}

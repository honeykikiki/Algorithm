const fs = require("fs");

const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

let n = Number(input[0]);
let list = input[1]
  .split(" ")
  .map(Number)
  .sort((a, b) => a - b);

let k = Number(input[2]);
let targetList = input[3].split(" ").map(Number);

let result = "";
for (let i = 0; i < k; i++) {
  result += binarySearch(list, targetList[i], targetList[i]) + " ";
}

console.log(result);

function binarySearch(arr, leftTarget, rightTarget) {
  const left = leftSearch(arr, leftTarget, 0, arr.length);
  const right = rightSearch(arr, rightTarget, 0, arr.length);

  return right - left;
}

function leftSearch(arr, target, start, end) {
  while (start < end) {
    let mid = parseInt((start + end) / 2);

    if (arr[mid] >= target) end = mid;
    else start = mid + 1;
  }

  return end;
}

function rightSearch(arr, target, start, end) {
  while (start < end) {
    let mid = parseInt((start + end) / 2);

    if (arr[mid] > target) end = mid;
    else start = mid + 1;
  }

  return end;
}

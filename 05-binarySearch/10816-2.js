const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

solution(input);

function solution(input) {
  let [n, haveList, m, findList] = input;
  haveList = haveList
    .split(' ')
    .map(Number)
    .sort((a, b) => a - b);
  findList = findList.split(' ').map(Number);

  let result = '';
  for (const item of findList) {
    result += countByRange(haveList, item, item) + ' ';
  }
  console.log(result);
}

function countByRange(arr, startValue, endValue) {
  let startIndex = lowerBound(arr, startValue, 0, arr.length);
  let endIndex = upperBound(arr, endValue, 0, arr.length);

  return endIndex - startIndex;
}

// 왼쪽으로 확인
function lowerBound(arr, target, start, end) {
  while (start < end) {
    let mid = parseInt((start + end) / 2);

    if (arr[mid] >= target) end = mid;
    else start = mid + 1;
  }

  return end;
}

// 오른쪽으로 확인
function upperBound(arr, target, start, end) {
  while (start < end) {
    let mid = parseInt((start + end) / 2);

    if (arr[mid] > target) end = mid;
    else start = mid + 1;
  }
  return end;
}

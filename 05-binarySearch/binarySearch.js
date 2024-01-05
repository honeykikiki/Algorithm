const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

solution(input);

function solution(input) {
  // let numbers = input[0].split(' ').map(Number);
  let numbers = [1, 3, 3, 3, 5, 7, 9, 11, 13, 15, 17, 19];
  let target = 3;

  let result = binarySearch(numbers, target, 0, numbers.length - 1);
  if (result < 0) console.log('찾고자 하는 값이 없습니다');
  else console.log(result);

  console.log(countByRange(numbers, 3, 11));
}

// 특정 값 찾기
function binarySearch(arr, target, start, end) {
  let mid = parseInt(start + end / 2);

  // start 가 end보다 큰 경우
  if (start > end) return -1;
  // 값을 찾은 경우
  if (arr[mid] === target) return mid;
  // 찾고자 하는 값이 mid보다 큰 경우
  if (arr[mid] < target) return binarySearch(arr, target, mid + 1, end);
  // 찾고자 하는 값이 mid보다 작은 경우
  else return binarySearch(arr, target, start, mid - 1);
}

// x ~ y 까지의 개수
function countByRange(arr, leftValue, rightValue) {
  let left = lowerBound(arr, leftValue, 0, arr.length - 1);
  let right = upperBound(arr, rightValue, 0, arr.length - 1);

  return right - left;
}

// 가장 왼쪽에 있는 값
function lowerBound(arr, target, start, end) {
  while (start < end) {
    console.log(start, end);
    let mid = parseInt((start + end) / 2);
    if (arr[mid] >= target) end = mid;
    else start = mid + 1;
  }

  return end;
}

// 가장 오른쪽에 있는 값
function upperBound(arr, target, start, end) {
  while (start < end) {
    let mid = parseInt((start + end) / 2);
    console.log(start, mid, end, arr[start], arr[mid], arr[end]);

    if (arr[mid] > target) end = mid;
    else start = mid + 1;
  }

  return end;
}

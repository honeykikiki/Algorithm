const { log } = require("console");
const fs = require("fs");

const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

let n = Number(input[0]);
let numberCard = input[1]
  .split(" ")
  .map(Number)
  .sort((a, b) => a - b);
let k = Number(input[2]);
let getCard = input[3].split(" ").map(Number);

let answer = [];
let cnt = 0;
while (answer.length != k) {
  let target = getCard[cnt];

  answer.push(binarySearch(numberCard, target, 0, numberCard.length - 1));
  cnt++;
}

console.log(answer.join(" "));

function binarySearch(arr, target, start, end) {
  let mid = parseInt((start + end) / 2);

  // 값이 없는 경우
  if (start > end) return 0;

  // 값을 찾은 경우
  if (target == arr[mid]) return 1;

  // 찾고자 하는 값이 mid보다 큰 경우 (오른쪽)
  if (arr[mid] < target) return binarySearch(arr, target, mid + 1, end);
  // 찾고자 하는 값이 mid보다 작은 경우 (왼쪽)
  else return binarySearch(arr, target, start, mid - 1);
}

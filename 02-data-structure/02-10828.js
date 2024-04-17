const fs = require("fs");

const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

let n = Number(input[0]);
let arr = [];
for (let i = 1; i <= n; i++) {
  arr.push(input[i].split(" "));
}

let stack = [];
let result = "";
for (let i = 0; i < n; i++) {
  const [met, value] = arr[i];
  if ("push" == met) {
    stack.push(value);
  }
  if ("pop" == met) {
    result += (stack.pop() ?? -1) + "\n";
  }
  if ("size" == met) {
    result += stack.length + "\n";
  }
  if ("empty" == met) {
    result += (stack.length > 0 ? 0 : 1) + "\n";
  }
  if ("top" == met) {
    result += (stack[stack.length - 1] ?? -1) + "\n";
  }
}

console.log(result);
// push; // 값 추가
// pop; // 값 제거
// size; // 스택에 들어있는 정수의 개수
// empty; // 값이 있으면 0, 비어있으면 1
// top; // 스택의 가장 위애 있는 정수

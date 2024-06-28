const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

let n = +input[0];
let list = input[1].split(" ").map(Number);
let operatorList = input[2].split(" ").map(Number);
let operator = [];
let temp = [];
let visited = Array(n).fill(false);

// 연산자 파싱
for (let i = 0; i < operatorList.length; i++) {
  for (let j = 0; j < operatorList[i]; j++) {
    if (i == 0) operator.push("+");
    if (i == 1) operator.push("-");
    if (i == 2) operator.push("*");
    if (i == 3) operator.push("/");
  }
}

let maxValue = -10e9;
let minValue = 10e9;
function dfs(depth) {
  if (depth == n - 1) {
    let value = list[0];
    for (let i = 1; i < n; i++) {
      let operator = temp[i - 1];

      if (operator == "+") {
        value = value + list[i];
      }
      if (operator == "-") {
        value = value - list[i];
      }
      if (operator == "*") {
        value = value * list[i];
      }
      if (operator == "/") {
        value = ~~(value / list[i]);
      }
    }

    maxValue = Math.max(value, maxValue);
    minValue = Math.min(value, minValue);
    return;
  }

  for (let i = 0; i < n - 1; i++) {
    if (visited[i]) continue;
    visited[i] = true;
    temp.push(operator[i]);
    dfs(depth + 1);
    visited[i] = false;
    temp.pop();
  }
}

dfs(0);

console.log(maxValue);
console.log(minValue);

// 2
// 5 6
// 0 0 1 0

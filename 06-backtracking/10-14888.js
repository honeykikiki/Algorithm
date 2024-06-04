const fs = require("fs");

const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

let n = Number(input[0]);
let arr = input[1].split(" ").map(Number);
let calculate = [];
input[2].split(" ").map((item, idx) => {
  for (let i = 0; i < +item; i++) {
    switch (idx) {
      case 0:
        calculate.push("+");
        break;
      case 1:
        calculate.push("-");
        break;
      case 2:
        calculate.push("*");
        break;
      case 3:
        calculate.push("/");
        break;

      default:
        break;
    }
  }
});

let visited = Array(n).fill(false);
let selected = [];
let minValue = 10e9;
let maxValue = -10e9;

function dfs(depth) {
  if (depth == n - 1) {
    // console.log(selected);
    let total = arr[0];
    for (let i = 1; i < n; i++) {
      let oper = selected[i - 1];
      let next = arr[i];

      switch (oper) {
        case "+":
          total += next;
          break;
        case "-":
          total -= next;
          break;
        case "*":
          total *= next;
          break;
        case "/":
          total = ~~(total / next);
          break;

        default:
          break;
      }
    }
    minValue = Math.min(minValue, total);
    maxValue = Math.max(maxValue, total);
    return;
  }

  for (let i = 0; i < n - 1; i++) {
    if (visited[i]) continue;
    visited[i] = true;
    selected.push(calculate[i]);
    dfs(depth + 1);
    visited[i] = false;
    selected.pop();
  }
}

dfs(0);

console.log(maxValue);
console.log(minValue);

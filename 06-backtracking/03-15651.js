const fs = require("fs");

const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

let [n, m] = input[0].split(" ").map(Number);
let arr = [];
for (let i = 0; i < m; i++) arr.push(i);
let selected = [];

let answer = "";
function dfs(arr, depth) {
  if (m === depth) {
    for (const i of selected) answer += i + " ";
    answer += "\n";
    return;
  }

  for (let i = 1; i <= n; i++) {
    selected.push(i);
    dfs(arr, depth + 1);
    selected.pop();
  }
}

dfs(arr, 0);
console.log(answer);

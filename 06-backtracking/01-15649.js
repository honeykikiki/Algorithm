const fs = require("fs");

const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

let [n, m] = input[0].split(" ").map(Number);
let arr = [];
for (let i = 1; i <= n; i++) arr.push(i);
let visited = Array(n).fill(false);
let selected = [];

let answer = "";
function dfs(arr, depth) {
  if (depth == m) {
    let result = "";
    for (const item of selected) result += item + " ";
    answer += result + "\n";
    return;
  }

  for (let i = 1; i <= n; i++) {
    if (visited[i]) continue;
    visited[i] = true;
    selected.push(i);
    dfs(arr, depth + 1);
    visited[i] = false;
    selected.pop();
  }
}

dfs(arr, 0);
console.log(answer);

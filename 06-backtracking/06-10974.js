const fs = require("fs");

const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

let n = Number(input[0]);

let answer = "";
let visited = Array(n).fill(false);
let selected = [];

function dfs(depth) {
  if (depth == n) {
    for (const i of selected) answer += i + " ";
    answer += "\n";

    return;
  }

  for (let i = 1; i <= n; i++) {
    if (visited[i]) continue;
    visited[i] = true;
    selected.push(i);
    dfs(depth + 1);
    visited[i] = false;
    selected.pop(i);
  }
}

dfs(0);
console.log(answer);

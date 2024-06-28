const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

let n = Number(input[0]);
let graph = input[1].split(" ").map(Number);
let visited = Array(n).fill(false);
let selected = [];
let max = 0;

function dfs(depth) {
  if (depth == n) {
    let sum = 0;
    // console.log(selected);
    for (let i = 1; i < n; i++) {
      sum += Math.abs(selected[i - 1] - selected[i]);
    }

    max = Math.max(max, sum);
    return;
  }

  for (let i = 0; i < n; i++) {
    if (visited[i]) continue;
    visited[i] = true;
    selected.push(graph[i]);
    dfs(depth + 1);
    visited[i] = false;
    selected.pop();
  }
}

dfs(0);
console.log(max);

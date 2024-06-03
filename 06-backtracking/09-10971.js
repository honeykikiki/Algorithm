const fs = require("fs");

const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

let n = Number(input[0]);
let arr = [];
for (let i = 1; i <= n; i++) {
  arr.push(input[i].split(" ").map(Number));
}

let visited = Array(n).fill(false);
let selected = [];
let minValue = 10e9;

function dfs(depth) {
  if (depth == n - 1) {
    let total = 0;
    let cur = 0;
    // console.log(selected);
    for (let i = 0; i < n - 1; i++) {
      let nextNode = selected[i];
      let cost = arr[cur][nextNode];
      if (cost == 0) return;
      total += cost;
      cur = nextNode;
    }

    let cost = arr[cur][0];
    if (cost == 0) return;
    total += cost;
    minValue = Math.min(minValue, total);

    return;
  }

  for (let i = 1; i < n; i++) {
    if (visited[i]) continue;
    visited[i] = true;
    selected.push(i);
    dfs(depth + 1);
    visited[i] = false;
    selected.pop();
  }
}

dfs(0);
console.log(minValue);

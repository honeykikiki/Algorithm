const fs = require("fs");

const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

let [n, k] = input[0].split(" ").map(Number);
let arr = input[1].split(" ").map(Number);

let visited = Array(n).fill(false);
let selected = [];

let cnt = 0;
let depth = 1;

function dfs(curDepth, start) {
  if (curDepth == depth) {
    let sum = selected.reduce((a, b) => a + b);
    // console.log(selected, sum);

    if (sum == k) {
      cnt++;
    }
  }

  for (let i = start; i < n; i++) {
    if (visited[i]) continue;
    visited[i] = true;
    selected.push(arr[i]);
    dfs(curDepth + 1, i);
    visited[i] = false;
    selected.pop();
  }
}

for (let i = 0; i < n; i++) {
  dfs(0, 0);
  depth++;
}

console.log(cnt);

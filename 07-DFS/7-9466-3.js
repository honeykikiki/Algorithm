const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

let m = +input[0];
let line = 1;
let graph;
let visited;
let cnt;

while (m) {
  let n = +input[line];

  graph = [0, ...input[line + 1].split(" ").map(Number)];
  visited = Array(n + 1).fill(false);
  cnt = 0;

  for (let i = 1; i <= n; i++) {
    if (visited[i]) continue;
    dfs(graph[i], i);
  }

  line += 2;
  m--;
  console.log(n - cnt);
}

function dfs(x, find) {
  if (visited[x]) return;

  if (x === find) {
    cnt++;
    return;
  }

  visited[x] = true;
  dfs(graph[x], find);
  visited[x] = false;
}

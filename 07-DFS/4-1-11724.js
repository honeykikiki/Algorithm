const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

let [n, k] = input[0].split(" ").map(Number);
let graph = [];
for (let i = 1; i <= n; i++) graph[i] = [];
for (let i = 1; i <= k; i++) {
  const [x, y] = input[i].split(" ").map(Number);
  graph[x].push(y);
  graph[y].push(x);
}

let visited = Array(n + 1).fill(false);
let cnt = 0;
for (let i = 1; i <= n; i++) {
  if (visited[i]) continue;
  dfs(i);
  cnt++;
}
console.log(cnt);

function dfs(x) {
  visited[x] = true;

  for (const y of graph[x]) {
    if (visited[y]) continue;
    dfs(y);
  }
}

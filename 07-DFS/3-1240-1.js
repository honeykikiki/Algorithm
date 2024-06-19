const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

let [n, k] = input[0].split(" ").map(Number);
let graph = [];
for (let i = 0; i <= n; i++) graph[i] = [];
for (let i = 1; i < n; i++) {
  const [x, y, cost] = input[i].split(" ").map(Number);
  graph[x].push([y, cost]);
  graph[y].push([x, cost]);
}
// console.log(...graph.join("\n"));
let visited = [];
let distance = [];
for (let i = n; i < n + k; i++) {
  const [x, y] = input[i].split(" ").map(Number);

  visited = Array(n + 1).fill(false);
  distance = Array(n + 1).fill(-1);
  dfs(x, 0);
  console.log(distance[y]);
}

function dfs(x, dist) {
  if (visited[x]) return;
  visited[x] = true;
  distance[x] = dist;
  for (const [y, cost] of graph[x]) dfs(y, dist + cost);
}

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

let n = Number(input[0]);
let graph = [0];
for (let i = 1; i <= n; i++) {
  graph.push(Number(input[i]));
}

let visited = Array(n + 1).fill(false);
let select = [];

for (let i = 1; i <= n; i++) {
  if (visited[i]) continue;
  dfs(graph[i], i);
}

function dfs(x, find) {
  if (visited[x]) return;

  if (x === find) {
    select.push(x);
    return;
  }

  visited[x] = true;
  dfs(graph[x], find);
  visited[x] = false;
}

console.log(select.length);
console.log(select.sort((a, b) => a - b).join("\n"));

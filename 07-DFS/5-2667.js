const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

let [n, m] = input[0].split(" ").map(Number);
let graph = [];
for (let i = 1; i <= n; i++) {
  graph.push(input[i].split("").map(Number));
}

let line = 2;
let cnt = 0;
let dx = [-1, 1, 0, 0];
let dy = [0, 0, -1, 1];
let result = [];

for (let x = 0; x < n; x++) {
  for (let y = 0; y < n; y++) {
    if (graph[x][y] == 1) {
      result[cnt] = 0;
      dfs(x, y);
      line++;
      cnt++;
    }
  }
}

function dfs(x, y) {
  if (graph[x][y] == 0) return;

  graph[x][y] = line;
  result[cnt]++;

  for (let i = 0; i < 4; i++) {
    const nx = x + dx[i];
    const ny = y + dy[i];

    if (nx < 0 || ny < 0 || nx >= n || ny >= n) continue;
    if (graph[nx][ny] == 0) continue;
    if (graph[nx][ny] == line) continue;

    dfs(nx, ny);
  }
}

console.log(line - 2);
console.log(result.sort((a, b) => a - b).join("\n"));

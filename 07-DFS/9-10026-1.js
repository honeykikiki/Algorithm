const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

let n = Number(input[0]);
let graph = [];
let graph2 = [];
for (let i = 1; i <= n; i++) {
  graph.push(input[i].split(""));
  graph2.push(input[i].split("").map((item) => (item === "G" ? "R" : item)));
}

let answer1 = 0; // 일반인
let answer2 = 0; // 적녹생맹

let dx = [-1, 1, 0, 0];
let dy = [0, 0, -1, 1];

function dfs(x, y, node, graph) {
  if (graph[x][y] == 0) return;
  graph[x][y] = 0;

  for (let i = 0; i < 4; i++) {
    const nx = x + dx[i];
    const ny = y + dy[i];

    if (nx < 0 || ny < 0 || nx >= n || ny >= n) continue;
    if (!(node == graph[nx][ny])) continue;

    dfs(nx, ny, node, graph);
  }
}

for (let x = 0; x < n; x++) {
  for (let y = 0; y < n; y++) {
    if (!graph[x][y] == 0) {
      dfs(x, y, graph[x][y], graph);
      answer1++;
    }

    if (!graph2[x][y] == 0) {
      dfs(x, y, graph2[x][y], graph2);
      answer2++;
    }
  }
}

console.log(answer1, answer2);

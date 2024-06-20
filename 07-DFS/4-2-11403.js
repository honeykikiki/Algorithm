const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

let [n, k] = input[0].split(" ").map(Number);
let graph = [];
for (let i = 1; i <= n; i++) graph.push(input[i].split(" "));

let visited;
let list = [];
let select = [];
let answer = [];

for (let i = 0; i < n; i++) {
  answer[i] = [];
  list[i + 1] = [];
  for (let j = 0; j < n; j++) {
    answer[i].push(0);
    if (graph[i][j] == 1) {
      list[i + 1].push(j + 1);
    }
  }
}

for (let i = 1; i <= n; i++) {
  visited = Array(n + 1).fill(false);
  dfs(i, i);
}

function dfs(x, start) {
  if (visited[x]) return;

  visited[x] = true;
  for (const y of list[x]) {
    select.push([start, y]);
    dfs(y, start);
  }
}

for (let i = 0; i < select.length; i++) {
  const [x, y] = select[i].map(Number);
  answer[x - 1][y - 1] = 1;
}

console.log(answer.map((i) => i.join(" ")).join("\n"));

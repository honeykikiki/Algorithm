const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

solution(input);

function solution(input) {
  let n = +input[0];
  let m = +input[1];
  let graph = [];
  for (let i = 1; i <= n; i++) graph[i] = [];
  for (let i = 2; i <= m + 1; i++) {
    let [x, y] = input[i].split(" ").map(Number);
    graph[x].push(y);
    graph[y].push(x);
  }
  console.log(graph.join("\n"));
  let cnt = 0;
  let visited = Array(n + 1).fill(false);
  function dfs(x) {
    visited[x] = true;
    cnt++;

    for (const y of graph[x]) {
      if (!visited[y]) dfs(y);
    }
  }

  dfs(1);
  console.log(cnt - 1);
}

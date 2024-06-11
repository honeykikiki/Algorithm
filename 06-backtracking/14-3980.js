const fs = require("fs");

const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

let n = Number(input[0]);
let line = 1;
while (n) {
  let graph = [];

  for (let i = line; i < line + 11; i++) {
    graph.push(input[i].split(" ").map(Number));
  }

  let visited = Array(11).fill(false);

  let selected = [];
  let max = 0;
  function dfs(depth) {
    if (depth === 11) {
      // console.log(selected);
      max = Math.max(
        max,
        selected.reduce((cur, prev) => cur + prev)
      );

      // return;
    }

    for (let i = 0; i < 11; i++) {
      if (graph[i][depth] == 0 || visited[i]) continue;
      visited[i] = true;
      selected.push(graph[i][depth]);
      dfs(depth + 1);
      visited[i] = false;
      selected.pop();
    }
  }

  dfs(0);
  console.log(max);
  n--;
  line += 11;
}

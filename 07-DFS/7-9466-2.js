const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

let m = +input[0];
let line = 1;
let graph;
let visited;
let finished;
let cnt = 0;

while (m--) {
  let n = +input[line];
  graph = [0, ...input[line + 1].split(' ').map(Number)];
  visited = Array(n + 1).fill(false);
  finished = Array(n + 1).fill(false);

  for (let i = 1; i <= n; i++) {
    if (!visited[i]) dfs(i);
  }

  console.log(n - cnt);
  cnt = 0;
  line += 2;
}

function dfs(node) {
  visited[node] = true;
  let next = graph[node];

  if (!visited[next]) dfs(graph[next]);
  else if (!finished[next]) {
    // 싸이클이 생긴경우
    for (let i = next; i != node; i = graph[i]) {
      cnt++;
    }

    cnt++;
  }

  finished[node] = true;
}

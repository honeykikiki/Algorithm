const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

let [m, ...graph] = input.map(Number);
graph = [0, ...graph];
let visited = Array(m).fill(false);
let finished = Array(m).fill(false);
let result = [];

for (let i = 1; i <= m; i++) {
  if (!visited[i]) dfs(i);
}

function dfs(node) {
  visited[node] = true;

  let next = graph[node];
  if (!visited[next]) dfs(next);
  else if (!finished[next]) {
    // 사이클이 발생
    while (node != next) {
      result.push(next);
      next = graph[next];
    }
    // for (let i = next; node != i; i = graph[i]) {
    //   result.push(i);
    // }
    result.push(node);
  }

  finished[node] = true;
}

result.sort((a, b) => a - b);
console.log(result.length);
console.log(result.join('\n'));

// 7
// 3
// 1
// 1
// 5
// 5
// 4
// 6

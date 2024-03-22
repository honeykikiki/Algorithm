const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

let n = +input[0];
let graph = [];
for (let i = 1; i <= n; i++) {
  graph.push(input[i].split('').map(Number));
}

let cntList = [];
for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    let current = dfs(i, j);
    if (current > 0) cntList.push(current);
  }
}

function dfs(x, y) {
  if (x <= -1 || x >= n || y <= -1 || y >= n) return 0;

  if (graph[x][y] == 1) {
    graph[x][y] = -1;
    let result = 1;
    result += dfs(x - 1, y);
    result += dfs(x, y - 1);
    result += dfs(x + 1, y);
    result += dfs(x, y + 1);
    return result;
  }

  return 0;
}

cntList.sort((a, b) => a - b);
console.log(cntList.length + '\n' + cntList.join('\n'));

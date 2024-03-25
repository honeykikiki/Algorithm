const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

let [m, ...graph] = input;
m = parseInt(m);
let 적녹색약 = 0;
let 일반인 = 0;
let visited = Array(m + 1)
  .fill(false)
  .map(() => Array(m + 1).fill(false)); // 2차원 배역

graph = graph.map((item) => item.split(''));

for (let x = 0; x < m; x++) {
  for (let y = 0; y < m; y++) {
    if (visited[x][y]) continue;
    if (dfs(graph[x][y], x, y)) 적녹색약++;
  }
}

graph = graph.map((item) =>
  item.map((item) => {
    if (item === 'R') return 2;
    if (item === 'B') return 1;
    if (item === 'G') return 2;
  })
);
visited = Array(m + 1)
  .fill(false)
  .map(() => Array(m + 1).fill(false)); // 2차원 배역

for (let x = 0; x < m; x++) {
  for (let y = 0; y < m; y++) {
    if (visited[x][y]) continue;
    if (dfs(graph[x][y], x, y)) 일반인++;
  }
}

function dfs(node, x, y) {
  if (x >= m || y >= m || x <= -1 || y <= -1) return false;

  if (!visited[x][y] && node == graph[x][y]) {
    visited[x][y] = true;
    dfs(node, x + 1, y);
    dfs(node, x - 1, y);
    dfs(node, x, y + 1);
    dfs(node, x, y - 1);
    return true;
  }

  return false;
}

console.log(적녹색약, +' ' + 일반인);

// 5
// RRRBB
// GGBBB
// BBBRR
// BBRRR
// RRRRR

// 상하좌우
// let dx = [-1, 1, 0, 0];
// let dy = [0, 0, -1, 1];

// function dfs(x, y) {
//   if (!visited[x][y]) {
//     visited[x][y] = true;
//     for (let i = 0; i < 4; i++) {
//       const nx = x + dx[i];
//       const ny = x + dy[i];
//       if (nx < 0 || ny < 0 || nx > n || ny >= n) return false;
//       if (graph[x][y] == graph[nx][ny]) dfs(nx, ny);
//     }
//     return true;
//   }
//   return false;
// }

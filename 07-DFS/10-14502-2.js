const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

let [n, m] = input[0].split(' ').map(Number);
let graph = [];
let temp = [];
for (let i = 1; i <= n; i++) {
  let line = input[i].split(' ').map(Number);
  graph.push(line);
  temp.push(Array(m).fill(0));
}
let minValue = 0;

// 최소값 확인 및
function dfs(count) {
  if (count == 3) {
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < m; j++) {
        temp[i][j] = graph[i][j];
      }
    }

    for (let i = 0; i < n; i++) {
      for (let j = 0; j < m; j++) {
        if (temp[i][j] == 2) virus(i, j);
      }
    }

    minValue = Math.max(minValue, getScore());
    return;
  }

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (graph[i][j] == 0) {
        graph[i][j] = 1;
        dfs(count + 1);
        graph[i][j] = 0;
      }
    }
  }
}

// 바이러스 전파
let dx = [-1, 1, 0, 0];
let dy = [0, 0, 1, -1];
function virus(x, y) {
  for (let i = 0; i < 4; i++) {
    const nx = x + dx[i];
    const ny = y + dy[i];
    if (nx < 0 || ny < 0 || nx >= n || ny >= m) continue;
    if (temp[nx][ny] == 0) {
      temp[nx][ny] = 2;
      virus(nx, ny);
    }
  }
}

dfs(0);

function getScore() {
  let count = 0;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (temp[i][j] == 0) count++;
    }
  }

  return count;
}

console.log(minValue);

// 4 6
// 0 0 0 0 0 0
// 1 0 0 0 0 2
// 1 1 1 0 0 2
// 0 0 0 0 0 2

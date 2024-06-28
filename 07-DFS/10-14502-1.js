const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

let [n, m] = input[0].split(" ").map(Number);
let graph = [];
for (let i = 1; i <= n; i++) {
  graph.push(input[i].split(" ").map(Number));
}
let list;

let max = 0;
let dx = [-1, 1, 0, 0];
let dy = [0, 0, -1, 1];

// 벽 3개 만드는 함수
function dfs(depth) {
  if (depth === 3) {
    list = JSON.parse(JSON.stringify(graph));

    for (let x = 0; x < n; x++) {
      for (let y = 0; y < m; y++) {
        if (list[x][y] == 2) {
          isVirus(x, y);
        }
      }
    }

    max = Math.max(max, safetyCount());
    return;
  }

  for (let x = 0; x < n; x++) {
    for (let y = 0; y < m; y++) {
      // 벽 설치 가능한 구역인 경우 만
      if (graph[x][y] == 0) {
        graph[x][y] = 1;
        dfs(depth + 1);
        graph[x][y] = 0;
      }
    }
  }
}

dfs(0);
console.log(max);

// 바이러스 퍼트리는 함수
function isVirus(x, y) {
  for (let i = 0; i < 4; i++) {
    const nx = x + dx[i];
    const ny = y + dy[i];

    if (nx < 0 || ny < 0 || nx >= n || ny >= m) continue;
    if (list[nx][ny] == 0) {
      list[nx][ny] = 2;
      isVirus(nx, ny);
    }
  }
}

// 안전 영역 구하는 함수
function safetyCount() {
  let cnt = 0;
  for (let x = 0; x < n; x++) {
    for (let y = 0; y < m; y++) {
      if (list[x][y] == 0) {
        cnt++;
      }
    }
  }

  return cnt;
}

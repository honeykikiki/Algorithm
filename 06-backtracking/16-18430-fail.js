const fs = require("fs");

const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

let [n, m] = input[0].split(" ").map(Number);
let graph = [];
let visited = [];
for (let i = 1; i <= n; i++) {
  graph.push(input[i].split(" ").map(Number));
  visited.push(Array(m).fill(false));
}
/**
 * 1. 처음 좌표에 최대값 부매랑을 만든다
 * 2. 방문하지 않은 곳 좌표로가서 부매랑을 만들어본다.
 * 3. 그 둘이 더한다
 * 4. 그 중 최대 값을 구한다.
 * 하지만 풀지 못했다. 다음에 다시 도전 한다. 이놈은 내가 죽인다.
 */

// let dx = [-1, 1, 0, 0];
// let dy = [0, 0, -1, 1];

let diff = [
  [
    // 위, 왼
    [-1, 0],
    [0, -1],
  ],
  [
    // 위, 오
    [-1, 0],
    [0, 1],
  ],
  [
    // 아래, 왼
    [1, 0],
    [0, -1],
  ],
  [
    // 아래, 오
    [1, 0],
    [0, 1],
  ],
];

// let max = 0;
// dfs();
// for (let i = 0; i < n; i++) {
//   for (let j = 0; j < m; j++) {
//     dfs(i, j);
//   }
// }

// function dfs() {
//   // n, m을 기준으로 하나의 부메랑을 만든다

//   // 부메랑을 만들고 만든 부메과 다르게 만들수 있는 모든 부메랑과 계산 해본다. 나머지 부매랑이랑 계산
// }

for (let x = 0; x < n; x++) {
  for (let y = 0; y < m; y++) {
    if (visited[x][y]) continue;

    let [[lx, ly], [rx, ry]] = isPosable(x, y);
    visited[x][y] = true;
    visited[lx][ly] = true;
    visited[rx][ry] = true;

    visited[x][y] = false;
    visited[lx][ly] = false;
    visited[rx][ry] = false;
  }
}

function isPosable(x, y) {
  let max = 0;
  let position = [];

  for (let i = 0; i < 4; i++) {
    let [[lx, ly], [rx, ry]] = diff[i];
    lx = x + lx;
    ly = y + ly;
    rx = x + rx;
    ry = y + ry;
    // nx가 0보다 작은경우, nx가 m보다 큰 경우
    // ny가 0보다 작은경우, ny가 n보다 큰 경우

    if (lx < 0 || ly < 0 || lx >= n || ly >= m) continue;
    if (rx < 0 || ry < 0 || rx >= n || ry >= m) continue;
    if (visited[rx][ry] || visited[lx][ly]) continue; // 방문한 곳은 안감

    console.log(graph[lx][ly] + graph[rx][ry]);
    let curMax = graph[lx][ly] + graph[rx][ry] + graph[x][y] * 2;
    if (curMax > max) {
      max = curMax;

      position = [
        [lx, ly],
        [rx, ry],
      ];
    }
  }

  console.log(x, y);
  console.log(position);
  console.log(...position);
  return position;
}

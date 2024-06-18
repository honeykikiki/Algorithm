const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

let testCase = +input[0];
let line = 1;
while (testCase) {
  let [n, m, k] = input[line].split(" ").map(Number);
  let graph = [];
  for (let i = 0; i < m; i++) graph[i] = Array(n).fill(0);

  for (let i = line + 1; i < line + k + 1; i++) {
    const [x, y] = input[i].split(" ").map(Number);
    graph[y][x] = 1;
  }

  let cnt = 0;
  function dfs(x, y) {
    if (x < 0 || y < 0 || x >= m || y >= n) return;
    if (graph[x][y] == 0) return;

    // 1인 경우 상하 좌우 방문해서 1인곳 찾기

    graph[x][y] = 0;
    dfs(x + 1, y);
    dfs(x - 1, y);
    dfs(x, y + 1);
    dfs(x, y - 1);
  }

  for (let x = 0; x < m; x++) {
    for (let y = 0; y < n; y++) {
      if (graph[x][y] == 1) {
        // 배추를 만난 경우 들어가기
        cnt++;
        dfs(x, y);
      }
    }
  }

  console.log(cnt);

  testCase--;
  line += k + 1;
  // console.log(line, n, m, k, graph);
}

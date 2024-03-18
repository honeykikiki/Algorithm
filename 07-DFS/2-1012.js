const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

solution(input);

function solution(input) {
  let testCase = +input[0]; // 전체 문제 수
  let line = 1;

  while (testCase--) {
    // console.log(line);
    let [m, n, k] = input[line].split(' '); // 가로
    let graph = [];
    for (let i = 0; i < n; i++) {
      graph[i] = Array(+m).fill(0);
    }

    let cnt = 0;
    for (let i = 1; i <= k; i++) {
      let [y, x] = input[line + i].split(' ').map(Number);
      graph[x][y] = 1;
    }

    for (let i = 0; i < n; i++) {
      for (let j = 0; j < m; j++) {
        if (dfs(graph, n, m, i, j)) cnt += 1;
      }
    }

    function dfs(graph, n, m, x, y) {
      if (x <= -1 || x >= n || y <= -1 || y >= m) {
        return false;
      }

      if (graph[x][y] == 1) {
        graph[x][y] = -1;
        dfs(graph, n, m, x - 1, y);
        dfs(graph, n, m, x, y - 1);
        dfs(graph, n, m, x + 1, y);
        dfs(graph, n, m, x, y + 1);
        return true;
      }

      return false;
    }

    line += +k + 1;

    console.log(cnt);
  }
}

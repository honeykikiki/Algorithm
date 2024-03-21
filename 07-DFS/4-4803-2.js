const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

let line = 0;
let testCase = 1;
let visited;
let graph;

while (true) {
  let [n, m] = input[line].split(' ').map(Number);
  if (n == 0 && m == 0) break;
  graph = [];
  for (let i = 1; i <= n; i++) graph[i] = [];
  for (let i = 1; i <= m; i++) {
    const [x, y] = input[line + i].split(' ').map(Number);

    graph[x].push(y);
    graph[y].push(x);
  }

  visited = Array(n + 1).fill(false);
  let cnt = 0;

  for (let i = 1; i <= n; i++) {
    if (!visited[i]) {
      if (!isCircle(i, 0)) cnt++;
    }
  }

  if (cnt == 0) console.log(`Case ${testCase}: No trees.`);
  else if (cnt == 1) console.log(`Case ${testCase}: There is one tree.`);
  else console.log(`Case ${testCase}: A forest of ${cnt} trees.`);

  line += m + 1;
  testCase++;
}

// 지금이랑 이전 값을 확인하여 싸이클인지 확인 하는 함수
function isCircle(x, prev) {
  visited[x] = true;

  for (const y of graph[x]) {
    if (!visited[y]) {
      // 방문하지 않은곳만 방문
      // 사이클 이라면
      if (isCircle(y, x)) return true;
    } else if (y != prev) {
      return true;
    }
  }

  return false;
}

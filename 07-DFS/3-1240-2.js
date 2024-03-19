const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

solution(input);

function solution(input) {
  let [n, m] = input[0].split(' ').map(Number); // 노드 수, 문제 수
  // 주어진 거리 정보를 파싱한다.
  let graph = [];
  let visited;
  let distance;

  for (let i = 1; i <= n; i++) graph[i] = [];
  for (let i = 1; i < n; i++) {
    let [x, y, cost] = input[i].split(' ').map(Number);
    graph[x].push([y, cost]);
    graph[y].push([x, cost]);
  }

  // 구해야 하는 x -> y까지의 거리 값을 가져온다.
  function dfs(x, dist) {
    if (visited[x]) return;
    visited[x] = true;
    distance[x] = dist;
    for (const [y, cost] of graph[x]) dfs(y, dist + cost);
  }

  // 가져온 거리에서 찾아야하는 y번째 값을 출력한다.
  for (let i = 0; i < m; i++) {
    let [x, y] = input[i + n].split(' ').map(Number);
    visited = Array(n + 1).fill(false);
    distance = Array(n + 1).fill(-1);
    dfs(x, 0);
    console.log(distance[y]);
  }
}

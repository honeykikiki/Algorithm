const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

solution(input);

function solution(input) {
  let line = 0;
  let [n, m] = input[0].split(' ').map(Number); // 노드 수, 문제 수
  line += n;
  let 가중치목록 = input.slice(1, line); // 간선에 가중치 정보
  let resultList = input.slice(line); // 답을 구해야하는 간선

  let graph = [];
  let visited = Array(n + 1).fill(false);
  let distance = Array(n + 1).fill(-1);
  for (let i = 1; i <= n; i++) graph[i] = [];
  for (let i = 0; i < 가중치목록.length; i++) {
    const [x, y, cost] = 가중치목록[i].split(' ').map(Number);
    graph[x].push([y, cost]);
    graph[y].push([x, cost]);
  }

  function dfs(x, dist) {
    if (visited[x]) return;
    visited[x] = true;
    distance[x] = dist;
    for (const [y, cost] of graph[x]) dfs(y, dist + cost);
  }

  for (let i = 0; i < resultList.length; i++) {
    const [x, y] = resultList[i].split(' ').map(Number);
    visited = Array(n + 1).fill(false);
    distance = Array(n + 1).fill(-1);
    dfs(x, 0);
    console.log(distance);
    console.log(distance[y]);
  }
}

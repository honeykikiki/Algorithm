const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

solution(input);

function solution(input) {
  let [n, ...list] = input;
  n = +n;
  let graph = []; // 전체 그래프 정보 입력
  for (let i = 0; i <= n; i++) graph.push([0]);
  for (let i = 0; i < n; i++) {
    const line = list[i].split(' ').map(Number);
    for (let j = 0; j < line.length; j++) graph[i + 1].push(line[j]);
  }

  let visited = new Array(11).fill(false); // 방문처리 배열
  let result = []; //순열 정보 배열
  let minValue = 1e9;

  function dfs(depth) {
    if (depth == n - 1) {
      let totalCost = 0; // 1번 노드에서 출발
      let cur = 1; // 1번 노드에서 출발
      for (let i = 0; i < n - 1; i++) {
        let nextNode = result[i];
        let cost = graph[cur][nextNode];
        if (cost == 0) return;
        console.log(cost);
        totalCost += cost;
        cur = nextNode;
      }

      // 마지막 노드에서 1로 돌아오는것이 필수
      let cost = graph[cur][1];
      if (cost == 0) return; // 이동 불가면 무시
      totalCost += cost;
      minValue = Math.min(minValue, totalCost);
    }

    for (let i = 2; i <= n; i++) {
      if (visited[i]) continue;
      result.push(i);
      visited[i] = true;
      dfs(depth + 1);
      result.pop();
      visited[i] = false;
    }
  }

  dfs(0);

  console.log(minValue);
}

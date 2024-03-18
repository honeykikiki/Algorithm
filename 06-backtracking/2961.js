const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

solution(input);

function solution(input) {
  let [n, ...list] = input;
  n = +n;
  let graph = []; // 전체 그래프 정보 입력
  for (let i = 0; i < n; i++) graph.push([]);
  for (let i = 0; i < n; i++) {
    const line = list[i].split(' ').map(Number);
    for (let j = 0; j < line.length; j++) graph[i].push(line[j]);
  }

  let visited = new Array(n).fill(false); // 방문처리 배열
  let result = [];
  let minValue = 1e9;

  function dfs(depth, start) {
    if (depth >= 1) {
      let totalX = 1;
      let totalY = 0;
      for (const i of result) {
        let [x, y] = graph[i];

        totalX *= x;
        totalY += y;
      }

      minValue = Math.min(minValue, Math.abs(totalX - totalY));
    }

    for (let i = start; i < n; i++) {
      if (visited[i]) continue;
      result.push(i);
      visited[i] = true;
      dfs(depth + 1, i + 1);
      result.pop();
      visited[i] = false;
    }
  }

  dfs(0, 0);

  console.log(minValue);
}

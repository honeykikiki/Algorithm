const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

solution(input);

function solution(input) {
  let [r, c] = input[0].split(' ').map(Number);
  let arr = [];
  for (let i = 1; i <= r; i++) arr.push(input[i]);
  let dx = [-1, 1, 0, 0];
  let dy = [0, 0, -1, 1];
  let visited = new Set();
  let maxDepth = 0;

  function dfs(depth, x, y) {
    maxDepth = Math.max(depth, maxDepth);
    for (let i = 0; i < 4; i++) {
      let nx = x + dx[i];
      let ny = y + dy[i];

      if (nx < 0 || nx >= r || ny < 0 || ny >= c) continue; // 맵에서 나가는 경우

      if (visited.has(arr[nx][ny])) continue;

      visited.add(arr[nx][ny]);
      dfs(depth + 1, nx, ny);
      visited.delete(arr[nx][ny]);
    }
  }

  visited.add(arr[0][0]);

  dfs(1, 0, 0);
  console.log(maxDepth);
}

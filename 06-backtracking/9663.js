const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

solution(input);

function solution(input) {
  let n = +input[0];
  let queens = [];

  function possible(x, y) {
    // (x, y) 위치에 퀸을 놓을 수 있는지 확인
    for (const [a, b] of queens) {
      // 현재까지 놓았던 모든 퀸의 위치를 하나씩 확인
      if (a == x || b == y) return false; // 행이나 열이 같다면 놓을 수 없음
      if (Math.abs(a - x) == Math.abs(b - y)) return false; // 대각선에 위치한 경우 놓을 수 없음
    }
    // console.log(x, y);
    return true;
  }

  let cnt = 0;
  function dfs(row) {
    if (row == n) cnt++; //퀸을 N개 배치할 수 있는 경우 카운트

    for (let i = 0; i < n; i++) {
      // 현재 행에 존재하는 열을 하나씩 확인하며
      if (!possible(row, i)) continue; // 현재 위치에 놓을 수 없다면 무시
      queens.push([row, i]);
      dfs(row + 1);
      queens.pop();
    }
  }

  dfs(0);

  console.log(cnt);
}

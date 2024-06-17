const fs = require("fs");

const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

let n = Number(input[0]);
let queens = [];

/**
 * 1. 체스판을 만든다
 * 2. 체스판 위에 퀸을 놓는다
 * 3. 지금 놓아져 있는 퀸이랑 겹치는지 확인한다.
 */

function isPossible(x, y) {
  // console.log(queens);
  for (const [a, b] of queens) {
    if (x == a || y == b) return true;
    if (Math.abs(a - x) == Math.abs(b - y)) return true;
  }

  return false;
}

let cnt = 0;
function dfs(row) {
  if (row == n) {
    cnt++;
  }

  for (let i = 0; i < n; i++) {
    if (isPossible(row, i)) continue;
    queens.push([row, i]);
    dfs(row + 1);
    queens.pop();
  }
}

dfs(0);
console.log(cnt);

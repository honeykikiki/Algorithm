const fs = require("fs");

const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

let [n, m] = input[0].split(" ").map(Number);
const graph = Array.from(Array(n + 1), () => Array(m + 1).fill(0));

let count = 0;

function dfs(x, y) {
  // 종료 조건
  if (x === 1 && y === n + 1) {
    count++;
    return;
  }

  let nx, ny;
  if (x === m) {
    nx = 1;
    ny = y + 1;
  } else {
    nx = x + 1;
    ny = y;
  }

  // x, y에 네모를 놓지 않은 경우
  dfs(nx, ny);

  if (
    graph[y - 1][x] === 0 ||
    graph[y - 1][x - 1] === 0 ||
    graph[y][x - 1] === 0
  ) {
    graph[y][x] = 1;
    dfs(nx, ny);
    graph[y][x] = 0;
  }
}

dfs(1, 1);
console.log(count);

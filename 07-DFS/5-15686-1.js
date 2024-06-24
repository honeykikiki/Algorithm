const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

let [n, m] = input[0].split(" ").map(Number);
let graph = [];
for (let i = 1; i <= n; i++) {
  graph[i] = input[i].split(" ").map(Number);
}

// 집 목록 구하기
let house = [];
for (let x = 1; x <= n; x++) {
  for (let y = 0; y < n; y++) {
    if (graph[x][y] == 1) {
      house.push([x, y + 1]);
    }
  }
}

let chicken = [];
let min = 10e9;

function dfs(depth, start) {
  if (depth == m) {
    // 치킨집과 거리 구하기
    let result = 0;
    for (const x of house) {
      let value = 10e9;
      for (const y of chicken) {
        value = Math.min(value, chickenDist(x, y));
      }
      result += value;
    }

    min = Math.min(min, result);

    return;
  }

  for (let x = start; x <= n; x++) {
    for (let y = 0; y < n; y++) {
      if (graph[x][y] == 2) {
        chicken.push([x, y + 1]);
        graph[x][y] = 0;
        dfs(depth + 1, x);
        chicken.pop();
        graph[x][y] = 2;
      }
    }
  }
}

// 치킨집 거리 구하기
function chickenDist(x, y) {
  let [r1, r2] = x;
  let [c1, c2] = y;

  return Math.abs(r1 - c1) + Math.abs(r2 - c2);
}

dfs(0, 1);
console.log(min);

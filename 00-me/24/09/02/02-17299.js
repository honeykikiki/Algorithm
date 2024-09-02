const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

let N = Number(input[0]);
let point = [];
for (let i = 1; i <= N; i++) {
  point.push(input[i].split(" ").map(Number));
}

const start = [];
let link = [];
const half = Math.floor(N / 2);

const visited = Array(N).fill(0);

let min = Infinity;

dfs(0);
console.log(min);

function dfs(index) {
  // 원하는 인덱스, 배열의 크기가 됬을 때 etc) [1,2]..
  if (index === half) {
    let startSum = 0;
    let linkSum = 0;

    // 인덱스 값 -1 == 스타트팀 안에 없는 숫자임을 의미.
    for (let i = 1; i <= N; i++) {
      if (start.indexOf(i) === -1) {
        link.push(i);
      }
    }

    // 스타트와 링크 팀의 값을 더한다.
    for (let j = 0; j < half - 1; j++) {
      for (let k = j + 1; k < half; k++) {
        startSum +=
          point[start[j] - 1][start[k] - 1] + point[start[k] - 1][start[j] - 1];
        linkSum +=
          point[link[j] - 1][link[k] - 1] + point[link[k] - 1][link[j] - 1];
      }
    }

    let diff = Math.abs(linkSum - startSum);

    min = Math.min(min, diff);

    link = [];
    return;
  }

  // 수열을 만들기 위한 백트래킹
  for (let i = 0; i < N; i++) {
    if (visited[i] === 1) continue;

    visited[i] = 1;
    start.push(i + 1);
    dfs(index + 1);

    start.pop();
    visited[i] = 0;
  }
}

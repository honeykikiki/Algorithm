const fs = require("fs");

const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

let n = 9;
let graph = [];
for (let i = 0; i < n; i++) {
  graph.push(input[i].split(" ").map(Number));
}

// 숫자가 해당 위치에 들어갈 수 있는지 확인하는 함수
function isSafe(x, y, num) {
  for (let i = 0; i < 9; i++) {
    if (graph[x][i] === num || graph[i][y] === num) {
      return false;
    }
  }

  let startX = Math.floor(x / 3) * 3;
  let startY = Math.floor(y / 3) * 3;

  for (let i = startX; i < startX + 3; i++) {
    for (let j = startY; j < startY + 3; j++) {
      if (graph[i][j] === num) {
        return false;
      }
    }
  }

  return true;
}

// 스도쿠를 해결하는 함수
function solveSudoku() {
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      if (graph[i][j] === 0) {
        // 빈 칸을 찾는다.
        for (let num = 1; num <= 9; num++) {
          if (isSafe(i, j, num)) {
            // 해당 숫자가 규칙에 맞는지 확인한다.
            graph[i][j] = num; // 맞으면 숫자를 넣고
            if (solveSudoku()) {
              // 재귀 호출하여 다음 빈 칸을 찾는다.
              return true;
            }
            graph[i][j] = 0; // 실패하면 다시 0으로 되돌린다.
          }
        }
        return false; // 모든 숫자를 시도했음에도 실패하면 false 반환
      }
    }
  }
  return true; // 모든 빈 칸을 채웠으면 true 반환
}

solveSudoku();

// 결과 출력
console.log(graph.map((row) => row.join(" ")).join("\n"));

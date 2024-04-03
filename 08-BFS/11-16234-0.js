class Queue {
  constructor() {
    this.items = {};
    this.headIndex = 0;
    this.tailIndex = 0;
  }

  enqueue(item) {
    this.items[this.tailIndex] = item;
    this.tailIndex++;
  }

  dequeue() {
    const item = this.items[this.headIndex];
    delete this.items[this.headIndex];
    this.headIndex++;
    return item;
  }

  peek() {
    return this.items[this.headIndex];
  }

  getLength() {
    return this.tailIndex - this.headIndex;
  }
}

const fs = require("fs");

const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const [n, l, r] = input[0].split(" ").map(Number);
let graph = [];
for (let i = 1; i <= n; i++) {
  graph.push(input[i].split(" ").map(Number));
}

// 국경선이 열려있는지 상하좌우 확인
let dx = [-1, 1, 0, 0];
let dy = [0, 0, -1, 1];
let moveCount = 0;

while (true) {
  let union = []; // 방문정보
  for (let i = 0; i < n; i++) union.push(Array(n).fill(-1));
  let index = 0;
  for (let x = 0; x < n; x++) {
    for (let y = 0; y < n; y++) {
      if (union[x][y] == -1) {
        dfs(x, y, index, union);
        index++;
      }
    }
  }

  if (index == n * n) break; // 전부 한번씩 돌아간 경우
  moveCount++;
}

console.log(moveCount);

function dfs(x, y, index, union) {
  let united = [[x, y]]; // 연합 목록
  let summary = graph[x][y]; // 연합의 총 인구수
  let cnt = 1; // 연합국의 수
  let q = new Queue();
  q.enqueue([x, y]);
  union[x][y] = index;

  while (q.getLength() != 0) {
    let [x, y] = q.dequeue();

    for (let i = 0; i < 4; i++) {
      const nx = x + dx[i];
      const ny = y + dy[i];

      if (0 <= nx && nx < n && 0 <= ny && ny < n && union[nx][ny] == -1) {
        // console.log(nx, ny);
        let dif = Math.abs(graph[nx][ny] - graph[x][y]);

        if (l <= dif && dif <= r) {
          q.enqueue([nx, ny]);
          union[nx][ny] = index;
          summary += graph[nx][ny];
          cnt++;
          united.push([nx, ny]);
        }
      }
    }
  }

  for (const [i, j] of united) {
    graph[i][j] = parseInt(summary / cnt);
  }
}

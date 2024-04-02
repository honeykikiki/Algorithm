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

// n = 가로, m = 세로
let [n, m] = input[0].split(" ").map(Number);
let graph = [];
for (let i = 0; i < n; i++) {
  graph.push(input[i + 1].split(" ").map(Number));
}

// 상하좌우 확인하는 bfs
let dx = [-1, 1, 0, 0];
let dy = [0, 0, 1, -1];
function bfs() {
  let visited = [];
  let queue = new Queue();
  for (let i = 0; i < n; i++) visited.push(Array(m).fill(false));
  queue.enqueue([0, 0]);
  visited[0][0] = true;

  while (queue.getLength() != 0) {
    let [x, y] = queue.dequeue();

    for (let i = 0; i < 4; i++) {
      let nx = x + dx[i];
      let ny = y + dy[i];

      if (nx < 0 || ny < 0 || nx >= n || ny >= m) continue;
      if (!visited[nx][ny]) {
        // 방문하지 않았고
        if (graph[nx][ny] >= 1) {
          graph[nx][ny] += 1;
        } else {
          queue.enqueue([nx, ny]);
          visited[nx][ny] = true;
        }
      }
    }
  }
}

// 치즈를 녹일건지 확인
function isMelting() {
  let finish = true;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (graph[i][j] >= 3) {
        graph[i][j] = 0;
        finish = false;
      } else if (graph[i][j] == 2) {
        // 한면만 닿은 경우
        graph[i][j] = 1;
      }
    }
  }

  return finish;
}

// 치즈를 다 녹일때 까지 반복
let result = 0;
while (true) {
  bfs();
  if (isMelting()) {
    console.log(result);
    break;
  } else result++;
}

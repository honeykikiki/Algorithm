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

let [n, k] = input[0].split(" ").map(Number); //행 열
let graph = [];
let data = [];

for (let i = 0; i < n; i++) {
  graph.push(input[i + 1].split(" ").map(Number));
  for (let j = 0; j < n; j++) {
    if (graph[i][j] != 0) {
      data.push([graph[i][j], 0, i, j]);
    }
  }
}

data.sort((a, b) => a[0] - b[0]);
let queue = new Queue();
for (const x of data) {
  queue.enqueue(x); // 오름차순으로 정렬한 바이러스를 넣어준다.
}

let [targets, targetX, targetY] = input[n + 1].split(" ").map(Number); // 찾아야 하는 값의 정보

let dx = [-1, 1, 0, 0];
let dy = [0, 0, 1, -1];

while (queue.getLength() != 0) {
  let [virus, s, x, y] = queue.dequeue(); // 바이러스 정보를 꺼내준다
  if (targets == s) break; // 원하느 시간대를 찾으면 멈춰준다.

  for (let i = 0; i < 4; i++) {
    // 상하좌우 반복 돌아주기
    const nx = x + dx[i];
    const ny = y + dy[i];

    if (nx < 0 || ny < 0 || nx >= n || ny >= n) continue; // 범위를 넘어가는 경우는 패스

    // console.log(nx, ny);
    if (graph[nx][ny] == 0) {
      graph[nx][ny] = virus;
      queue.enqueue([virus, s + 1, nx, ny]);
    }
  }
}

console.log(graph[targetX - 1][targetY - 1]);

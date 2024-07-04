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

let [n, k] = input[0].split(" ").map(Number);
let [ts, tx, ty] = input[n + 1].split(" ").map(Number);
let graph = [];
for (let i = 1; i <= n; i++) {
  graph.push(input[i].split(" ").map(Number));
}

let data = [];
let queue = new Queue();

for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    if (graph[i][j] > 0) {
      data.push([graph[i][j], 0, i, j]);
    }
  }
}

data.sort((a, b) => a[0] - b[0]);
for (const item of data) {
  queue.enqueue(item);
}

let dx = [-1, 1, 0, 0];
let dy = [0, 0, -1, 1];

while (queue.getLength() != 0) {
  let [varies, s, x, y] = queue.dequeue();
  if (ts == s) break;

  for (let i = 0; i < 4; i++) {
    const nx = x + dx[i];
    const ny = y + dy[i];

    if (nx < 0 || ny < 0 || nx >= n || ny >= n) continue;
    if (graph[nx][ny] == 0) {
      graph[nx][ny] = varies;
      queue.enqueue([varies, s + 1, nx, ny]);
    }
  }
}

console.log(graph[tx - 1][ty - 1]);

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

let n = Number(input[0]);
let m = Number(input[1]);
let graph = [];
for (let i = 1; i <= n; i++) graph[i] = [];
for (let i = 2; i <= m + 1; i++) {
  let [x, y] = input[i].split(" ").map(Number);
  graph[x].push(y);
  graph[y].push(x);
}

const queue = new Queue();
let cnt = 0;
let visited = Array(n + 1).fill(false);
queue.enqueue([1, 1]);
visited[1] = true;

while (queue.getLength() > 0) {
  let [cur, dist] = queue.dequeue();

  if (dist == 3) break;

  for (const next of graph[cur]) {
    if (visited[next]) continue;
    queue.enqueue([next, dist + 1]);
    visited[next] = true;
    cnt++;
  }
}

console.log(cnt);

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
for (let i = 0; i <= n; i++) graph[i] = [];
for (let i = 2; i <= m + 1; i++) {
  const [x, y] = input[i].split(" ").map(Number);
  graph[x].push(y);
  graph[y].push(x);
}

let queue = new Queue();
let visited = Array(n).fill(false);
queue.enqueue([1, 1]);
let cnt = 0;

while (queue.getLength() != 0) {
  const [cur, depth] = queue.dequeue();
  if (visited[cur]) continue;
  if (depth == 4) break;

  visited[cur] = true;
  cnt++;

  for (const next of graph[cur]) {
    queue.enqueue([next, depth + 1]);
  }
}

console.log(cnt - 1);

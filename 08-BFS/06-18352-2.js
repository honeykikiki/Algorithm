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

let [n, m, k, x] = input[0].split(" ").map(Number);
let graph = [0];

for (let i = 1; i <= n; i++) graph[i] = [];
for (let i = 1; i <= m; i++) {
  let [x, y] = input[i].split(" ").map(Number);
  graph[x].push(y);
}

const queue = new Queue();
let visited = Array(n).fill(false);
let data = [];
queue.enqueue([x, 0]);
visited[x] = true;

while (queue.getLength() > 0) {
  const [cur, dist] = queue.dequeue();

  if (dist == k) {
    data.push(cur);
  }

  for (const next of graph[cur]) {
    if (visited[next]) continue;
    visited[next] = true;
    queue.enqueue([next, dist + 1]);
  }
}

if (data.length > 0) console.log(data.sort((a, b) => a - b).join("\n"));
else console.log(-1);

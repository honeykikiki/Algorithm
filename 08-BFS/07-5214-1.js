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

// n = 노드의 수, m = 노드의 뎁스?, k = 연결 노드의 수
let [n, k, m] = input[0].split(" ").map(Number);
let graph = [];

for (let i = 1; i <= n + m; i++) graph[i] = [];
for (let i = 1; i <= m; i++) {
  const arr = input[i].split(" ").map(Number);
  for (const x of arr) {
    graph[x].push(n + i);
    graph[n + i].push(x);
  }
}

let queue = new Queue();
let visited = new Set([1]);
queue.enqueue([1, 1]);

let found = false;

console.log(graph.join("\n"));

while (queue.getLength() != 0) {
  let [dist, now] = queue.dequeue();

  if (now == n) {
    console.log(parseInt(dist / 2) + 1);
    found = true;
    break;
  }

  for (const item of graph[now]) {
    if (!visited.has(item)) {
      queue.enqueue([dist + 1, item]);
      visited.add(item);
    }
  }
}

if (!found) console.log(-1);

[
  [10, 11],
  [10],
  [10, 12],
  [11],
  [11, 13],
  [12, 13, 14],
  [12, 13],
  [14],
  [14],
  [1, 2, 3],
  [1, 4, 5],
  [3, 6, 7],
  [5, 6, 7],
  [6, 8, 9],
];

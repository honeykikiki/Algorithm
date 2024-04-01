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
let [n, m, k] = input[0].split(" ").map(Number);
let graph = [];
let visited = Array(n + 1).fill(-1);
for (let i = 1; i <= n; i++) graph[i] = [];
for (let i = 1; i <= k; i++) {
  const items = input[i].split(" ").map(Number);
  for (const x of items) {
    if (x != i) {
      graph[i].push(x);
      graph[x].push(i);
    }
  }
}

graph = graph.map((item) => item.sort((a, b) => a - b));

let queue = new Queue();
queue.enqueue(1);
visited[1] = 1;
let found = false;

while (queue.getLength() != 0) {
  let cur = queue.dequeue();

  if (cur == n) {
    console.log(visited[cur]);
    found = true;
    break;
  }

  for (const item of graph[cur]) {
    queue.enqueue(item);
    if (visited[item] == -1) {
      visited[item] = visited[cur] + 1;
    } else {
      visited[item] = Math.min(visited[cur] + 1, visited[item]);
    }
  }
}

if (!found) console.log(-1);

// [[], [2, 3, 4, 5], [], [6, 7], [], [6, 7], [8, 9], [], [], []];

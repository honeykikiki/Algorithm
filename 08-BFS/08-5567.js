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
let [n, m, ...arr] = input;
let graph = [];
for (let i = 1; i <= n; i++) graph[i] = [];
for (let i = 0; i < m; i++) {
  let [x, y] = arr[i].split(" ").map(Number);
  graph[x].push(y);
  graph[y].push(x);
}

let visited = new Set([1]);
let queue = new Queue();
queue.enqueue([1, 1]);

let cnt = 0;

while (queue.getLength() != 0) {
  let [now, dist] = queue.dequeue();

  if (dist == 3) break; // 최단거리가 2 이하인 경우 (나의 친구의 친구는 안됨)

  for (const x of graph[now]) {
    if (!visited.has(x)) {
      queue.enqueue([x, dist + 1]);
      visited.add(x);
      cnt++;
    }
  }
}

console.log(cnt);

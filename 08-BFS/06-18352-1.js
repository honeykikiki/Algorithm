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

let [n, m, k, x] = input[0].split(" ").map(Number); //행 열
let graph = [];
for (let i = 1; i <= n; i++) graph[i] = [];
for (let i = 1; i <= m; i++) {
  let [x, y] = input[i].split(" ").map(Number);
  graph[x].push(y);
}
let distance = Array(n + 1).fill(-1);
distance[x] = 0;

const queue = new Queue();
queue.enqueue(x);

while (queue.getLength() != 0) {
  let now = queue.dequeue();

  for (const nextNode of graph[now]) {
    if (distance[nextNode] == -1) {
      distance[nextNode] = distance[now] + 1;
      queue.enqueue(nextNode);
    }
  }
}

let check = false;
for (let i = 1; i <= n; i++) {
  if (distance[i] == k) {
    console.log(i);
    check = true;
  }
}

if (!check) console.log(-1);

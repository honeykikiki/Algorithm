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

let [v, e, targetD, targets] = input[0].split(" ").map(Number); //행 열
let graph = [];
for (let i = 0; i <= v; i++) graph[i] = [];
for (let i = 1; i <= e; i++) {
  let [x, y] = input[i].split(" ").map(Number);
  graph[x].push(y);
}
let queue = new Queue();
queue.enqueue([0, targets]);
let visited = Array(e + 1).fill(false);
let data = [];

while (queue.getLength() != 0) {
  let [distance, cur] = queue.dequeue();
  visited[cur] = true;
  // 내가 찾는거리에 도달 한경우
  if (targetD == distance) break;

  for (const x of graph[cur]) {
    if (!visited[x]) {
      visited[x] = true;
      queue.enqueue([distance + 1, x]);
      if (targetD == distance + 1) data.push(x);
    }
  }
}

data.sort((a, b) => a - b);
if (data.length == 0) console.log(-1);
else console.log(data.join("\n"));

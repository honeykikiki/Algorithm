class Queue {
  constructor() {
    this.items = {};
    this.head = 0;
    this.tail = 0;
  }

  enqueue(item) {
    this.items[this.tail] = item;
    this.tail++;
  }

  dequeue() {
    const item = this.items[this.head];
    delete this.items[this.head];
    this.head++;
    return item;
  }

  peek() {
    return this.items[this.head];
  }

  getLength() {
    return this.tail - this.head;
  }
}
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

/**
 * 촌수 구하기
 * 1. n명의 사람들이 주어진다.
 * 2. 7번 에서 3번의 촌수를 구한다
 * 3. graph로 정리한다.
 * 4. dfs로 돌아다니면서 찾는다.
 */

const n = Number(input[0]);
const [start, target] = input[1].split(" ").map(Number);
const length = Number(input[2]);

let graph = [];

for (let i = 1; i <= n; i++) graph[i] = [];
for (let i = 3; i <= length + 2; i++) {
  const [x, y] = input[i].split(" ").map(Number);

  graph[x].push(y);
  graph[y].push(x);
}

let queue = new Queue();
let visited = Array(n + 1).fill(false);
let bFind = false;
queue.enqueue([start, 0]);

while (queue.getLength() != 0) {
  let [cur, dist] = queue.dequeue();
  visited[cur] = true;

  if (cur == target) {
    bFind = true;
    console.log(dist);
    break;
  }

  for (const next of graph[cur]) {
    if (visited[next]) continue;
    queue.enqueue([next, dist + 1]);
  }
}

if (!bFind) console.log(-1);

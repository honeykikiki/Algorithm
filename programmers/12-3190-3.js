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

let answers = 0;
let graph = [
  [1, 0, 1, 1, 1],
  [1, 1, 1, 0, 1],
  [1, 0, 1, 1, 1],
  [1, 0, 1, 0, 0],
  [0, 0, 0, 0, 1],
];

let dx = [-1, 1, 0, 0];
let dy = [0, 0, -1, 1];

let queue = new Queue();
queue.enqueue([0, 0, 1]);
let isPossible = false;
let answer = 0;

while (queue.getLength() != 0) {
  let [x, y, depth] = queue.dequeue();
  if (x == 4 && y == 4) {
    answer = depth;
    console.log(x, y, depth);
    isPossible = true;
    A;
  }

  for (let i = 0; i < 4; i++) {
    const nx = x + dx[i];
    const ny = y + dy[i];

    if (nx < 0 || ny < 0 || nx >= 5 || ny >= 5) continue;
    if (graph[nx][ny] == 0) continue;
    queue.enqueue([nx, ny, depth + 1]);
  }
}
if (isPossible) console.log(answer);
else console.log(-1);

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

let testCase = Number(input[0]);

let oper = [
  [-1, -2],
  [-2, -1],
  [1, -2],
  [2, -1],
  [-1, 2],
  [-2, 1],
  [1, 2],
  [2, 1],
];
let line = 1;
while (testCase) {
  let n = Number(input[line]);
  let visited = Array(n)
    .fill()
    .map(() => Array(n).fill(0));
  let [x, y] = input[line + 1].split(" ").map(Number);
  let [tx, ty] = input[line + 2].split(" ").map(Number);

  let queue = new Queue();
  queue.enqueue([x, y]);

  while (queue.getLength() != 0) {
    const [x, y] = queue.dequeue();

    if (tx == x && ty == y) break;

    for (const [a, b] of oper) {
      const nx = x + a;
      const ny = y + b;
      if (nx < 0 || ny < 0 || nx >= n || ny >= n) continue;

      if (visited[nx][ny] == 0) {
        visited[nx][ny] = visited[x][y] + 1;
        queue.enqueue([nx, ny]);
      }
    }
  }

  console.log(visited[tx][ty]);

  testCase--;
  line += 3;
}

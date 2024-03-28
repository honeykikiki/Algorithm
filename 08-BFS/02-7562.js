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

let testCase = +input[0];
let line = 1;
let dx = [-2, -1, -2, -1, 1, 2, 1, 2];
let dy = [-1, -2, 1, 2, -2, -1, 2, 1];

while (testCase--) {
  const queue = new Queue();
  let I = +input[line];
  let [x, y] = input[line + 1].split(" ").map(Number);
  let [targetX, targetY] = input[line + 2].split(" ").map(Number);
  let visited = [];
  for (let i = 0; i < I; i++) visited.push(Array(I).fill(0));
  queue.enqueue([x, y]);
  visited[x][y] = 1;

  while (queue.getLength() != 0) {
    let cur = queue.dequeue();
    x = cur[0];
    y = cur[1];

    for (let i = 0; i < 8; i++) {
      let nx = x + dx[i];
      let ny = y + dy[i];
      if (nx < 0 || nx >= I || ny < 0 || ny >= I) continue; // 공간을 벗어나는 경우
      if (visited[nx][ny] == 0) {
        visited[nx][ny] = visited[x][y] + 1;
        queue.enqueue([nx, ny]);
      }
    }
  }

  line += 3;

  console.log(visited[targetX][targetY] - 1);
}

// 3
// 8
// 0 0
// 7 0
// 100
// 0 0
// 30 50
// 10
// 1 1
// 1 1

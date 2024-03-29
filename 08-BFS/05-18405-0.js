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

let [n, k] = input[0].split(" ").map(Number); //행 열
let graph = [];
for (let i = 0; i <= n; i++) graph[i] = [];
for (let i = 1; i <= n; i++) {
  input[i].split(" ").map((item) => {
    graph[i].push(item);
  });
}
let [time, targetX, targetY] = input[n + 1].split(" ").map(Number); // 찾아야 하는 값의 정보
let curTime = 0;
const queue = new Queue();

let dx = [-1, 1, 0, 0];
let dy = [0, 0, 1, -1];
let visited = [];
for (let i = 1; i <= k; i++) visited.push(i);

function bfs() {
  for (let x = 1; x <= n; x++) {
    for (let y = 0; y < n; y++) {
      let cur = graph[x][y];

      if (cur != 0 && visited.includes(+cur)) {
        visited.shift();
        for (let i = 0; i < 4; i++) {
          const nxtX = x + dx[i];
          const nxtY = y + dy[i];
          if (nxtX < 0 || nxtY < 0 || nxtX > n || nxtY > n) continue; // 범위를 벋어나는 경우
          let nextValue = graph[nxtX][nxtY];
          if (nextValue == 0) {
            graph[nxtX][nxtY] = cur;
          }
        }
      }
    }
  }

  if (time == curTime) {
    console.log(graph[targetX][targetY - 1]);
  }
  curTime++;
}

for (let i = 0; i < k; i++) {
  bfs();
  for (let i = 1; i <= k; i++) visited.push(i);
}

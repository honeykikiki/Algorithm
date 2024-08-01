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

let [n, m] = input[0].split(" ").map(Number);
let graph = [];

for (let i = 1; i <= n; i++) {
  graph[i - 1] = [...input[i].split(" ").map(Number)];
}

const dx = [-1, 1, 0, 0];
const dy = [0, 0, -1, 1];

function findCheese() {
  let visited = [];
  for (let i = 0; i < n; i++) visited.push(Array(m).fill(false));
  const queue = new Queue();
  queue.enqueue([0, 0]);
  visited[0][0] = true;

  while (queue.getLength() != 0) {
    let [x, y] = queue.dequeue();
    console.log(x, y);
    for (let i = 0; i < 4; i++) {
      let nx = x + dx[i];
      let ny = y + dy[i];

      if (nx < 0 || ny < 0 || nx >= n || ny >= m) continue;
      if (!visited[nx][ny]) {
        // 방문하지 않았고
        if (graph[nx][ny] >= 1) {
          graph[nx][ny] += 1;
        } else {
          queue.enqueue([nx, ny]);
          visited[nx][ny] = true;
        }
      }
    }
  }

  // for (let x = 0; x < n; x++) {
  //   for (let y = 0; y < m; y++) {
  //     if (graph[x][y] == 1) {
  //       let cnt = 0;

  //       for (let i = 0; i < 4; i++) {
  //         const nx = x + dx[i];
  //         const ny = y + dy[i];

  //         if (nx < 0 || ny < 0 || nx > n || ny > m) continue;
  //         if (graph[nx][ny] == 2) {
  //         }
  //       }
  //     }
  //   }
  // }
}

function isMelting() {
  let result = true;
  for (let x = 0; x < n; x++) {
    for (let y = 0; y < m; y++) {
      if (graph[x][y] >= 3) {
        graph[x][y] = 0;
        result = false;
      } else if (graph[x][y] == 2) {
        // 한면만 닿은겅우
        graph[x][y] = 1;
      }
    }
  }

  return result;
}

let answer = 0;

while (true) {
  findCheese();
  if (isMelting()) {
    console.log(answer);
    break;
  } else {
    answer++;
  }
  console.log("--------------------------------");
}

/**
 * 1. 전부 방문해서 외부공기랑 마주 보는 값을 넣어준다
 * 2. 외부공기?
 */

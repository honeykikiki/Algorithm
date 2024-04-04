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

let n = Number(input[0]); // 보드의 크기(N)
let k = Number(input[1]); // 사과의 개수(K)
// 데이터 파싱
let data = [];
for (let i = 0; i <= n; i++) data[i] = Array(n + 1).fill(0);
for (let i = 1; i <= k; i++) {
  // 사과 데이터 파싱
  const [x, y] = input[i + 1].split(" ").map(Number);
  data[x][y] = 1;
}

let info = [];
let l = +input[k + 2];
for (let i = k + 3; i <= k + 2 + l; i++) {
  const [a, b] = input[i].split(" ");
  info.push([+a, b]);
}

// 돌아가는 방향 구하기
// 처음에는 오른쪽을 보고 있으므로 (동, 남, 서, 북)
let dx = [0, 1, 0, -1];
let dy = [1, 0, -1, 0];
function turn(direction, c) {
  if (c == "L") {
    // 왼쪽으로 90도 이동
    direction = direction - 1;
    if (direction == -1) direction = 3;
  } else {
    // 오른쪽으로 90도 이동
    direction = (direction + 1) % 4;
  }

  return direction;
}

// dfs 진행
let [x, y] = [1, 1]; // 처음시작 위치
data[x][y] = 2; // 뱀의 위치 2로 표시
let direction = 0;
let index = 0;
let time = 0;
let q = new Queue();
q.enqueue([x, y]);

while (true) {
  let nx = x + dx[direction];
  let ny = y + dy[direction];

  if (1 > nx || nx > n || 1 > ny || ny > n || data[nx][ny] == 2) {
    time++;
    break;
  }

  if (data[nx][ny] == 0) {
    data[nx][ny] = 2;
    q.enqueue([nx, ny]);
    let [px, py] = q.dequeue();
    data[px][py] = 0;
  }

  if (data[nx][ny] == 1) {
    data[nx][ny] = 2;
    q.enqueue([nx, ny]);
  }

  time++;
  [x, y] = [nx, ny];

  if (index < l && time == info[index][0]) {
    direction = turn(direction, info[index][1]);
    index++;
  }
}

console.log(time);

// 6
// 3
// 3 4
// 2 5
// 5 3
// 3
// 3 D
// 15 L
// 17 D

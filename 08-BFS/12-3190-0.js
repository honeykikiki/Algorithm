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
let graph = [];
for (let i = 0; i <= n; i++) graph[i] = Array(n + 1).fill(0);
for (let i = 1; i <= k; i++) {
  const [x, y] = input[i + 1].split(" ").map(Number);
  graph[x][y] = 1; // 사과 위치에 추가
}

let info = [];
let l = +input[k + 2];
for (let i = k + 3; i < k + 3 + l; i++) {
  const [x, c] = input[i].split(" ");
  info.push([Number(x), c]);
}

// 처음에는 오른쪽을 보고 있으므로 (동, 남, 서, 북)
let dx = [0, 1, 0, -1];
let dy = [1, 0, -1, 0];

let [x, y] = [1, 1]; // 뱀의 시작 위치
graph[x][y] = 2; // 뱀이 존재하는 위치 = 2
let direction = 0; // 처음 동쪽을 바라보고 시작
let time = 0; // 시작한 뒤 지난 "초" 정보
let index = 0; // 다음 회전할 정보
let q = new Queue();
q.enqueue([x, y]);

while (true) {
  let nx = x + dx[direction];
  let ny = y + dy[direction];

  if (1 <= nx && nx <= n && 1 <= ny && ny <= n && graph[nx][ny] != 2) {
    // 맵 번위 안에 있고, 뱀의 몸통이 없는 위치
    if (graph[nx][ny] == 0) {
      // 사과가 아닌경우
      graph[nx][ny] = 2;
      q.enqueue([nx, ny]);
      let [px, py] = q.dequeue();
      graph[px][py] = 0;
    }

    if (graph[nx][ny] == 1) {
      // 사과를 만난 경우
      graph[nx][ny] = 2;
      q.enqueue([nx, ny]);
    }
  } else {
    time += 1;
    break;
  }
  [x, y] = [nx, ny];
  time += 1;

  if (index < l && time == info[index][0]) {
    direction = turn(direction, info[index][1]);
    index++;
  }
}

console.log(time);

function turn(direction, c) {
  if (c == "L") {
    direction = direction - 1;
    if (direction == -1) direction = 3;
  } else direction = (direction + 1) % 4;
  return direction;
}

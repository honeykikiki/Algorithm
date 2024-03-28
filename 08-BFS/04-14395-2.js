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

let [s, t] = input[0].split(" ").map(Number);
const queue = new Queue();
queue.enqueue([s, ""]); // 시작시 처음 값 queue에 넣어주기
let visited = new Set([s]); // 방문 배열 안에 방문한 값 넣어주기 위해 사용
let found = false; // 값을 구할 수 없는경우

if (s == t) {
  console.log(0);
  process.exit();
}

while (queue.getLength() != 0) {
  let [value, opers] = queue.dequeue();
  if (value == t) {
    console.log(opers);
    found = true;
    break;
  }

  for (const oper of ["*", "+", "-", "/"]) {
    let nextValue = value;
    if (oper == "*") nextValue *= value;
    if (oper == "+") nextValue += value;
    if (oper == "-") nextValue -= value;
    if (oper == "/" && value != 0) nextValue = 1;
    if (!visited.has(nextValue)) {
      // 방문하지 않은 경우
      queue.enqueue([nextValue, opers + oper]);
      visited.add(nextValue);
    }
  }
}

if (!found) console.log(-1);

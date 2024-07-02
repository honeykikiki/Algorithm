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

const [s, t] = input[0].split(" ").map(Number);

if (s == t) {
  console.log(0);
  process.exit();
}

let queue = new Queue();
let visited = new Set([s]); // 방문 배열 안에 방문한 값 넣어주기 위해 사용
queue.enqueue([s, ""]);
let found = false;

while (queue.getLength() != 0) {
  const [value, oper] = queue.dequeue();
  if (value == t) {
    found = true;
    console.log(oper);
    break;
  }

  for (const operation of ["*", "+", "-", "/"]) {
    let nextValue = value;
    switch (operation) {
      case "*":
        nextValue *= value;
        break;
      case "+":
        nextValue += value;
        break;
      case "-":
        nextValue -= value;
        break;
      case "/":
        if (value != 0) {
          nextValue /= value;
        } else {
          nextValue = 1;
        }
        break;
    }

    if (!visited.has(nextValue)) {
      queue.enqueue([nextValue, oper + operation]);
      visited.add(nextValue);
    }
  }
}

if (!found) console.log(-1);

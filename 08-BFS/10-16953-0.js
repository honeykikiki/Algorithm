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

let queue = new Queue();
queue.enqueue([s, 1]);
let found = false;

while (queue.getLength() != 0) {
  let [now, dist] = queue.dequeue();

  if (now == t) {
    console.log(dist);
    found = true;
    break;
  }
  if (now > t) continue;

  for (const oper of ["*", "1"]) {
    if (oper == "*") {
      queue.enqueue([now * 2, dist + 1]);
    }
    if (oper == "1") {
      queue.enqueue([parseInt(now + "1"), dist + 1]);
    }
  }
}

if (!found) console.log(-1);

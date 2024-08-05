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
/**
 * 1. 숫자가 주어지면 해당 숫자를 target 숫자로 만든다.
 * 2. 숫자는 *2 || 맨뒤에 1 추가 가 가능하다.
 * 3. 트리 구조로 생각혀면 쉽다.
 *      2
 *   21   4
 * 211 42 41 8
 */

let queue = new Queue();
const max = 1e9;
queue.enqueue([s, 1]);
let find = false;
let answer = max;

while (queue.getLength() != 0) {
  const [now, dist] = queue.dequeue();

  if (now == t) {
    find = true;
    console.log(dist);
  }
  if (now > t) continue;

  for (const x of ["*", ""]) {
    if (x == "*") {
      queue.enqueue([now * 2, dist + 1]);
    } else {
      queue.enqueue([Number(now + "1"), dist + 1]);
    }
  }
}

if (!find) console.log(-1);

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

let [n, k] = input[0].split(" ").map(Number);

let MAX = 100001;
let queue = new Queue();
let visited = Array(MAX).fill(0);

queue.enqueue(n);
while (queue.getLength() != 0) {
  let item = queue.dequeue();

  // if (item == k) {
  //   break;
  // }

  for (const nxt of [item - 1, item + 1, item * 2]) {
    if (nxt < 0 || nxt > MAX) continue;
    if (visited[nxt] == 0) {
      visited[nxt] = visited[item] + 1;
      queue.enqueue(nxt);
    }
  }
}

console.log(visited[k]);

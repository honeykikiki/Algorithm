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

const fs = require('fs');

const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

let [n, k] = input[0].split(' ').map(Number);
const max = 100001;
let visited = Array(max).fill(0);

function bfs() {
  const queue = new Queue();
  queue.enqueue(n);

  while (queue.getLength != 0) {
    let cur = queue.dequeue();
    if (cur == k) return visited[cur];

    for (const nxt of [cur - 1, cur + 1, cur * 2]) {
      if (nxt < 0 || nxt > max) continue;
      if (visited[nxt] == 0) {
        visited[nxt] = visited[cur] + 1;
        queue.enqueue(nxt);
      }
    }
  }
}

console.log(bfs());

// 5 17

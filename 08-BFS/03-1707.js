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

let testCase = +input[0];
let line = 1;

while (testCase--) {
  let [v, e] = input[line].split(" ").map(Number);
  let graph = [];
  for (let i = 1; i <= v; i++) graph[i] = [];
  for (let i = 1; i <= e; i++) {
    let [x, y] = input[line + i].split(" ").map(Number);
    graph[x].push([y]);
    graph[y].push([x]);
  }
  let visited = Array(v + 1).fill(-1);

  for (let i = 1; i <= v; i++) {
    if (visited[i] == -1) dfs(i, graph, visited);
  }

  line += e + 1;
  if (isBipartite(graph, visited)) console.log("YES");
  else console.log("NO");
}

function dfs(x, graph, visited) {
  let queue = new Queue();
  queue.enqueue(x);
  visited[x] = 0;

  while (queue.getLength() != 0) {
    x = queue.dequeue();
    for (const y of graph[x]) {
      if (visited[y] == -1) {
        visited[y] = (visited[x] + 1) % 2;
        queue.enqueue(y);
      }
    }
  }
}

function isBipartite(graph, visited) {
  for (let x = 1; x < visited.length; x++) {
    for (const y of graph[x]) if (visited[x] == visited[y]) return false;
  }
  return true;
}

// 2
// 3 2
// 1 3
// 2 3
// 4 4
// 1 2
// 2 3
// 3 4
// 4 2

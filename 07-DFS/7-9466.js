const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

let m = +input[0];
let index = 1;
let visited;
let finished;
let arr;
let cnt = 0;

while (m > 0) {
  const n = +input[index];
  const temp = input[index + 1].split(' ').map((el) => +el);
  arr = [0, ...temp];
  visited = Array(n + 1).fill(false);
  finished = Array(n + 1).fill(false);

  for (let i = 1; i <= n; i++) {
    if (!visited[i]) dfs(i);
  }

  console.log(n - cnt);

  index += 2;
  m -= 1;
  cnt = 0;
}

function dfs(node) {
  visited[node] = true;
  const next = arr[node];

  if (!visited[next]) dfs(next);
  else if (!finished[next]) {
    // 사이클이 발생함
    for (let i = next; i !== node; i = arr[i]) {
      cnt += 1;
    }

    cnt += 1;
  }

  finished[node] = true;
}

// 2
// 7
// 3 1 3 7 3 4 6
// 8
// 1 2 3 4 5 6 7 8

const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

let n = +input[0];
let list = input[1].split(' ').map(Number);
let visited = Array(n).fill(false);
let arr = [];
let maxValue = 0;

function dfs(depth) {
  if (depth == n) {
    maxValue = Math.max(maxValue, absSum());
    return;
  }

  for (let i = 0; i < n; i++) {
    if (visited[i]) continue;
    visited[i] = true;
    arr.push(list[i]);
    dfs(depth + 1);
    visited[i] = false;
    arr.pop();
  }
}

dfs(0);

function absSum() {
  let value = 0;
  for (let i = 2; i <= n; i++) {
    let a = arr[i - 2];
    let b = arr[i - 1];

    value += Math.abs(a - b);
  }
  return value;
}

console.log(maxValue);

// 6
// 20 1 15 8 4 10

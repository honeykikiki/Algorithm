const fs = require("fs");

const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

let [n, m] = input[0].split(" ").map(Number);
let arr = input[1]
  .split(" ")
  .map(Number)
  .sort((a, b) => a - b);
let visited = Array(n).fill(false);
let selected = [];

let answer = "";
function dfs(arr, depth, start) {
  if (depth == m) {
    for (const i of selected) answer += i + " ";
    answer += "\n";
    return;
  }
  let temp = 0;
  for (let i = start; i < arr.length; i++) {
    if (temp == arr[i]) continue;

    visited[i] = true;
    selected.push(arr[i]);
    temp = arr[i];
    dfs(arr, depth + 1, i);
    visited[i] = false;
    selected.pop();
  }
}

dfs(arr, 0, 0);
console.log(answer);

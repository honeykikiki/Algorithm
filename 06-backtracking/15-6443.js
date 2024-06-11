const fs = require("fs");

const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

let n = Number(input[0]);
let line = 1;

while (n--) {
  const str = input[line].trim();
  const results = new Set();

  const arr = str.split("").sort();
  const selected = [];
  const visited = Array(arr.length).fill(false);

  dfs(arr, selected, visited, results, 0);

  const answer = Array.from(results).sort().join("\n");
  // console.log(answer);

  line++;
}

function dfs(arr, selected, visited, results, depth) {
  if (depth === arr.length) {
    const result = selected.join("");
    console.log(selected);
    results.add(result);
    return;
  }

  for (let i = 0; i < arr.length; i++) {
    if (visited[i] || (i > 0 && arr[i] === arr[i - 1] && !visited[i - 1]))
      continue;
    visited[i] = true;
    selected.push(arr[i]);
    dfs(arr, selected, visited, results, depth + 1);
    selected.pop();
    visited[i] = false;
  }
}

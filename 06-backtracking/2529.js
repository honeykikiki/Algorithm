const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

solution(input);

function solution(input) {
  let [k, arr] = input;
  arr = arr.split(' ');
  let visited = Array(10).fill(false);
  let result = [];
  let current = '';
  let first = '';

  function dfs(depth) {
    if (depth == +k + 1) {
      let check = true;
      for (let i = 0; i < arr.length; i++) {
        if ('<' == arr[i]) {
          if (result[i] > result[i + 1]) check = false;
        } else if ('>' == arr[i]) {
          if (result[i] < result[i + 1]) check = false;
        }
      }

      if (check) {
        current = '';
        for (let x of result) current += x + '';
        if (first == '') first = current;
      }
      return;
    }

    for (let i = 0; i < 10; i++) {
      if (visited[i]) continue;
      visited[i] = true;
      result.push(i);
      dfs(depth + 1);
      visited[i] = false;
      result.pop();
    }
  }

  dfs(0);
  console.log(current);
  console.log(first);
}

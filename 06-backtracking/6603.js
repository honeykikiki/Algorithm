const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

solution(input);

function solution(input) {
  let [n] = input[0].split(' ').map(Number);
  n = input.length - 1;
  let visited = [];
  let selected = []; // 현재 순열에 포함된 원소

  let answer = '';
  function dfs(arr, depth, start) {
    if (depth == 6) {
      let result = [];

      for (const i of selected) result.push(arr[i]);
      for (const x of result) answer += x + ' ';
      answer += '\n';
      return;
    }

    for (let i = start; i < arr.length; i++) {
      if (visited[i]) continue;
      selected.push(i);
      visited[i] = true;
      dfs(arr, depth + 1, i + 1);
      selected.pop();
      visited[i] = false;
    }
  }

  for (let i = 0; i < n; i++) {
    let inputList = input[i].split(' ');
    let length = +inputList[0];
    let arr = inputList.slice(1);
    visited = new Array(length).fill(false); // 각 원소 인덱스 별 방문 여부
    dfs(arr, 0, 0);
    answer += '\n';
  }

  console.log(answer);
}

const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

solution(input);

function solution(input) {
  let [n] = input[0].split(' ').map(Number);
  let arr = []; // 순열을 계산하고자 하는 원소가 담긴 배열
  for (let i = 1; i <= n; i++) arr.push(i);
  let visited = new Array(n).fill(false); // 각 원소 인덱스 별 방문 여부
  let selected = []; // 현재 순열에 포함된 원소

  let answer = '';
  function dfs(arr, depth) {
    if (depth == n) {
      let result = [];

      for (const i of selected) result.push(arr[i]);
      for (const x of result) answer += x + ' ';
      answer += '\n';
      return;
    }

    for (let i = 0; i < arr.length; i++) {
      if (visited[i]) continue;
      selected.push(i);
      visited[i] = true;
      dfs(arr, depth + 1);
      selected.pop();
      visited[i] = false;
    }
  }

  dfs(arr, 0);
  console.log(answer);
}

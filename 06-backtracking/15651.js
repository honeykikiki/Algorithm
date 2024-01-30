const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

solution(input);

function solution(input) {
  let [n, m] = input[0].split(' ').map(Number);
  let arr = []; // 순열을 계산하고자 하는 원소가 담긴 배열
  for (let i = 1; i <= n; i++) arr.push(i);
  let visited = new Array(n).fill(false); // 각 원소 인덱스 별 방문 여부
  let selected = []; // 현재 순열에 포함된 원소

  let answer = '';

  function dfs(arr, depth) {
    if (depth == m) {
      for (let i = 0; i < selected.length; i++) answer += selected[i] + ' ';
      answer += '\n';
      return;
    }

    for (let i = 0; i < arr.length; i++) {
      selected.push(i + 1);
      dfs(arr, depth + 1);
      selected.pop();
    }
  }
  dfs(arr, 0);

  console.log(answer);
}

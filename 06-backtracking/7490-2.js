const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

solution(input);

function solution(input) {
  let [n, ...list] = input.map(Number);

  let arr = ['1', '2', '3', '4', '5', '6', '7'];

  function dfs(result, depth) {
    if (depth === arr.length - 1) {
      // 계산 처리
      let answer = '';
      for (let i = 0; i < arr.length; i++) answer += arr[i] + (result[i] ?? '');
      // console.log(answer);
      let current = eval(answer.split(' ').join(''));
      if (current === 0) console.log(answer);
      return;
    }

    for (const x of ['+', '-', ' ']) {
      result.push(x);
      dfs(result, depth + 1);
      result.pop();
    }
  }
  dfs([], 0);
}

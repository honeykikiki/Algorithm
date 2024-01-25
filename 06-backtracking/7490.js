const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

solution(input);

function solution(input) {
  let [n, ...list] = input.map(Number);
  let arr = [];

  for (let i = 0; i < +n; i++) {
    arr = []; // 배열 초기화
    for (let j = 1; j <= list[i]; j++) arr.push(j);
    dfs([], 0);
    console.log();
  }

  function dfs(result, depth) {
    // 마지막 뎁스인 경우
    // console.log(arr);
    if (depth === arr.length - 1) {
      let str = '';
      for (let i = 0; i < arr.length; i++) str += arr[i] + (result[i] ?? '');
      let value = eval(str.split(' ').join(''));
      if (value === 0) console.log(str);
      return;
    }

    // + - ' ' 값 넣어주기 + 부터 계속 들어가고 하나씩 빠지면 서 -가 들어간다 이렇게 전체가 한번씩 다 들어가게 된다
    // ['+', '+', '+', '+', '+', '+']
    // ['+', '+', '+', '+', '+', '-']
    // ['+', '+', '+', '+', '+', ' ']
    for (const x of ['+', '-', ' ']) {
      result.push(x);
      dfs(result, depth + 1);
      result.pop();
    }
  }
}

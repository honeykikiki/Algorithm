const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

solution(input);

function solution(input) {
  let [n] = input;
  let cnt = 0;
  let flag = false;

  while (n >= 0) {
    if (n === 0 || n % 5 == 0) {
      cnt += parseInt(n / 5);
      console.log(cnt);
      flag = true;
      break;
    }
    n -= 3;
    cnt += 1;
  }

  if (!flag) {
    console.log(-1);
  }
}

// 내 풀이 ----------------------- (해결못함)

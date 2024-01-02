const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

solution(input);

function solution(input) {
  let [a, b] = input[0].split(' ').map(Number);
  let result = 1;
  let flag = false;

  while (a <= b) {
    if (a == b) {
      flag = true;
      break;
    }

    if (b % 2 == 0) b = parseInt(b / 2);
    else if (b % 10 === 1) b = parseInt(b / 10);
    else break;
    result++;
  }

  if (flag) console.log(result);
  else console.log(-1);
}

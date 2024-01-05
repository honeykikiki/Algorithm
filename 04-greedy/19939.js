const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

solution(input);

function solution(input) {
  let [n, k] = input[0].split(' ').map(Number);

  let sum = (k * (k + 1)) / 2;

  if (sum > n) {
    // 공의 개수가 부족한 경우
    console.log(-1);
  } else {
    n - sum;
    if (n % k == 0) console.log(k - 1);
    else console.log(k);
  }
}

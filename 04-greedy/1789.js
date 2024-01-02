const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

solution(input);

function solution(input) {
  let [a] = input[0].split(' ').map(Number);
  let result = 0;
  let sum = 0;

  while (sum <= a) {
    result++;
    sum += result;
  }

  console.log(result - 1);
}

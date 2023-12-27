const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

solution(input);

function solution(input) {
  // Write your code
  let [length, arr] = input;

  arr = arr
    .split(' ')
    .map(Number)
    .sort((a, b) => a - b);

  console.log(arr[length[2] - 1]);
}

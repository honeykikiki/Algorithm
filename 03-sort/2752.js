const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

solution(input);

function solution(input) {
  // Write your code
  let [length, ...arr] = input;

  arr.sort((a, b) => parseInt(a, 10) - parseInt(b, 10));
  console.log(arr.join('\n'));
}

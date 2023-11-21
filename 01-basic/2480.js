const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');
let [a, b, c] = input[0].split(' ').map((item) => item);

solution(+a, +b, +c);

function solution(a, b, c) {
  // Write your code
  if (a === b && b === c) {
    console.log(10000 + a * 1000);
    return;
  }

  if (a === b) {
    console.log(1000 + a * 100);
    return;
  }
  if (a === c) {
    console.log(1000 + a * 100);
    return;
  }
  if (b === c) {
    console.log(1000 + b * 100);
    return;
  }

  let big = [a, b, c].reduce((item, prev) => (item < prev ? prev : item));
  console.log(big * 100);
}

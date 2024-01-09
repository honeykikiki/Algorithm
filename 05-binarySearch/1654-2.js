const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

solution(input);

function solution(input) {
  let [n, ...arr] = input;
  let count = +n.split(' ')[1];
  arr = arr.map(Number);

  let start = 0;
  let end = arr.reduce((a, b) => Math.max(a, b));
  let result = 0;

  while (start <= end) {
    let mid = parseInt((start + end) / 2);
    let total = 0;

    for (const item of arr) {
      total += parseInt(item / mid);
    }

    if (total < count) {
      end = mid - 1;
    } else {
      start = mid + 1;
      result = mid;
    }
  }

  console.log(result);
}

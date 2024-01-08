const { resolveObjectURL } = require('buffer');
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

solution(input);

function solution(input) {
  let n = +input[0];
  let arr = input[1].split(' ').map(Number);
  let m = +input[2];

  let start = 0;
  let end = arr.reduce((a, b) => Math.max(a, b));

  let result = 0;

  while (start <= end) {
    let mid = parseInt((start + end) / 2);
    let total = 0;

    for (const item of arr) {
      total += Math.min(item, mid);
    }

    if (total <= m) {
      result = mid;
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }

  console.log(result);
}

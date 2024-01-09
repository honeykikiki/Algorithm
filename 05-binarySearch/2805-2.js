const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

solution(input);

function solution(input) {
  let [n, arr] = input;
  n = n.split(' ').map(Number);
  arr = arr.split(' ').map(Number);

  let start = 0;
  let end = arr.reduce((a, b) => Math.max(a, b));
  let result = 0;

  while (start <= end) {
    let mid = parseInt((start + end) / 2);
    let total = 0;

    for (const item of arr) if (item > mid) total += item - mid;

    if (total < n[1]) {
      end = mid - 1;
    } else {
      start = mid + 1;
      result = mid;
    }
  }

  console.log(result);
}

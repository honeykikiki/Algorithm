const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

solution(input);

function solution(input) {
  let [n, arr] = input;
  const H = +n.split(' ')[1];
  arr = arr.split(' ').map(Number);

  let left = 0;
  let right = arr.reduce((a, b) => Math.max(a, b));
  let result = 0;

  while (left <= right) {
    let mid = parseInt((left + right) / 2);
    let total = 0;

    for (const item of arr) if (item > mid) total += item - mid;

    console.log(total, H, left, right);
    if (total < H) {
      right = mid - 1;
    } else {
      result = mid;
      left = mid + 1;
    }
  }

  console.log(result);
}

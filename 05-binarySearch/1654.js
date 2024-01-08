const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

solution(input);

function solution(input) {
  let [n, ...arr] = input;
  n = n.split(' ');
  let N = n[0];
  let K = n[1]; // 랜선의 개수
  arr = arr.map(Number);

  let start = 1;
  let end = arr.reduce((a, b) => Math.max(a, b));
  let result = 0;

  while (start <= end) {
    let mid = parseInt((start + end) / 2);
    let total = 0;

    for (const item of arr) {
      total += parseInt(item / mid);
    }

    if (total < K) {
      end = mid - 1;
    } else {
      result = mid;
      start = mid + 1;
    }
  }

  console.log(result);
}

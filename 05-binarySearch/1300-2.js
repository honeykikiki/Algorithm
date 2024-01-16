const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

solution(input);

function solution(input) {
  let [n, k] = input.map(Number);
  let start = 1;
  let end = 10 ** 10;

  let result = 0;
  while (start <= end) {
    let mid = parseInt((start + end) / 2);
    let total = 0;

    for (let i = 1; i <= n; i++) {
      total += Math.min(parseInt(mid / i), n); // 이부분이 핵심
    }

    if (total >= k) {
      result = mid;
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }

  console.log(result);
}

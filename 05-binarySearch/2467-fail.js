const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

solution(input);

function solution(input) {
  let [n, ...arr] = input;
  let N = n.split(' ')[0];
  let K = n.split(' ')[1];
  arr = arr.map(Number).sort((a, b) => a - b);

  let start = 0;
  let end = 1000000000;

  let result = 0;
  while (start <= end) {
    let mid = parseInt((start + end) / 2);
    let count = 1;
    let prev = arr[0];

    for (const cur of arr) {
      if (cur - prev >= mid) {
        prev = cur;
        count++;
      }
    }

    if (count < K) {
      end = mid - 1;
      result = end;
    } else start = mid + 1;
  }
}

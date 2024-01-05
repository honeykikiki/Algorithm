const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

let pibo = [];
pibo.push(0);
pibo.push(1);
while (pibo[pibo.length - 1] < 1e9)
  pibo.push(pibo[pibo.length - 2] + pibo[pibo.length - 1]);

solution(input);

function solution(input) {
  let [n, ...arr] = input;
  arr = arr.map(Number);
  let result = [];
  for (let ts = 0; ts < +n; ts++) {
    let val = arr[ts];
    let i = pibo.length - 1;
    let list = [];
    while (val > 0) {
      if (val >= pibo[i]) {
        val -= pibo[i];
        list.push(pibo[i]);
      }
      i--;
    }
    result.push(list);
  }

  for (let i = 0; i < result.length; i++)
    console.log(result[i].reverse().join(' '));
}

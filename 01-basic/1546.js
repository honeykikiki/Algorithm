const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

solution(input);

function solution(list) {
  // Write your code
  let [length, value] = list;
  value = value.split(' ').map((item) => +item);

  let max = Math.max(...value);
  let average = 0;
  for (let i = 0; i < +length; i++) {
    average += value[i];
  }

  average = average / +length;

  console.log((average / max) * 100);
}

const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

solution(input);

function solution(input) {
  const [length, ...list] = input;
  let result = '';

  for (let i = 0; i < list.length; i++) {
    const [a, b] = list[i].split(' ').map((item) => +item);
    let pow = 1;

    for (let j = 0; j < b; j++) {
      pow = (pow * a) % 10;
    }

    result += (pow === 0 ? 10 : pow) + '\n';
  }

  console.log(result);
}

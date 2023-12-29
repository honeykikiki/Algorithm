const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

solution(input);

function solution(input) {
  // Write your code
  let [length, ...arr] = input;

  arr.sort((a, b) => {
    const ageA = parseInt(a.split(' ')[0]);
    const ageB = parseInt(b.split(' ')[0]);

    if (ageA === ageB) return 0;

    return ageA - ageB;
  });

  console.log(arr.join('\n'));
}

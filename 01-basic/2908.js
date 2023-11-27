const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

console.log(process);
console.log(process.platform);
solution(input);

function solution(input) {
  // Write your code
  let result = '';
  let list = input[0].split(' ');
  let value = list.map((item) => item.split('').reverse().join(''));
  console.log(+value[0] > +value[1] ? value[0] : value[1]);
}

const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';

let input = fs.readFileSync(filePath).toString().split('\n');

solution(input);

function solution(list) {
  // Write your code
  let result = 0;
  let [length, value] = list;
  value.split('').map((item) => {
    result += +item;
  });

  console.log(result);
}

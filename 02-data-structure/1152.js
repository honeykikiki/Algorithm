const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

solution(input);

function solution(input) {
  // Write your code
  let [char] = input;

  let data = char.trim().split(' ');

  if (data == '') {
    console.log(0);
  } else {
    console.log(data.length);
  }
}

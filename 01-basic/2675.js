const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

solution(input);

function solution(list) {
  // Write your code
  let result = '';
  let [length, ...value] = list;
  value = value.map((item) => item.split(' ').map((item) => item));

  for (let i = 0; i < +length; i++) {
    let [length, string] = value[i];

    for (let j = 0; j < string.length; j++) {
      result += string.charAt(j).repeat(length);
    }
    result += '\n';
  }

  console.log(result);
}

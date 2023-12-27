const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

solution(input);

function solution(input) {
  // Write your code
  let [length, ...arr] = input;
  let data = [];
  let result = '';

  for (let i = 0; i < arr.length; i++) {
    let [x, y] = arr[i].split(' ').map(Number);
    data.push([x, y]);
  }

  data.sort((a, b) => {
    if (a[0] != b[0]) return a[0] - b[0];
    else return a[1] - b[1];
  });

  for (let point of data) {
    result += point.join(' ') + '\n';
  }

  console.log(result);
}

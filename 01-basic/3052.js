const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

solution(input);

function solution(list) {
  // Write your code
  let data = list.map(Number);
  let mySet = new Set();

  for (let i = 0; i < 10; i++) {
    mySet.add(data[i] % 42);
  }

  console.log(mySet.size);
}

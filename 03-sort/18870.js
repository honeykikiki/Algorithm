const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

solution(input);

function solution(input) {
  // Write your code
  let [length, arr] = input;
  arr = arr.split(' ');
  let coordinate = coordinateCompression(arr);

  let result = '';
  for (let i = 0; i < arr.length; i++) {
    result += coordinate[arr[i]] + ' ';
  }

  console.log(result);
}

function coordinateCompression(arr) {
  let coordinate = [...new Set(arr)];

  let result = {};
  let coord = coordinate.sort((a, b) => a - b);

  for (let i = 0; i < coord.length; i++) {
    result[coord[i]] = i;
  }

  return result;
}

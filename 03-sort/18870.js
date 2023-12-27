const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

solution(input);

function solution(input) {
  // Write your code
  let [length, arr] = input;
  arr = arr.split(' ');
  let coordinate = coordinateCompression(arr);

  let result = '';
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < coordinate.length; j++) {
      const element = coordinate[j];
      if (arr[i] == element.item) {
        result += element.length + ' ';
      }
    }
  }

  console.log(result);
}

function coordinateCompression(arr) {
  let coordinate = [...new Set(arr)];

  let result = coordinate.sort().map((item, i) => {
    return { item: item, length: i };
  });

  // console.log(result);
  return result;
}

const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

solution(input);

function solution(input) {
  let [length, arr] = input;
  arr = arr.split(' ').map(Number);
  arr.sort((a, b) => a - b);

  let answer = 0;
  let summary = 0;
  for (let i = 0; i < arr.length; i++) {
    summary += arr[i];
    answer += summary;
  }

  console.log(answer);
}

// 내 풀이 -----------------------
// function solution(input) {
//   let [length, arr] = input;
//   let result = 0;
//   let amount = [];

//   arr = arr
//     .split(' ')
//     .map(Number)
//     .sort((a, b) => a - b);

//   // arr.foreach((item) => ());

//   arr.forEach((element, i) => {
//     result += element;
//     amount.push(result);
//   });

//   console.log(amount.reduce((a, b) => a + b));
// }

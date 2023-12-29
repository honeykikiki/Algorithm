const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

solution(input);

// function solution(input) {
//   // Write your code
//   // let [value] = input;
//   // console.log(
//   //   value
//   //     .split('')
//   //     .sort((a, b) => b - a)
//   //     .join('')
//   // );
// }

function solution(input) {
  // Write your code
  let [value] = input;
  let result = '';
  let cnt = {
    0: 0,
    1: 0,
    2: 0,
    3: 0,
    4: 0,
    5: 0,
    6: 0,
    7: 0,
    8: 0,
    9: 0,
  };
  value.split('').map((item) => {
    cnt[+item]++;
  });

  // console.log(cnt);

  for (let i = 9; i >= 0; i--) {
    const element = +cnt[i];

    for (let j = 0; j < element; j++) result += i;
  }
  console.log(result);
}

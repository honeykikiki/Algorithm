const { resolveObjectURL } = require('buffer');
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

solution(input);

function solution(input) {
  let [groups] = input;
  let answer = 0;
  groups = groups.split('-');
  for (let i = 0; i < groups.length; i++) {
    let cur = groups[i]
      .split('+')
      .map(Number)
      .reduce((a, b) => a + b);

    if (i === 0) answer += cur;
    else answer -= cur;
  }

  console.log(answer);
}

// 내 풀이 -----------------------
// function solution(input) {
//   let [groups] = input;
//   groups = groups.split('-');

//   let result = 0;
//   for (let i = 0; i < groups.length; i++) {
//     let cur = +groups[i].split('+').reduce((a, b) => +a + +b);
//     if (i === 0) result += cur;
//     else result -= cur;
//   }

//   console.log(result);
// }

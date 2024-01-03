const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

solution(input);

// function solution(input) {
//   let [n] = input;
//   let arr = [];

//   for (let i = 1; i <= +n; i++) arr.push(input[i].split(' ').map(Number));

//   arr.sort(function (a, b) {
//     if (a[1] != b[1]) return a[1] - b[1];
//     else return a[0] - b[0];
//   });

//   let cnt = 1,
//     cur = 0;

//   for (let i = 1; i < +n; i++) {
//     if (arr[cur][1] <= arr[i][0]) {
//       console.log(arr[i]);
//       cur = i;
//       cnt += 1;
//     }
//   }

//   console.log(cnt);
// }

// ----------------------- (내 풀이)
function solution(input) {
  let n = +input[0];
  let arr = [];
  for (let i = 1; i <= n; i++) arr.push(input[i].split(' ').map(Number));

  arr.sort(function (a, b) {
    if (a[1] !== b[1]) return a[1] - b[1];
    else return a[0] - b[0];
  });

  let count = 0;
  let current = 0;
  for (let i = 0; i < arr.length; i++) {
    if (current <= arr[i][0]) {
      current = arr[i][1];
      count++;
    }
  }

  console.log(count);
}

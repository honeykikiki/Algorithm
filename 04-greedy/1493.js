const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

function nearestSquare(x) {
  let i = 1;
  while (2 ** i <= x) i += 1;
  return i - 1;
}

let length = Number(input[0].split(' ')[0]);
let width = Number(input[0].split(' ')[1]);
let height = Number(input[0].split(' ')[2]);
let cubes = Array(20).fill(0);
let all = length * width * height;
let n = Number(input[1]);
for (let i = 2; i <= n + 1; i++) {
  let a = Number(input[i].split(' ')[0]);
  let b = Number(input[i].split(' ')[1]);
  cubes[a] = b;
}

let size = 19;
size = nearestSquare(length);
size = Math.min(size, nearestSquare(width));
size = Math.min(size, nearestSquare(height));

let res = 0;
let used = 0;
for (let i = size; i >= 0; i--) {
  used *= 8; // 채널, 너비, 높이가 2씩 줄었으므로 큐브의 개수는 8배 증가
  cur = 2 ** i; // 현재의 정육면체 큐브의 길이
  // 채워넣어야 할 큐브의 개수 계산
  let required =
    parseInt(length / cur) * parseInt(width / cur) * parseInt(height / cur) -
    used;

  let usage = Math.min(required, cubes[i]); // 이번 단계에서 넣을 수 있는 큐브의 개수
  res += usage;
  used += usage;
  all -= usage * cur * cur * cur;
  // console.log();
}

if (used == length * width * height) console.log(res); // 박스를 가득 채운 경우
else console.log(-1); // 박스를 가득 채우지 못한 경우

// solution(input);

// function solution(input) {
//   let [사각형, 큐브목록, ...arr] = input;
//   사각형 = 사각형.split(' ').map(Number);
//   큐브목록 = 큐브목록.split(' ').map(Number);
//   arr = arr.map((item) => item.split(' ').map(Number));

//   let 전체넓이 = 사각형.reduce((acc, item) => acc * item);
//   let count = 0;

//   for (let i = arr.length - 1; i >= 0; i--) {
//     const cube = arr[i];
//     // let 큐브 = Math.pow(2, cube[0]);
//     let 큐브 = 2 ** cube[0];
//     let 큐브넓이 = 큐브 * 큐브 * 큐브;

//     console.log(cube[0], 큐브넓이, count, 전체넓이);
//     for (let j = 0; j < cube[1]; j++) {
//       if (전체넓이 <= 0) {
//         break;
//       }

//       if (전체넓이 >= 큐브넓이) {
//         전체넓이 -= 큐브넓이;
//         count++;
//       }
//     }

//     if (전체넓이 <= 0) {
//       break;
//     }
//   }

//   if (전체넓이 > 0) console.log(-1);
//   else console.log(count);
// }

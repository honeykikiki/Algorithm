const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";

let input = fs.readFileSync(filePath).toString().trim().split("\n");

let n = Number(input[0]);
// let answer = 0;
// let classRoom = 0;
// let obj = [];

// for (let i = 1; i <= n; i++) {
//   const [x, y] = input[i].split(" ").map(Number);
//   obj.push([x, y]);
// }

// obj.sort((a, b) => {
//   if (a[0] === b[0]) return a[1] - b[1];
//   else return a[0] - b[0];
// });

// console.log(...obj);
// obj.forEach(([x, y]) => {});

// console.log(cnt);

let answer = 0;
let classRoom = 0;
let obj = [];

for (let i = 1; i <= n; i++) {
  const [x, y] = input[i].split(" ").map(Number);
  obj.push({ time: x, start: 1 });
  obj.push({ time: y, start: -1 });
}

obj.sort((a, b) => {
  if (a.time === b.time) return a.start - b.start;
  else return a.time - b.time;
});

obj.forEach((schedule) => {
  if (schedule.start === -1) {
    // 종료
    classRoom -= 1;
  } else {
    // 시작
    classRoom += 1;
  }

  // 강의실 사용수
  console.log(schedule, answer, classRoom);
  answer = Math.max(answer, classRoom);
});

console.log(...obj);
console.log(answer);

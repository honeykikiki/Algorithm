const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

let [a, b] = input[0].split(' ').map((item) => item);
let [c] = input[1].split(' ').map((item) => item);

solution(+a, +b, +c);

function solution(hour, minute, addTime) {
  // Write your code
  let alarmTime = hour * 60 + minute + addTime;

  let alarmHour = Math.floor(alarmTime / 60);
  let alarmMinute = alarmTime % 60;

  if (alarmHour < 0) {
    alarmHour += 24;
  }

  if (alarmHour > 23) {
    alarmHour -= 24;
  }

  if (alarmMinute < 0) {
    alarmMinute += 60;
  }

  console.log(alarmHour + ' ' + alarmMinute);
}

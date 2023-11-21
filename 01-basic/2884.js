const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');
input = input[0].split(' ').map((item) => item);

solution(+input[0], +input[1]);

function solution(hour, minute) {
  // Write your code
  let alarmTime = hour * 60 + minute - 45;
  let alarmHour = Math.floor(alarmTime / 60);
  let alarmMinute = alarmTime % 60;

  if (alarmHour < 0) {
    alarmHour += 24;
  }

  if (alarmMinute < 0) {
    alarmMinute += 60;
  }

  console.log(alarmHour + ' ' + alarmMinute);
}

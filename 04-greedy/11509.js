const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

solution(input);

function solution(input) {
  let [n, arr] = input;
  arr = arr.split(' ').map(Number);

  let arrowList = [];

  for (let i = 0; i < arr.length; i++) {
    const H = arr[i];

    if (arrowList.indexOf(H) !== -1) {
      arrowList[arrowList.indexOf(H)] -= 1;

      if (arrowList[arrowList.indexOf(H)] == 0) {
        arrowList.splice(arrowList.indexOf(H), arrowList.indexOf(H) + 1);
      }
    } else {
      arrowList.push(H - 1);
    }
  }

  console.log(arrowList.length);
}

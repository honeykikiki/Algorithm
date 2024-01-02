const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

solution(input);

function solution(input) {
  let [ts] = input;
  let line = 1;

  for (let tc = 0; tc < +ts; tc++) {
    n = Number(input[line]);

    let arr = [];
    for (let i = line + 1; i <= n + line; i++) {
      const element = input[i];
      arr.push(element.split(' ').map(Number));
    }
    arr.sort((x, y) => x[0] - y[0]);

    let count = 0;
    let minValue = 100001;

    for (let j = 0; j < arr.length; j++) {
      const element = arr[j];

      if (element[1] < minValue) {
        minValue = element[1];
        count++;
      }
    }

    console.log(count);

    line += n + 1;
  }
}
